import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcITVRsKWC_A4fHsPNh8K_siYRtvrJY5Y",
  authDomain: "sechman-financial.firebaseapp.com",
  projectId: "sechman-financial",
  storageBucket: "sechman-financial.firebasestorage.app",
  messagingSenderId: "887591498357",
  appId: "1:887591498357:web:e1a7b5e140e1f78a66be3c",
  measurementId: "G-CCYNYV7EYP"
};

// Initialize Firebase only if it hasn't been initialized yet
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth }; 