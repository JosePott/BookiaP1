import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBYz-1BG-8V-BJILndZ1BQSY3fWqSKnxrQ",
  authDomain: "bookiaet.firebaseapp.com",
  projectId: "bookiaet",
  storageBucket: "bookiaet.firebasestorage.app",
  messagingSenderId: "819514166880",
  appId: "1:819514166880:web:8d17de836c3d005f3cbd05",
  measurementId: "G-LBXGPSWV2H"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar Firebase Auth y Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
