// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgEaUPSXZDxVi2WQc8SJFkEu-pa-XrTIQ",
  authDomain: "react-project-d973f.firebaseapp.com",
  projectId: "react-project-d973f",
  storageBucket: "react-project-d973f.appspot.com",
  messagingSenderId: "436978104924",
  appId: "1:436978104924:web:764a4bc8f9777a64bd0499"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);

export default auth;