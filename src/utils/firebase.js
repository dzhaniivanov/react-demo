import firebase from 'firebase';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDTeSWtpFPiBleOigSiXqj7_V0Yuh4yPJw",
    authDomain: "react-my-pets-project.firebaseapp.com",
    projectId: "react-my-pets-project",
    storageBucket: "react-my-pets-project.appspot.com",
    messagingSenderId: "129943034736",
    appId: "1:129943034736:web:ff2337b6513d1a8c2a0db5"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}



export default firebase;
export const auth = firebase.auth();