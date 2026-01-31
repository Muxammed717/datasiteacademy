import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyC26bm3A3ISBkfI_5JcgXpve2oNh2Fq2Iw",
    authDomain: "datasite-academy.firebaseapp.com",
    databaseURL: "https://datasite-academy-default-rtdb.firebaseio.com",
    projectId: "datasite-academy",
    storageBucket: "datasite-academy.firebasestorage.app",
    messagingSenderId: "965906141570",
    appId: "1:965906141570:web:1b1ac1e456b3a33712ff9b",
    measurementId: "G-WVH8CBFHVF"
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
