import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth'; 

const firebaseApp = firebase.initializeApp({
  //firebase config here
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }
