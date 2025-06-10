// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCNGG16TCriAUQVA2qamkYKOpY6kqQxiFE",
  authDomain: "pem-udms.firebaseapp.com",
  projectId: "pem-udms",
  storageBucket: "pem-udms.firebasestorage.app",
  messagingSenderId: "781499789587",
  appId: "1:781499789587:web:155d2c107e00f559b2aae6",
  measurementId: "G-ZQDYSQ6PZG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);