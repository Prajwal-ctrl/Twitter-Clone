// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase" ;

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyDq1ZDF4Vc6oXF-BKDlzcsXd97ObW80l3c",
    authDomain: "twitter-clone-dbee7.firebaseapp.com",
    projectId: "twitter-clone-dbee7",
    storageBucket: "twitter-clone-dbee7.appspot.com",
    messagingSenderId: "667640532241",
    appId: "1:667640532241:web:0e5a7882913f747424d0b0",
    measurementId: "G-89MEWRYKD0"
  });


const db = firebaseApp.firestore();

export default db;
// connecting firebase with database (backend )
  // exporting it and import in those files which ever we want 