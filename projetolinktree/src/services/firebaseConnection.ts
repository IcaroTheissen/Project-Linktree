
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBm01h7tFHh0mP6uc5Ym-MRTefQy63q-gw",
  authDomain: "links-react-67b54.firebaseapp.com",
  projectId: "links-react-67b54",
  storageBucket: "links-react-67b54.firebasestorage.app",
  messagingSenderId: "806719177068",
  appId: "1:806719177068:web:b288e4d9681e3b7a4c3349"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const fb = getFirestore(app);

export { auth, fb};