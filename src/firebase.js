import  firebase from "firebase";

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBXbTnSan7qHtVOpeGLGmM5V14jeS8wkoE",
    authDomain: "crudproject-c33ed.firebaseapp.com",
    databaseURL: "https://crudproject-c33ed.firebaseio.com",
    projectId: "crudproject-c33ed",
    storageBucket: "crudproject-c33ed.appspot.com",
    messagingSenderId: "498305123244",
    appId: "1:498305123244:web:7a61c288898a5669313009"
  };

  var fireDb = firebase.initializeApp(firebaseConfig);

  
  export default fireDb.database().ref();