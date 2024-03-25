import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrfpkI7H7tpKA3VMP-egTdk5yaNKXUBwI",
  authDomain: "crwn-clothing-db-ba583.firebaseapp.com",
  projectId: "crwn-clothing-db-ba583",
  storageBucket: "crwn-clothing-db-ba583.appspot.com",
  messagingSenderId: "213659510318",
  appId: "1:213659510318:web:0b25f71c1873d9518121bf",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
          await setDoc(userDocRef, {
              displayName,
              email,
              createdAt,
              ...additionalInformation
          });
      } catch (error) {
          console.error("Error creating the user", error.message); // Corrected typo here
      }
  }
  return userDocRef;
};


export const createAuthUserWithEmailAndPassword = async (email, password)=>{
  if(!email || !password) return;
return await createUserWithEmailAndPassword(auth, email, password);
}