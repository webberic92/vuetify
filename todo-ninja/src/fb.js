
import firebase from 'firebase/app'
import 'firebase/firestore'

  var firebaseConfig = {
    apiKey: "AIzaSyCCVwFh6Rosg4yYpIJ1If6uyCotzD9_ZC4",
    authDomain: "todo-ninja-d0302.firebaseapp.com",
    projectId: "todo-ninja-d0302",
    storageBucket: "todo-ninja-d0302.appspot.com",
    messagingSenderId: "804923733368",
    appId: "1:804923733368:web:881d16cafdc9ed009c048d",
    measurementId: "G-T9EK6LC7ZF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({
	timestampsInSnapshots: true
}); 
export default db;
