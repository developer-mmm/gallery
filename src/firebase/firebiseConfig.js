import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBSTvYNmncxxJuErQ3iaYOepvBGnaS8qv8",
  authDomain: "gallery-e7c8a.firebaseapp.com",
  projectId: "gallery-e7c8a",
  storageBucket: "gallery-e7c8a.appspot.com",
  messagingSenderId: "676340415885",
  appId: "1:676340415885:web:5473b58f4e14cbe8c751c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
export const auth = getAuth(app);

export const db = getFirestore(app);
