import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDQXZSNzE0pq5fpJyfhHEe4eGnHqCEd2rk",
  authDomain: "vue-blog-system-b0e26.firebaseapp.com",
  projectId: "vue-blog-system-b0e26",
  storageBucket: "vue-blog-system-b0e26.appspot.com",
  messagingSenderId: "327298733836",
  appId: "1:327298733836:web:e00ddb7fe9fd92a8675b29"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// database setup
let db = firebase.firestore()
let timestamp = firebase.firestore.FieldValue.serverTimestamp

export {db,timestamp}