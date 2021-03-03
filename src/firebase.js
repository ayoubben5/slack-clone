// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBzZs0IdyLGpA9DHclHzrTkZhWGyEgRiBg",
    authDomain: "slack-clone-e2b4f.firebaseapp.com",
    projectId: "slack-clone-e2b4f",
    storageBucket: "slack-clone-e2b4f.appspot.com",
    messagingSenderId: "99252252729",
    appId: "1:99252252729:web:c3723f83d5834221409de8",
    measurementId: "G-17QCH53N3F"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {auth, provider,db} ;