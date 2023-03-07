// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADE6kNfPJD962fz12hWV2IPSZLBt2oVLo",
  authDomain: "laririfa23.firebaseapp.com",
  projectId: "laririfa23",
  storageBucket: "laririfa23.appspot.com",
  messagingSenderId: "851308901014",
  appId: "1:851308901014:web:f237c08f8221aa0356c8b7",
  measurementId: "G-ZYKQSLVB27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)