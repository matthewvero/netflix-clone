/** @format */

import React from "react";
import { HeaderContainer } from "./header.styles";
import { ReactComponent as ReactLogo } from "../../logo.svg";
const Header = () => {
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
			<h3>Sign In</h3>
		</HeaderContainer>
	);
};

export default Header;
