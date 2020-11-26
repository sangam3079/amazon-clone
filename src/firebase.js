import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDkIdLLlneBZNeiIyZsSN-CmtzQIub9s9c",
    authDomain: "amaazon-nepal.firebaseapp.com",
    databaseURL: "https://amaazon-nepal.firebaseio.com",
    projectId: "amaazon-nepal",
    storageBucket: "amaazon-nepal.appspot.com",
    messagingSenderId: "791426759792",
    appId: "1:791426759792:web:6e1d1a03f0da2ac04208b5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };