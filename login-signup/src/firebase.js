import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcB4pncs-TWJqo8DwwRash8b4wkQgSbwQ",
  authDomain: "login-signup-5d5b9.firebaseapp.com",
  projectId: "login-signup-5d5b9",
  storageBucket: "login-signup-5d5b9.firebasestorage.app",
  messagingSenderId: "724808848364",
  appId: "1:724808848364:web:4190d1116c55ffa2fe26c9",
  measurementId: "G-8JSEVBCQRN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);