import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANbDkSNPwrLPinARiHhN_-ul4X4_LPn1w",
  authDomain: "ecommerce-coderhouse-1b7dd.firebaseapp.com",
  projectId: "ecommerce-coderhouse-1b7dd",
  storageBucket: "ecommerce-coderhouse-1b7dd.appspot.com",
  messagingSenderId: "422247163119",
  appId: "1:422247163119:web:e5d92a84d05ab868f5e71a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>

)
