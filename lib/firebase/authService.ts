import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, googleProvider } from "./firebase.init";
import { addUser, getUserByEmail } from "./user";

export const getLoggedInUser = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      return user;
    } else {
      // No user is signed in
      return null;
    }
  });
};

// ✅ Sign Up
export const signUp = async (email: string, password: string, name: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(userCredential.user, { displayName: name });

    // Check if user already exists in the database
    const isExist = await getUserByEmail(email);
    if (!isExist) {
      await addUser({
        uid: userCredential.user.uid,
        name: name,
        email: email,
        role: "user",
      });
    }
    return userCredential;
  } catch (error) {
    const errorCode = (error as { code: string }).code;
    if (errorCode === "auth/email-already-in-use") {
      throw new Error("Email already in use. Please use a different email.");
    } else {
      throw new Error(errorCode);
    }
  }
};

// ✅ Sign In
export const signIn = async (email: string, password: string) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    const errorCode = (error as { code: string }).code;
    throw new Error(errorCode);
  }
};

// ✅ Forgot Password
export const forgotPassword = async (email: string) => {
  try {
    return await sendPasswordResetEmail(auth, email);
  } catch (error) {
    const errorCode = (error as { code: string }).code;
    throw new Error(errorCode);
  }
};

// ✅ Google Login
export const googleLogin = async () => {
  try {
    const userCredential = await signInWithPopup(auth, googleProvider);
    if (!userCredential.user.email) {
      throw new Error("Google user does not have an email.");
    }

    // Check if user exists in the database
    const isExist = await getUserByEmail(userCredential.user.email);
    if (!isExist) {
      await addUser({
        uid: userCredential.user.uid,
        name: userCredential.user.displayName || "Google User",
        email: userCredential.user.email,
        role: "user",
      });
    }

    return userCredential;
  } catch (error) {
    const errorCode = (error as { code: string }).code;
    throw new Error(errorCode);
  }
};

// ✅ Logout
export const logout = async () => {
  try {
    return await signOut(auth);
  } catch (error) {
    const errorCode = (error as { code: string }).code;
    throw new Error(errorCode);
  }
};
