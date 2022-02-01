// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkbGi9O8m8iFxEpv8e8QvDB1WalGh38FY",
  authDomain: "instagram-2-9e61b.firebaseapp.com",
  projectId: "instagram-2-9e61b",
  storageBucket: "instagram-2-9e61b.appspot.com",
  messagingSenderId: "917181893465",
  appId: "1:917181893465:web:3956c0117193275d269a48",
  measurementId: "G-1XKGHW4X4D"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);

const db = getFirestore();
const storage = getStorage();

export { app, db, storage };