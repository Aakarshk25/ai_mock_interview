// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi2McWuxjMIsgavUiWH98TpgwlPa1dXfQ",
  authDomain: "nextgen-16369.firebaseapp.com",
  projectId: "nextgen-16369",
  storageBucket: "nextgen-16369.firebasestorage.app",
  messagingSenderId: "247100667708",
  appId: "1:247100667708:web:0d9c8358f9451161dd9039",
  measurementId: "G-KXW7KE10HC"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);