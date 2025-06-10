import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase.js';

const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Logged in successfully!');
    })
    .catch((error) => {
      console.error('Error logging in:', error);
    });
});