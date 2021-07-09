import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDcEZCvKPzFIRNCQ5exOTo6-rRDBK9ZRHM",
    authDomain: "linkedinclone-8fb8d.firebaseapp.com",
    projectId: "linkedinclone-8fb8d",
    storageBucket: "linkedinclone-8fb8d.appspot.com",
    messagingSenderId: "975773085289",
    appId: "1:975773085289:web:31d07dc06753d51f113cf8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};