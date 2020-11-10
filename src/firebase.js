import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyACDNRb3Sd3Z4ddtjfNy21gUwNy7Nd-UZU',
  authDomain: 'tiktok-clone-ba0f5.firebaseapp.com',
  databaseURL: 'https://tiktok-clone-ba0f5.firebaseio.com',
  projectId: 'tiktok-clone-ba0f5',
  storageBucket: 'tiktok-clone-ba0f5.appspot.com',
  messagingSenderId: '710991033970',
  appId: '1:710991033970:web:1b06340ad4ff10930f74eb',
  measurementId: 'G-WFRLZVZP6Z',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
