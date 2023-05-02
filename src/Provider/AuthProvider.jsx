import React, { createContext } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  //Register with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login with email and password
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Login with Google
  const singInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Login with Github
  const singInWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const user = { name: "sakib" };

  const authInfo = {
    createUser,
    user,
    signIn,
    singInWithGoogle,
    singInWithGithub,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
