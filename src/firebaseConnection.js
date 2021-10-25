import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: "AIzaSyAGxA2lyqMQ-jO2UEvKo7AmbylZE4d7jEQ",
  authDomain: "infinite-62679.firebaseapp.com",
  projectId: "infinite-62679",
  storageBucket: "infinite-62679.appspot.com",
  messagingSenderId: "889760211127",
  appId: "1:889760211127:web:f7a47fd2607ee459b5ed32",
  measurementId: "G-1XL7SFMZMZ"
  };

  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }

export default firebase;