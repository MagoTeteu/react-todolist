import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDhXtKfAXAy7qloE1wX4HOMf6kPYff8sxM",
  authDomain: "react-todolist-reff.firebaseapp.com",
  projectId: "react-todolist-reff",
  storageBucket: "react-todolist-reff.appspot.com",
  messagingSenderId: "780139880303",
  appId: "1:780139880303:web:31038fd9c90079aab7529a"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };