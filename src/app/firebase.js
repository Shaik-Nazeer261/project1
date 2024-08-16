import firebase from "firebase/compat/app";
import "firebase/compat/database";
const firebaseConfig = {
  apiKey: "AIzaSyCenykAOBZ0NPGKOU-wpGYnRwUUdFZR3_E",
  authDomain: "project1-5b2ec.firebaseapp.com",
  databaseURL: "https://project1-5b2ec-default-rtdb.firebaseio.com",
  projectId: "project1-5b2ec",
  storageBucket: "project1-5b2ec.appspot.com",
  messagingSenderId: "287184530471",
  appId: "1:287184530471:web:d768ecf9fb3b856f517202",
  measurementId: "G-YVVC0P19N7"
};
var firebaseDB = firebase.initializeApp(firebaseConfig);
 export default firebaseDB.database().ref();