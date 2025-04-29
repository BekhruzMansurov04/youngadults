import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8jrW2QeNLzlJX9fwcmkyR2KG47nOysFQ",
  authDomain: "myauthproject-68135.firebaseapp.com",
  projectId: "myauthproject-68135",
  storageBucket: "myauthproject-68135.firebasestorage.app",
  messagingSenderId: "403367021686",
  appId: "1:403367021686:web:aa0c014f75d15104386357",
  measurementId: "G-GV4LSQ95WT"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
