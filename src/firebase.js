// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkVHI-xCkbDQbjd_Vibv84e64FS-sUQ_Q",
  authDomain: "netflix-clone-68ed1.firebaseapp.com",
  projectId: "netflix-clone-68ed1",
  storageBucket: "netflix-clone-68ed1.firebasestorage.app",
  messagingSenderId: "569277750281",
  appId: "1:569277750281:web:d9806467e893379fcf2cd8",
  measurementId: "G-G0E415E6G4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app)

const signup = async (name, email, password) => {
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db ,'user'), {
            uid: user.uid,
            name,
            authProvider: "local",
            email
        });
    } catch (e) {
        console.log(e);
        alert(e);
    }
}

const login = async (email, password) => {
    try{
        await signInWithEmailAndPassword(auth, email, password);
    } catch(e) {
        console.log(e);
        alert(e);
    }
}

const logout = () => {
    signOut(auth);
}

export {auth, db, login, signup, logout};