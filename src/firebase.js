import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB1trIfd5Aafcjz8l35kn36Lvqio6QhesA",
    authDomain: "reviewit-31c02.firebaseapp.com",
    databaseURL: "https://reviewit-31c02.firebaseio.com",
    projectId: "reviewit-31c02",
    storageBucket: "reviewit-31c02.appspot.com",
    messagingSenderId: "797296397569",
    appId: "1:797296397569:web:9be1d9c57e8612fbd4df00",
    measurementId: "G-ZQSRC1894D"
  };
// eslint-disable-next-line
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  promt: "select_account",
});
export const signInWithGoogle = () =>    auth.signInWithPopup(provider);
export { db, auth, provider };
export default firebase;
