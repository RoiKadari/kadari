import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyANr-4V8gh3Yca4NiC-mIeUKCKZ4pkK6Ws",
  authDomain: "kadari-75015.firebaseapp.com",
  projectId: "kadari-75015",
  storageBucket: "kadari-75015.appspot.com",
  messagingSenderId: "1057055123667",
  appId: "1:1057055123667:web:a5e1e0268f3891f7c44c26",
  measurementId: "G-ZT11VB1RMT"
};

const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const db = getFirestore(app);

const storage = getStorage(app);
export default storage;