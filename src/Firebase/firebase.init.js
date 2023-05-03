// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtsTX7fdKFhhmb0Kox8RNzDMVjwRVgYZE",
  authDomain: "simple-emajhon-65da1.firebaseapp.com",
  projectId: "simple-emajhon-65da1",
  storageBucket: "simple-emajhon-65da1.appspot.com",
  messagingSenderId: "246218036497",
  appId: "1:246218036497:web:651c353e0ec5bc49eea8b0",
  measurementId: "G-KTM5GNCSQS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;