import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyD9Su40uKPLzX-sWMDzaxyw7FUwIr_JQ4E",
    authDomain: "whatsapp-clone-3a598.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-3a598.firebaseio.com",
    projectId: "whatsapp-clone-3a598",
    storageBucket: "whatsapp-clone-3a598.appspot.com",
    messagingSenderId: "562885733461",
    appId: "1:562885733461:web:460320d54659e8846af8dc",
    measurementId: "G-L4L99JHN7M"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;