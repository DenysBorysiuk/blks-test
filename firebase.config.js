// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC5HuBhhjTuM42rbRCedGb3DlHJtERt54I',
  authDomain: 'blks-test.firebaseapp.com',
  projectId: 'blks-test',
  storageBucket: 'blks-test.appspot.com',
  messagingSenderId: '731269480317',
  appId: '1:731269480317:web:f4f86fafe24d49ac081614',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
