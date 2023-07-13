// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKBRssABm3tg5Z9mJJoaTDgRC8RMMnim4",
  authDomain: "express-app-7b95f.firebaseapp.com",
  projectId: "express-app-7b95f",
  storageBucket: "express-app-7b95f.appspot.com",
  messagingSenderId: "530769760323",
  appId: "1:530769760323:web:d89924fe07e136f0d604f6",
  measurementId: "G-W3BBHGLG89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);