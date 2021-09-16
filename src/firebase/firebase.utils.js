import  {initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore, doc, setDoc,getDoc } from'firebase/firestore';

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
export const db = getFirestore();



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
  console.log( error.code,error.message,error)
});


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = doc(db, "users", `${userAuth.uid}`);
  const docSnap = await getDoc(userRef);
  if (!docSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(doc(db, 'users', `${userAuth.uid}`), {
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message)
    }
    return userRef
  }
}
