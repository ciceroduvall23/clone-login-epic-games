import firebase  from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyB8sLCLQIoiGotQLS_sSO_Zekq_rIyulBU",
    authDomain: "curso-react-91385.firebaseapp.com",
    projectId: "curso-react-91385",
    storageBucket: "curso-react-91385.appspot.com",
    messagingSenderId: "934713848925",
    appId: "1:934713848925:web:58aadd301ea8f209b749b4",
    measurementId: "G-KL9K0YEXWM"
  };
 
  if(!firebase.apps.length){
   firebase.initializeApp(firebaseConfig);

  }
  export default firebase;
  