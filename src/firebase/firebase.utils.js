import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAoEr0ub3V1ROMyz8JBSJbDK8-z4SAIlbE',
  authDomain: 'crown-db-593df.firebaseapp.com',
  databaseURL: 'https://crown-db-593df.firebaseio.com',
  projectId: 'crown-db-593df',
  storageBucket: 'crown-db-593df.appspot.com',
  messagingSenderId: '496709926551',
  appId: '1:496709926551:web:7a147a1353556edee3b3d2',
  measurementId: 'G-PN1BJWWHGC',
};

firebase.initializeApp(firebaseConfig);

// initializing auth and firestore
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google sign in setup
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

// firebase
export default firebase;
