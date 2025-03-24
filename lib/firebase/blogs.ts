import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
  query,
  orderBy,
  limit,
  startAfter,
  where,
  writeBatch,
} from "firebase/firestore";
import { db } from "@/lib/firebase/firebase.init";
import { BLOGS, COMMENTS } from "@/constant/article";

export async function addBlog(data: any) {
  try {
    const docRef = await addDoc(collection(db, BLOGS), {
      ...data,
      createdAt: new Date(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding blog:", error);
    throw error;
  }
}

export async function getBlogs(max?: number, lastDoc?: any): Promise<any> {
  try {
    const maxLimit = max || 10; // Number of blogs per page

    // Query to order by 'createdAt' in descending order (latest first)
    let blogsQuery = query(
      collection(db, "blogs"),
      orderBy("createdAt", "desc"), // Ensure descending order
      limit(maxLimit)
    );

    // If lastDoc is provided, fetch blogs after that document (pagination)
    if (lastDoc) {
      blogsQuery = query(blogsQuery, startAfter(lastDoc));
    }

    const blogsSnapshot = await getDocs(blogsQuery);

    // Get the last document to use as a cursor for the next page
    const lastVisibleDoc = blogsSnapshot.docs[blogsSnapshot.docs.length - 1];

    const blogs = blogsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // Return both the blogs and the last document for pagination
    return blogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
}

export async function getAllBlogs(): Promise<any> {
  try {
    // Query to order blogs by 'createdAt' in descending order (newest first)
    const blogsQuery = query(
      collection(db, "blogs"),
      orderBy("createdAt", "desc") // Order by 'createdAt' in descending order
    );

    const blogsSnapshot = await getDocs(blogsQuery);

    const blogs = blogsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return blogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
}
// export async function getSingleBlog(blogId: string): Promise<any> {
//   try {
//     const docRef = doc(db, BLOGS, blogId);
//     const docSnap = await getDoc(docRef);
//     if (docSnap.exists()) {
//       return {
//         id: docSnap.id,
//         ...docSnap.data(),
//       }
//     } else {
//       console.log("No such document!");
//     }
//   } catch (error) {
//     console.error("Error fetching blog:", error);
//     throw error;
//   }
// }
export async function getSingleBlog(blogId: string): Promise<any> {
  try {
    const docRef = doc(db, BLOGS, blogId); // Ensure "BLOGS" is a string
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        ...data,
        createdAt: data.createdAt?.toDate
          ? data.createdAt.toDate().toISOString()
          : data.createdAt, // Convert Firestore Timestamp to a string
      };
    } else {
      console.log("No such document!");
      return null; // Explicitly return null if no document is found
    }
  } catch (error) {
    console.error("Error fetching blog:", error);
    throw error;
  }
}

export const getAllByCategory = async (category: string): Promise<any> => {
  try {
    const q = query(collection(db, BLOGS), where("category", "==", category));
    const querySnapshot = await getDocs(q);
    const blogs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return blogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
};

export async function updateBlog(blogId: string, data: any) {
  try {
    await updateDoc(doc(db, BLOGS, blogId), data);
  } catch (error) {
    console.error("Error updating blog:", error);
    throw error;
  }
}
export async function deleteBlog(blogId: string) {
  try {
    // Reference to the comments collection
    const commentsRef = collection(db, COMMENTS);

    // Query to get all comments related to the blog
    const q = query(commentsRef, where("pid", "==", blogId));
    const querySnapshot = await getDocs(q);

    // Batch delete for all comments
    const batch = writeBatch(db);
    querySnapshot.forEach((commentDoc) => {
      batch.delete(doc(db, COMMENTS, commentDoc.id));
    });

    // Commit the batch
    await batch.commit();

    // Delete the blog after deleting its comments
    await deleteDoc(doc(db, BLOGS, blogId));
    return true;
  } catch (error) {
    console.error("Error deleting blog and comments:", error);
    throw error;
  }
}