// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for other Firebase products you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy3ucZheubnJnxPy4qvH7c5QMiTBjUFt0",
  authDomain: "bg-gr-b269c.firebaseapp.com",
  projectId: "bg-gr-b269c",
  storageBucket: "bg-gr-b269c.appspot.com",
  messagingSenderId: "792595602775",
  appId: "1:792595602775:web:00989819d80f0cba493212",
  measurementId: "G-1G72GXQWN8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
