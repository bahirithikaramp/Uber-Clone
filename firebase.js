// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6LUruo7-qz7c-ZRUeVRUxbNsiO8IHwqk",
  authDomain: "uber-clone-1a75f.firebaseapp.com",
  projectId: "uber-clone-1a75f",
  storageBucket: "uber-clone-1a75f.appspot.com",
  messagingSenderId: "732264276007",
  appId: "1:732264276007:web:d561736b08b48f44222e02",
  measurementId: "G-5225TKMPGJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }
