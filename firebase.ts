// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoQ9kB2L7jsKdkJskbVvNYWrAVBcp1Xjw",
  authDomain: "netflix-5e6e3.firebaseapp.com",
  projectId: "netflix-5e6e3",
  storageBucket: "netflix-5e6e3.appspot.com",
  messagingSenderId: "436861276235",
  appId: "1:436861276235:web:5abefa809009f8aaabfdce",
  measurementId: "G-SBJWGRYP72"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }