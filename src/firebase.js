import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// User provided configuration
const firebaseConfig = {
    apiKey: "AIzaSyC26bm3A3ISBkfI_5JcgXpve2oNh2Fq2Iw",
    authDomain: "datasite-academy.firebaseapp.com",
    // Database URL is required for Realtime Database. 
    // Based on projectId "datasite-academy", this is the default URL.
    // If this doesn't work, we might need to check the specific region URL in the console.
    databaseURL: "https://datasite-academy-default-rtdb.firebaseio.com",
    projectId: "datasite-academy",
    storageBucket: "datasite-academy.firebasestorage.app",
    messagingSenderId: "965906141570",
    appId: "1:965906141570:web:1b1ac1e456b3a33712ff9b",
    measurementId: "G-WVH8CBFHVF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
