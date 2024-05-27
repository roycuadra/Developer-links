import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAGoqv49uYKrDTLnYYMLTNAZyr0mR2dDQY",
  authDomain: "link-sharing-app-cbfc9.firebaseapp.com",
  projectId: "link-sharing-app-cbfc9",
  storageBucket: "link-sharing-app-cbfc9.appspot.com",
  messagingSenderId: "902806403962",
  appId: "1:902806403962:web:5096dd7d921bb44c50f4c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

export default app;