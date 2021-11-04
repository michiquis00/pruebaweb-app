import "https://cdnjs.cloudflare.com/ajax/libs/firebase/8.3.1/firebase-app.min.js";
import "https://cdnjs.cloudflare.com/ajax/libs/firebase/8.3.1/firebase-database.min.js";
import "https://cdnjs.cloudflare.com/ajax/libs/firebase/8.3.1/firebase-auth.min.js";
import "https://cdnjs.cloudflare.com/ajax/libs/firebase/8.3.1/firebase-storage.min.js";

const firebaseConfig = {
  apiKey: "AIzaSyBy8V0TEfSD11Y2GiPKa16AnrDRg3ey36A",
  authDomain: "pruebaweb-app-fe8cb.firebaseapp.com",
  projectId: "pruebaweb-app-fe8cb",
  storageBucket: "pruebaweb-app-fe8cb.appspot.com",
  messagingSenderId: "453427893389",
  appId: "1:453427893389:web:c4d651f1b3e575fd3efec4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
