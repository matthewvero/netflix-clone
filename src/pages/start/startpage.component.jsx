/** @format */

import React, { useState } from "react";
import { Page } from "../page.styles";
import {
	Button,
	OurStoryContainer,
	SignInButton,
	StartPageButton,
	StartPageCard,
	StartPageEmailInput,
	StartPageFormInputContainer,
	StartPageHeader,
	StartPageInputContainer,
} from "./startpage.styles";
import { ReactComponent as ReactLogo } from "../../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { InputBox, InputLabel } from "../../components/misc/inputs.styles";
import background from "../../images/home-bg.jpeg";
import {
	EmailFormTitle,
	Heading,
	SubHeading,
} from "../../components/misc/text.styles";
const StartPage = () => {
	const [email, setEmail] = useState();

	return (
		<Page>
			<StartPageCard
				style={{ backgroundImage: `url(${background})` }}
			>
				<StartPageHeader>
					<ReactLogo
						style={{
							maxHeight: "50%",
							maxWidth: "12.5%",
							minHeight: "43px",
							minWidth: "120px",
							paddingTop: "8px",
						}}
					/>
					<SignInButton>Sign In</SignInButton>
				</StartPageHeader>
				<OurStoryContainer>
					<Heading>
						Unlimited films, TV programmes and more.
					</Heading>
					<SubHeading>
						Watch anywhere. Cancel any time.
					</SubHeading>
					<form
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<EmailFormTitle>
							Ready to watch? Enter your email to
							create or restart your membership.
						</EmailFormTitle>

						<StartPageFormInputContainer>
							<StartPageInputContainer
								style={{ position: "relative" }}
							>
								<StartPageEmailInput
									value={email}
									onChange={(e) =>
										setEmail(
											e.target.value
										)
									}
								/>
								<InputLabel>
									Email address
								</InputLabel>
							</StartPageInputContainer>

							<StartPageButton>
								Get Started{" "}
								<FontAwesomeIcon
									style={{
										marginLeft: "3px",
									}}
									icon={faChevronRight}
								/>
							</StartPageButton>
						</StartPageFormInputContainer>
					</form>
				</OurStoryContainer>
			</StartPageCard>
		</Page>
	);
};

export default StartPage;
