/** @format */

import { useEffect, useState } from "react";
import { auth } from "../firebase";

export const useAuthListener = () => {
	const [user, setUser] = useState();
	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				setUser(user);
			} else {
				setUser();
			}
		});
	}, []);
	return user;
};
