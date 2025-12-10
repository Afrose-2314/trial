// Firebase App (the core Firebase SDK)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, set, get, onValue, update } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyArVVndFLxAfL6tbnEOKf4BaZ_nMbOwJiU",
    authDomain: "python-coding-90ac7.firebaseapp.com",
    databaseURL: "https://python-coding-90ac7-default-rtdb.firebaseio.com",
    projectId: "python-coding-90ac7",
    storageBucket: "python-coding-90ac7.firebasestorage.app",
    messagingSenderId: "226893634662",
    appId: "1:226893634662:web:182989842cf1906902e1a7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, set, get, onValue, update };
