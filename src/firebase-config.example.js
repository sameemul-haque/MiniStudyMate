import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASURMENT_ID",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export the Firebase Storage instance
export const storage = firebase.storage();
export const auth = firebase.auth();
