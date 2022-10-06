// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiTvQLo06HrvZbTM6EyJ1ZRJzOsKBJ2Sw",
  authDomain: "tinder-clone-cbc62.firebaseapp.com",
  projectId: "tinder-clone-cbc62",
  storageBucket: "tinder-clone-cbc62.appspot.com",
  messagingSenderId: "815134571454",
  appId: "1:815134571454:web:9bf16117a09e3f30eb57ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };