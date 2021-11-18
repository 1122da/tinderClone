import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyADZlH3tds5eGTOpt5vQTUw8GRs5wyRXcM",
  authDomain: "tinderclone-92410.firebaseapp.com",
  projectId: "tinderclone-92410",
  storageBucket: "tinderclone-92410.appspot.com",
  messagingSenderId: "137710735113",
  appId: "1:137710735113:web:ee81e20e7f51378310cdd8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
export { auth, db };
