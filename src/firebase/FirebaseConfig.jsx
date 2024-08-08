 import { getFirestore } from 'firebase/firestore';
 import { getAuth } from 'firebase/auth';


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyC1cKaPizE0iS6LHi6BWQtrT-CAan0yUVk",
  authDomain: "ecommerce-5dcda.firebaseapp.com",
  projectId: "ecommerce-5dcda",
  storageBucket: "ecommerce-5dcda.appspot.com",
  messagingSenderId: "282860709259",
  appId: "1:282860709259:web:79883910f80bfb8fc23b8e",
  measurementId: "G-10N0J45ZW9"
};

const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
