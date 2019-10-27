import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const fbConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
}

export const authConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/trip',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ]
}

if (!firebase.apps.length) {
  firebase.initializeApp(fbConfig)
  firebase
    .firestore()
    .settings({
      cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
    })
    .enablePersistence()
}

export const auth = firebase.auth()
export const store = firebase.firestore()
