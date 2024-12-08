// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtn4eTuHrRss4S-_ipZddUDYBnQPrh8n8",
  authDomain: "fir-auth-6cf10.firebaseapp.com",
  projectId: "fir-auth-6cf10",
  storageBucket: "fir-auth-6cf10.firebasestorage.app",
  messagingSenderId: "553528473223",
  appId: "1:553528473223:web:6dee3b14c0ee7185a92a22",
  measurementId: "G-Z8Q04GHFDQ"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;