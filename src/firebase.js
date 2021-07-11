import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm_8hG1Nn9LrLCvAsIJ74Xeu4fXsz_JZA",
  authDomain: "safarilink-93ce1.firebaseapp.com",
  databaseURL: "https://safarilink-93ce1.firebaseio.com",
  projectId: "safarilink-93ce1",
  storageBucket: "safarilink-93ce1.appspot.com",
  messagingSenderId: "754590651277",
  appId: "1:754590651277:web:093cc20fbbdc584c78e3c4",
  measurementId: "G-Z7VGSJWMRY"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
