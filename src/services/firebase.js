import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAqwI5bFWgjbgQ1fXsmaC0kfYrdIsbOM5E",
    authDomain: "chatty-sofka-jccc.firebaseapp.com",
    projectId: "chatty-sofka-jccc",
    storageBucket: "chatty-sofka-jccc.appspot.com",
    messagingSenderId: "666136285724",
    appId: "1:666136285724:web:52c4074e82e571241085d9",
    measurementId: "G-WWVFCFY6B3"
  };

firebase.initializeApp(firebase);

export const auth = firebase.auth;
export const db = firebase.database();