import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBUuVurco8XdwixJ569t1Cuos-qcdrjXuI",
    authDomain: "crwn-db-3bd28.firebaseapp.com",
    projectId: "crwn-db-3bd28",
    storageBucket: "crwn-db-3bd28.appspot.com",
    messagingSenderId: "888294780577",
    appId: "1:888294780577:web:628f26de204c6ea1c6cae0",
    measurementId: "G-ZR9ZH4HXS8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
