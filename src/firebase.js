import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyD9PqNnZgvlV5RNTmRhbBCObrph905aRIc",
  authDomain: "drive-practice-clone.firebaseapp.com",
  projectId: "drive-practice-clone",
  storageBucket: "drive-practice-clone.appspot.com",
  messagingSenderId: "1060125969004",
  appId: "1:1060125969004:web:ff30396be2af5324686649"
})

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider }