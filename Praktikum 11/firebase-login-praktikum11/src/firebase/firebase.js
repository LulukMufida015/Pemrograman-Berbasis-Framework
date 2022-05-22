import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCxCyrZFKWEz0sJZAqa-BqkmCOgXp9ud4I",
    authDomain: "fir-login-b2558.firebaseapp.com",
    projectId: "fir-login-b2558",
    storageBucket: "fir-login-b2558.appspot.com",
    messagingSenderId: "751430722359",
    appId: "1:751430722359:web:c413c250592ed31cae30b2",
    measurementId: "G-X12DW725W4"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;