import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyC0DjONpdQgp2BR0dkIJs6IsHPj2onwhVQ",
    authDomain: "instagram-clone-4ef1a.firebaseapp.com",
    databaseURL: "https://instagram-clone-4ef1a.firebaseio.com",
    projectId: "instagram-clone-4ef1a",
    storageBucket: "instagram-clone-4ef1a.appspot.com",
    messagingSenderId: "32678859936",
    appId: "1:32678859936:web:b4c112b01e32f5794325c5",
    measurementId: "G-S0SY2CZ37C"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();


  export {db, auth, storage}