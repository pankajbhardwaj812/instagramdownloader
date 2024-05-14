// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd38QAP5zKOC-UGB7lStSf68l2FQoYe88",
  authDomain: "instagramdownload-bac28.firebaseapp.com",
  projectId: "instagramdownload-bac28",
  storageBucket: "instagramdownload-bac28.appspot.com",
  messagingSenderId: "334325931428",
  appId: "1:334325931428:web:44f600a8250d342d60b531",
  measurementId: "G-17VMM2K97B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);