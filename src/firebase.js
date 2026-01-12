import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Yo'riqnoma: Ushbu konfiguratsiyani o'zingizning Firebase loyihangiz ma'lumotlari bilan almashtiring.
// Firebase Console -> Project Settings -> General -> Your apps -> Firebase config
const firebaseConfig = {
    apiKey: "PLACEHOLDER_API_KEY",
    authDomain: "datasite-academy.firebaseapp.com",
    databaseURL: "https://datasite-academy-default-rtdb.firebaseio.com",
    projectId: "datasite-academy",
    storageBucket: "datasite-academy.appspot.com",
    messagingSenderId: "PLACEHOLDER_SENDER_ID",
    appId: "PLACEHOLDER_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
