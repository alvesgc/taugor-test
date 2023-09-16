import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = ({
  apiKey: "AIzaSyDBp96vawWhIoeXonMx8eF2WojWoEL3O2s",
  authDomain: "taugor-challenger.firebaseapp.com",
  projectId: "taugor-challenger",
  storageBucket: "taugor-challenger.appspot.com",
  messagingSenderId: "157507323923",
  appId: "1:157507323923:web:e5c78dee87fc87154597e6",
  measurementId: "G-92N5TDDMW3"

  
});
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };