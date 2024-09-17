import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkVInBXwO0PBB6r3lnhPvZerGVaDeaNC0",
  authDomain: "herbverse-ae951.firebaseapp.com",
  projectId: "herbverse-ae951",
  storageBucket: "herbverse-ae951.appspot.com",
  messagingSenderId: "1049925097898",
  appId: "1:1049925097898:web:f7165bd3cdf77a051c73d3",
  measurementId: "G-NH91LGVHH6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);
export const db=getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(app);
export default app;
