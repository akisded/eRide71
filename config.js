import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBsTgb80wvfTzdn9jVEPGu5bdfq6RN94Zc",
    authDomain: "e-ride-d49db.firebaseapp.com",
    projectId: "e-ride-d49db",
    storageBucket: "e-ride-d49db.appspot.com",
    messagingSenderId: "20321419620",
    appId: "1:20321419620:web:49a8a7c33932bbf6027a71"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

export default firebase.firestore();
