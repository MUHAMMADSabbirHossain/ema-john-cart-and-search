// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCI8GMeOimjSRmcL4BbF7tNQE2vt5EN8aI",
    authDomain: "ema-john-simple-add3c.firebaseapp.com",
    projectId: "ema-john-simple-add3c",
    storageBucket: "ema-john-simple-add3c.appspot.com",
    messagingSenderId: "311797027269",
    appId: "1:311797027269:web:e8c9fbb07a64ee6167bbac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;