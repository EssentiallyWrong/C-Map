//---------------------------------------------------------------------
// API Firebase configuration for C-Map.
// Specifies which firebase project our application is connected to.
//---------------------------------------------------------------------

var firebaseConfig = {
  apiKey: "AIzaSyA5ETf8nKhNO52Sa-Iud5FGgxRWu7TnPfI",
  authDomain: "comp-1800-webapp-project.firebaseapp.com",
  databaseURL: "https://comp-1800-webapp-project.firebaseio.com",
  projectId: "comp-1800-webapp-project",
  storageBucket: "comp-1800-webapp-project.appspot.com",
  messagingSenderId: "264108172841",
  appId: "1:264108172841:web:615fc8752c259bbf825e38"
};

// Initializes Firebase
firebase.initializeApp(firebaseConfig);
// Creates the Firestore database object
// Any reference to the database can be made with "db"
const db = firebase.firestore();