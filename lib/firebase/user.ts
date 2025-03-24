import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/lib/firebase/firebase.init";

const USERS = "users";

export const addUser = async (data: any) => {
  try {
    const docRef = await addDoc(collection(db, USERS), data);
    return docRef.id;
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
};
export const getAllUsers = async (): Promise<any> => {
  try {
    const usersSnapshot = await getDocs(collection(db, USERS));
    const users = usersSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
export const getUser = async (uid: string) => {
  const docRef = doc(db, USERS, uid);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export const getUserByEmail = async (email: string) => {
  const usersRef = collection(db, USERS); // Change 'users' to your actual collection name
  const q = query(usersRef, where("email", "==", email)); // Query by email
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    return null; // No user found
  }
  return querySnapshot.docs[0].data(); // Return the first matching user
};

export const updateUser = async (uid: string, data: any) => {
  try {
    const docRef = doc(db, USERS, uid);
    const docSnap = await updateDoc(docRef, data);
    return docSnap;
  } catch (error) {
    throw error;
  }
};
