import { getFirestore, addDoc, deleteDoc, updateDoc, getDoc, collection } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhzncTBBOomtTjlMCYA1KAiM80iRBZ_rk",
  authDomain: "fir-crud-145ab.firebaseapp.com",
  projectId: "fir-crud-145ab",
  storageBucket: "fir-crud-145ab.appspot.com",
  messagingSenderId: "696355666519",
  appId: "1:696355666519:web:39a1f7e401430b19d44112",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const saveTask = (titulo, descripcion) => {
  const objetoAGuardar = {
    title: titulo,
    description: descripcion,
  };
  const canasta = collection(db, "tasks");
  addDoc(canasta, objetoAGuardar);
};
