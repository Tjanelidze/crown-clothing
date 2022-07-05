import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDGqj019LHVZAV-Pa_2LL7p4XPvDN998Xk',
  authDomain: 'crown-clothing-db-518c8.firebaseapp.com',
  projectId: 'crown-clothing-db-518c8',
  storageBucket: 'crown-clothing-db-518c8.appspot.com',
  messagingSenderId: '29814479399',
  appId: '1:29814479399:web:7d3c62ba656aa19529cc02',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const singInWithGooglePopUp = () => signInWithPopup(auth, provider);
