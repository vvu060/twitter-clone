import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL_0CDgOjVt5qXwuJWpUpYEu_b1atm5XQ",
  authDomain: "twitter-clone-ff92c.firebaseapp.com",
  databaseURL: "https://twitter-clone-ff92c.firebaseio.com",
  projectId: "twitter-clone-ff92c",
  storageBucket: "twitter-clone-ff92c.appspot.com",
  messagingSenderId: "1075847241694",
  appId: "1:1075847241694:web:7e4667a4966baffc82874f",
  measurementId: "G-MXX4H35B9R",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;