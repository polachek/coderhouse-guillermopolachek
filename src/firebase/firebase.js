import firebase from "firebase/app";
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyD7UIRIsA-fvUBic6SEwLsH-oVFnUTAWcQ",
    authDomain: "coderhouse-guillermopolachek.firebaseapp.com",
    projectId: "coderhouse-guillermopolachek",
    storageBucket: "coderhouse-guillermopolachek.appspot.com",
    messagingSenderId: "530026710467",
    appId: "1:530026710467:web:0490b4fcf2baa9aa2d6976"
})

export function getFirebase(){
    return app
}

export function getFirestore(){
    return firebase.firestore(app)
}
