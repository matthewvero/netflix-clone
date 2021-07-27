/** @format */

import { auth, db } from "./firebase";

export const signupUser = async (email, password) => {
	try {
		const data = await auth.createUserWithEmailAndPassword(
			email,
			password
		);

		await db.collection("users").doc(data.user.uid).set({
			uid: data.user.uid,
			email: data.user.email,
			signUpState: 1,
		});
	} catch (err) {
		console.error(err);
	}
};
