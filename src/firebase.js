// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCl9JQUpf_4-0qMZk_zNHwHn3RU-idj1zo",
    authDomain: "tasks-manager-dfec4.firebaseapp.com",
    projectId: "tasks-manager-dfec4",
    storageBucket: "tasks-manager-dfec4.firebasestorage.app",
    messagingSenderId: "824666445730",
    appId: "1:824666445730:web:ee51da0dd83bac8a3044fb",
    measurementId: "G-1TE3H4D2XP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);