import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyDVev7pwjxiuL1jO3umCAlt7A1PnsIuChU",
    authDomain: "valid-scene-392002.firebaseapp.com",
    projectId: "valid-scene-392002",
    storageBucket: "valid-scene-392002.appspot.com",
    messagingSenderId: "428363794645",
    appId: "1:428363794645:web:0cf8cfaef8bec4b0ef7a5c"
  };
  firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  const auth=firebase.auth();
  export {auth};
  export default db;