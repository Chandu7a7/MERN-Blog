// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-ce646.firebaseapp.com",
  projectId: "mern-blog-ce646",
  storageBucket: "mern-blog-ce646.firebasestorage.app",
  messagingSenderId: "1083173883871",
  appId: "1:1083173883871:web:1517fd02fa55ce30a2be6a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);