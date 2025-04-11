import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
  where,
  query,
} from "firebase/firestore";
import { db } from "@/lib/firebase/firebase.init";
import { CommentType } from "@/app/[pid]/_UI/CommentSection";
import { COMMENTS } from "@/constant/article";

export async function addComment(data: any) {
  try {
    const docRef = await addDoc(collection(db, COMMENTS), {
      ...data,
      createdAt: new Date(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding blog:", error);
    throw error;
  }
}

export async function getComments(): Promise<any> {
  try {
    const commentsSnapshot = await getDocs(collection(db, COMMENTS));
    const comments = commentsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return comments;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
}

export async function getCommentByPostId(postId: string): Promise<any> {
  try {
    const commentRef = collection(db, COMMENTS);
    const q = query(commentRef, where("pid", "==", postId));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      throw new Error("No comments found for this post.");
    }

    const comments = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return comments;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
}
const getSingleComment = async (commentId: string): Promise<any> => {
  try {
    const docRef = doc(db, COMMENTS, commentId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
      };
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error fetching blog:", error);
    throw error;
  }
};
export const likeOnComment = async (commentId: string, userId: string) => {
  try {
    const commentRef = doc(db, COMMENTS, commentId);
    const comment = await getSingleComment(commentId);
    if (!comment) {
      throw new Error("Comment not found");
    }
    if (comment.likes.includes(userId)) {
      const likes = comment.likes.filter((id: string) => id !== userId);
      await updateDoc(commentRef, {
        likes,
      });
      return;
    } else {
      const likes = [...comment.likes, userId];
      await updateDoc(commentRef, {
        likes,
      });
    }
    return comment;
  } catch (error) {
    console.error("Error liking comment:", error);
    throw error;
  }
};
// Comment js
export const replyComment = async (commentId: string, data: any) => {
  try {
    const commentRef = doc(db, COMMENTS, commentId);
    const comment = await getSingleComment(commentId);
    if (!comment) {
      throw new Error("Comment not found");
    }
    const replies = [...comment.replies, data];
    await updateDoc(commentRef, {
      replies,
    });
    return comment;
  } catch (error) {
    console.error("Error liking comment:", error);
    throw error;
  }
};

export const updateComment = async (commentId: string, data: any) => {
  try {
    const commentRef = doc(db, COMMENTS, commentId);
    await updateDoc(commentRef, data);
  } catch (error) {
    console.error("Error liking comment:", error);
    throw error;
  }
};