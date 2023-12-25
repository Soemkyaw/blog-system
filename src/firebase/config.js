
import { initializeApp } from "firebase/compat/app";
import { getFirestore } from "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDQXZSNzE0pq5fpJyfhHEe4eGnHqCEd2rk",
  authDomain: "vue-blog-system-b0e26.firebaseapp.com",
  projectId: "vue-blog-system-b0e26",
  storageBucket: "vue-blog-system-b0e26.appspot.com",
  messagingSenderId: "327298733836",
  appId: "1:327298733836:web:e00ddb7fe9fd92a8675b29"
};

// Initialize Firebase
initializeApp(firebaseConfig);
let db = getFirestore()

export { db }

