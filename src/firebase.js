/** @format */

import firebase from "firebase/app";
// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
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
export const functionsURL =
	window.location.hostname === "localhost"
		? "http://localhost:5001/netflix-clone-978d0/us-central1/widgets"
		: "https://us-central1-netflix-clone-978d0.cloudfunctions.net/widgets";

if (window.location.hostname === "localhost") {
	auth.useEmulator("http://localhost:9099");
	db.useEmulator("localhost", 8080);

	Firebase.functions().useEmulator("localhost", 5001);
}
