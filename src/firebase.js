// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCzDIfOdA0o12nhptwJI85ts3VejrP03Fk",
  authDomain: "api-database-firebase.firebaseapp.com",
  databaseURL: "https://api-database-firebase-default-rtdb.firebaseio.com",
  projectId: "api-database-firebase",
  storageBucket: "api-database-firebase.appspot.com",
  messagingSenderId: "605754105241",
  appId: "1:605754105241:web:c2e782ddd7b4a207e74708",
  measurementId: "G-V3517M2S45",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Get a reference to the database service
const db = getDatabase();

export default db;
