/** @format */

import firebase from "firebase/app";
// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
	apiKey: "AIzaSyCpPeJuwc3EeD5UCeUiWSd8a6I9rADAgdY",
	authDomain: "netflix-clone-978d0.firebaseapp.com",
	projectId: "netflix-clone-978d0",
	storageBucket: "netflix-clone-978d0.appspot.com",
	messagingSenderId: "663538190033",
	appId: "1:663538190033:web:eebd5f79083e61475027f0",
	measurementId: "G-Z9GEBHYC1J",
};

// Initialize Firebase
export const Firebase = firebase.initializeApp(firebaseConfig);

export const auth = Firebase.auth();

export const db = Firebase.firestore();
