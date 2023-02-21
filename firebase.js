import * as firebase from "firebase";
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD-qSxDri-SJvztsWL2Aq4a1MNgliNsG30",
  authDomain: "signal-52248.firebaseapp.com",
  projectId: "signal-52248",
  storageBucket: "signal-52248.appspot.com",
  messagingSenderId: "662515208935",
  appId: "1:662515208935:web:aa5ab434dec9ddc64b4842"
};

let app;

if(firebase.apps.lenght === 0){
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export {db,auth};