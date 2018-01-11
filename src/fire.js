import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAH8dycGTIF7dhJAM-7HFDCVU3tvZgNQnA",
    authDomain: "web-quickstart-94254.firebaseapp.com",
    databaseURL: "https://web-quickstart-94254.firebaseio.com",
    projectId: "web-quickstart-94254",
    storageBucket: "web-quickstart-94254.appspot.com",
    messagingSenderId: "219451535116"
  };
  
  const fire = firebase.initializeApp(config);

  export default fire;