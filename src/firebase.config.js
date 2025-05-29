
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getFirestore, collection, getDocs, addDoc , setDoc , updateDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtKOlTfADXA0MH5Xf1paaTBSD7G3Xd49J16B34",
  authDomain: "jobportal-7973f.firebaseapp.com",
  projectId: "jobportal-7973f",
  storageBucket: "jobportal-7973f.firebasestorage.app",
  messagingSenderId: "432668301782",
  appId: "1:432668301782:web:8a18dce6ee3a0d8c3d6c77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};
