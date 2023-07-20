import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCzoWmCKVLQTNrAe4S4VmDd4IKXBR7vfQw",
  authDomain: "deployment-test-43bbb.firebaseapp.com",
  projectId: "deployment-test-43bbb",
  storageBucket: "deployment-test-43bbb.appspot.com",
  messagingSenderId: "522933404499",
  appId: "1:522933404499:web:9b9e950f2bdbb66f2657a6",
  measurementId: "G-SP6WB8EVK2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app