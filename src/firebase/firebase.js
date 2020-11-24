import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyB6LQVix9y9TLcnqShW8pGseBwvJUt4MCs',
  authDomain: 'tap-be.firebaseapp.com',
  databaseURL: 'https://tap-be.firebaseio.com',
  projectId: 'tap-be',
  storageBucket: 'tap-be.appspot.com',
  messagingSenderId: '540006169745',
  appId: '1:540006169745:web:43192ec387386589685330',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
