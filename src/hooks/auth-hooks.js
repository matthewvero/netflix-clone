/** @format */
import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { getIdToken } from "../firebase.utils";

export const useAuthListener = () => {
	const [user, setUser] = useState();

	useEffect(() => {
		let unsub;
		auth.onAuthStateChanged(async (data) => {
			if (data) {
				try {
					unsub = db
						.collection("users")
						.doc(data.uid)
						.onSnapshot(async (doc) => {
							if (doc.exists) {
								const user = doc.data();

								const idToken =
									await getIdToken();

								if (idToken) {
									setUser({
										...user,
										idToken,
									});
								} else {
									throw new Error(
										"There was a problem authorising your session."
									);
								}
							} else {
								alert("Error fetching profile");
							}
						});
				} catch (err) {
					console.error(err);
				}
			} else {
				setUser();
			}
		});
		return () => {
			unsub();
		};
	}, []);
	return user;
};
