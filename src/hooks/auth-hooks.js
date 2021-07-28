/** @format */
import { useEffect, useState } from "react";
import { auth, db } from "../firebase";

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
						.onSnapshot((doc) => {
							if (doc.exists) {
								const user = doc.data();
								setUser(user);
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
