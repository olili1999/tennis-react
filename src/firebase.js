import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"

var firebaseConfig = {
  apiKey: "AIzaSyAQaDVJxDNoV2GgI0zsHHFVABbGwr6h29c",
  authDomain: "auth-development-ae955.firebaseapp.com",
  databaseURL: "https://auth-development-ae955-default-rtdb.firebaseio.com",
  projectId: "auth-development-ae955",
  storageBucket: "auth-development-ae955.appspot.com",
  messagingSenderId: "1028487418959",
  appId: "1:1028487418959:web:a8e2045faa06349236863a"
};
const app = firebase.initializeApp(
 firebaseConfig
)

export const db = firebase.database();
export const auth = app.auth()
export default app; 