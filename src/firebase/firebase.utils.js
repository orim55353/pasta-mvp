import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDMMwt4t5Pwf9_Immj2T_7y_EqjaTEGgj8",
  authDomain: "pastaloco-d09f6.firebaseapp.com",
  databaseURL: "https://pastaloco-d09f6.firebaseio.com",
  projectId: "pastaloco-d09f6",
  storageBucket: "pastaloco-d09f6.appspot.com",
  messagingSenderId: "883042718527",
  appId: "1:883042718527:web:ebe687dfaa0e66476af98a",
  measurementId: "G-BWN4Q0BH7V",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
export const storage = firebase.storage().ref();

export default firebase;
