// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 🔥 Replace this with your actual Firebase config from Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyCLEpBhyBFAcJFoMEcPL3gxi8UO55rnWNE",
    authDomain: "vyoomtech-58c9d.firebaseapp.com",
    projectId: "vyoomtech-58c9d",
    storageBucket: "vyoomtech-58c9d.firebasestorage.app",
    messagingSenderId: "949744444146",
    appId: "1:949744444146:web:004e7f6f6dc86e3f44e66b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
