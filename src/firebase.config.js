
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDz6nL9a53D03_ywnk5rTPBr_QwPUwKH1Q",
  authDomain: "spawn-2cc6d.firebaseapp.com",
  projectId: "spawn-2cc6d",
  storageBucket: "spawn-2cc6d.appspot.com",
  messagingSenderId: "134841004005",
  appId: "1:134841004005:web:6a794e605dd56ef3fb890c",
  measurementId: "G-TSGFFP3JF7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
