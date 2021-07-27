/** @format */

import { useEffect, useState } from "react";
import { auth, db } from "../firebase";

export const useAuthListener = () => {
	const [user, setUser] = useState();

	useEffect(() => {
		auth.onAuthStateChanged(async (data) => {
			if (data) {
				try {
					const userProfile = await db
						.collection("users")
						.doc(data.uid)
						.get();
					userProfile.exists
						? setUser(userProfile.data())
						: console.error(
								"userProfile does not exist"
						  );
				} catch (err) {
					console.error(err);
				}
			} else {
				setUser();
			}
		});
	}, []);
	return user;
};
