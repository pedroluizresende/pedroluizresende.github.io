import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCtf4NMaHMkrF44QVBXIB3hs3YinvMUiwQ",
  authDomain: "portfolio-pedro-resende.firebaseapp.com",
  projectId: "portfolio-pedro-resende",
  storageBucket: "portfolio-pedro-resende.appspot.com",
  messagingSenderId: "61471069392",
  appId: "1:61471069392:web:24a81f2179d493926b3ad5",
  measurementId: "G-28GPFNPD8F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
