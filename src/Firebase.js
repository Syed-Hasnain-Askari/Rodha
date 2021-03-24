import Firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyA_VwTUDCfq-l43CuN7VsYhLLahPx1vFpc",
    authDomain: "rodha-dee72.firebaseapp.com",
    projectId: "rodha-dee72",
    storageBucket: "rodha-dee72.appspot.com",
    messagingSenderId: "141460665620",
    appId: "1:141460665620:web:6a66691975f703cbf1be01",
    measurementId: "G-XXMV9N54M4"
  };
  // Initialize Firebase
  Firebase.initializeApp(firebaseConfig);
export default Firebase