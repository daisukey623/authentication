import 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyALEeG-uCX4SsTwYA51b2yka3Lb7Iv2w4Q",
  authDomain: "vuejs-http-de60c.firebaseapp.com",
  projectId: "vuejs-http-de60c",
  storageBucket: "vuejs-http-de60c.appspot.com",
  messagingSenderId: "897481049619",
  appId: "1:897481049619:web:c9e774a648e193e87c61e6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const signupUserWithEmailAndPassword = async (emai,password) => {
  try {
     
  } catch(error) [
    
  ]
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}