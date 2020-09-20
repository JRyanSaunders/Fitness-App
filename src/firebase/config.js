import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyC3YjMe5TqX_uKoH84Vdnw52o4M5TCB_58",
  authDomain: "fitnessapp-39c31.firebaseapp.com",
  databaseURL: "https://fitnessapp-39c31.firebaseio.com",
  projectId: "fitnessapp-39c31",
  storageBucket: "fitnessapp-39c31.appspot.com",
  messagingSenderId: "951169105613",
  appId: "1:951169105613:web:3aef6ab5619d3bb1633384",
  measurementId: "G-3D5GLXRQP7",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };

// Generally, the purpose of using firebase or something similar, is because you’ll be having data that is shared between users, ie something like Twitter where you follow what other people post. If you’re not planning on sharing any data, there’s no upside to using firebase, in fact it would be detrimental to your app. You’re much better storing everything locally
// Something you’ll learn with experience, is to have a REASON to do something. Not just because it’s a shiny new thing, or you see a tutorial or something
