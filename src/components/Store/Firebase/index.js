import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyAQ8RIIj8smK45bkVwpii8XDS_eLIIkIDg",
    authDomain: "teesa-527c4.firebaseapp.com",
    databaseURL: "https://teesa-527c4.firebaseio.com",
    projectId: "teesa-527c4",
    storageBucket: "teesa-527c4.appspot.com",
    messagingSenderId: "965987805036",
    appId: "1:965987805036:web:8e5bfc13f930183ae2f549"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase