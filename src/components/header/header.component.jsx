/** @format */

import React, { useContext } from "react";
import { HeaderContainer } from "./header.styles";
import { ReactComponent as ReactLogo } from "../../logo.svg";
import { UserContext } from "../user.context";
const Header = () => {
	const user = useContext(UserContext);
	return (
		<HeaderContainer>
			{" "}
			<ReactLogo
				style={{
					maxHeight: "80%",
					maxWidth: "20%",
					minHeight: "43px",
					minWidth: "120px",
					paddingTop: "8px",
				}}
			/>
			{user ? <h3>Sign Out</h3> : <h3>Sign In</h3>}
		</HeaderContainer>
	);
};

export default Header;
