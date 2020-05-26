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
export const signInWithGoogle = async () => {
  try {
    await auth.signInWithPopup(provider);
  } catch (error) {
    console.log(error.message);
  }
};

// Creating user object in firestore for new user
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error('error create user in firestore', error.message);
    }
  }

  return userRef;
};

// firebase
export default firebase;
