import  {initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from'firebase/firestore';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAGR6o-EIlSosm5xtmeTndAq2aoW-ya9PI",
    authDomain: "crwn-db-ba8cc.firebaseapp.com",
    projectId: "crwn-db-ba8cc",
    storageBucket: "crwn-db-ba8cc.appspot.com",
    messagingSenderId: "134749504203",
    appId: "1:134749504203:web:cb258e53dad6c65276d14e",
    measurementId: "G-7N2WN6NH2L"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
auth.languageCode = 'en';
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider)
.then((result) => {
  // This gives you a Google Access Token. You can use it to access the Google API.
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
  // The signed-in user info.
  const user = result.user;
  // ...
}).catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
  // The email of the user's account used.
  const email = error.email;
  // The AuthCredential type that was used.
  const credential = GoogleAuthProvider.credentialFromError(error);
  // ...
});

