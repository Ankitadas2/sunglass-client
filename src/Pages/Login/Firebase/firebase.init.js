import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeFirebase=()=>{
    initializeApp(firebaseConfig)
    console.log(firebaseConfig)
}
export default initializeFirebase