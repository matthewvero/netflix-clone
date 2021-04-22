/** @format */

import React, { useState } from "react";
import { Page } from "../page.styles";
import {
	AnimationCard,
	AnimationCardHeading,
	AnimationCardTextContainer,
	AnimationImage,
	AnimationContainer,
	Button,
	OurStoryContainer,
	SignInButton,
	StartPageButton,
	StartPageCard,
	StartPageEmailInput,
	StartPageFormInputContainer,
	StartPageHeader,
	StartPageInputContainer,
	Animation,
	AnimationCardSubHeading,
	DownLoadCard,
} from "./startpage.styles";
import { ReactComponent as ReactLogo } from "../../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { InputBox, InputLabel } from "../../components/misc/inputs.styles";
import background from "../../images/home-bg.jpeg";
import tv from "../../images/tv.png";
import EnjoyAnimation from "../../videos/video-tv-0819.m4v";
import mobile from "../../images/mobile-0819.jpeg";
import boxshot from "../../images/boxshot.png";
import downloadGif from "../../images/download-icon.gif";
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
			<AnimationCard>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexWrap: "wrap",
						alignContent: "center",
						maxWidth: "1100px",
					}}
				>
					<AnimationCardTextContainer>
						<AnimationCardHeading className="left">
							Enjoy on your TV.
						</AnimationCardHeading>
						<AnimationCardSubHeading className="left">
							Watch on smart TVs, PlayStation, Xbox,
							Chromecast, Apple TV, Blu-ray players
							and more.
						</AnimationCardSubHeading>
					</AnimationCardTextContainer>
					<AnimationContainer>
						<Animation
							src={EnjoyAnimation}
							autoPlay
							muted
							loop
						/>
						<AnimationImage src={tv}></AnimationImage>
					</AnimationContainer>
				</div>
			</AnimationCard>
			<AnimationCard>
				<div
					style={{
						display: "flex",
						flexDirection: "row-reverse",
						alignItems: "center",
						justifyContent: "center",
						flexWrap: "wrap",
						alignContent: "center",
						maxWidth: "1100px",
					}}
				>
					<AnimationCardTextContainer>
						<AnimationCardHeading className="left">
							Download your programmes to watch
							offline.
						</AnimationCardHeading>
						<AnimationCardSubHeading className="left">
							Save your favourites easily and always
							have something to watch.
						</AnimationCardSubHeading>
					</AnimationCardTextContainer>
					<AnimationContainer>
						<DownLoadCard>
							<img
								src={boxshot}
								alt="series cover"
								style={{
									maxHeight: "100%",
								}}
							/>
							<div
								style={{
									flexGrow: "100",
									paddingLeft: "10px",
									display: "flex",
									flexDirection: "column",
									alignItems: "start",
									justifyContent: "center",
								}}
							>
								<p
									style={{
										color: "white",
										fontWeight: "600",
										margin: "0",
										width: "100%",
										textAlign: "left",
									}}
								>
									Stranger Things
								</p>
								<p
									style={{
										color: "#0071eb",
										margin: "0",
										fontSize: "0.8rem",
										width: "100%",
										textAlign: "left",
									}}
								>
									Downloading...
								</p>
							</div>
							<img
								src={downloadGif}
								style={{
									maxHeight: "65%",
								}}
								alt="download animation"
							/>
						</DownLoadCard>
						<AnimationImage
							src={mobile}
						></AnimationImage>
					</AnimationContainer>
				</div>
			</AnimationCard>
		</Page>
	);
};

export default StartPage;
