// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a8398.firebaseapp.com",
  projectId: "mern-estate-a8398",
  storageBucket: "mern-estate-a8398.appspot.com",
  messagingSenderId: "669091020942",
  appId: "1:669091020942:web:9f623a4d36e87906f649df"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);



