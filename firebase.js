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

const firebaseApp = firebase.initializeApp(firebaseConfig)