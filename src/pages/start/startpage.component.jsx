/** @format */

import React, { useState } from "react";
import { Page } from "../page.styles";
import { Button, SignInButton, StartPageHeader } from "./startpage.styles";
import { ReactComponent as ReactLogo } from "../../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import InputText from "../../components/input-text/input-text.component";
import { InputBox, InputLabel } from "../../components/misc/inputs.styles";

const StartPage = () => {
	const [email, setEmail] = useState();

	return (
		<Page>
			<StartPageHeader>
				<ReactLogo
					style={{
						height: "53px",
						width: "167px",
						paddingTop: "8px",
					}}
				/>
				<SignInButton>Sign In</SignInButton>
			</StartPageHeader>
			<div
				style={{
					width: "72%",
					height: "auto",
					display: "flex",
					padding: "70px 0",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<h1
					style={{
						fontSize: "54px",
						marginBottom: "0",
						color: "white",
					}}
				>
					Unlimited films, TV programmes and more.
				</h1>
				<h2
					style={{
						fontSize: "26px",
						margin: "16px 0",
						color: "white",
					}}
				>
					Watch anywhere. Cancel any time.
				</h2>
				<form>
					<h3
						style={{
							fontSize: "23px",
							margin: "0",
							color: "white",
						}}
					>
						Ready to watch? Enter your email to create
						or restart your membership.
					</h3>
					<div style={{ position: "relative" }}>
						<InputBox
							value={email}
							onChange={(e) =>
								setEmail(e.target.value)
							}
						/>
						<InputLabel>Email address</InputLabel>
					</div>
					<Button>
						Get Started{" "}
						<FontAwesomeIcon
							style={{ marginLeft: "3px" }}
							icon={faChevronRight}
						/>
					</Button>
				</form>
			</div>
		</Page>
	);
};

export default StartPage;
