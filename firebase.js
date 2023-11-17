// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDrvtpuL-GJzqpM6dThTqFFbC6BDxkQE-M",
  authDomain: "lab-3-d8c6a.firebaseapp.com",
  projectId: "lab-3-d8c6a",
  storageBucket: "lab-3-d8c6a.appspot.com",
  messagingSenderId: "910114646771",
  appId: "1:910114646771:web:3a41ebdeab13bf4a5c2586",
  measurementId: "G-MQF0BJ881D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);