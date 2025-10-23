// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTPSru_hO5YeF9-cpD8KmZQFksukFPxIQ",
  authDomain: "vignesh-showcase.firebaseapp.com",
  projectId: "vignesh-showcase",
  storageBucket: "vignesh-showcase.firebasestorage.app",
  messagingSenderId: "744887446897",
  appId: "1:744887446897:web:d98c03950de3c52c6f9ad0",
  measurementId: "G-HK5BY3EBV9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
