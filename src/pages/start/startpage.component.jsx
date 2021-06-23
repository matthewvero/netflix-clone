/** @format */

import React, { useState } from "react";
import { Page } from "../page.styles";
import {
	AnimationCard,
	AnimationCardHeading,
	AnimationCardTextContainer,
	AnimationImage,
	AnimationContainer,
	LayerAnimationImage,
	OurStoryContainer,
	SignInButton,
	StartPageButton,
	StartPageCard,
	StartPageEmailInput,
	StartPageHeader,
	StartPageInputContainer,
	Animation,
	AnimationCardSubHeading,
	DownLoadCard,
} from "./startpage.styles";
import { ReactComponent as ReactLogo } from "../../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
	FormInputContainer,
	InputLabel,
} from "../../components/misc/inputs.styles";
import background from "../../images/home-bg.jpeg";
import tv from "../../images/tv.png";
import EnjoyAnimation from "../../videos/video-tv-0819.m4v";
import mobile from "../../images/mobile-0819.jpeg";
import boxshot from "../../images/boxshot.png";
import downloadGif from "../../images/download-icon.gif";
import devicePile from "../../images/device-pile.png";
import videoDevices from "../../videos/video-devices.m4v";
import {
	EmailFormTitle,
	Heading,
	SubHeading,
} from "../../components/misc/text.styles";
import AccordionSegment from "../../components/accordion-segment/accordion-segment.component";
import AccordionContainer from "../../components/accordion-container/accordion-container.component";
import { withRouter } from "react-router";
const StartPage = ({ history }) => {
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
						onSubmit={(e) => {
							e.preventDefault();
							history.push({
								pathname: "/signup",
								state: {
									email,
								},
							});
						}}
					>
						<EmailFormTitle>
							Ready to watch? Enter your email to
							create or restart your membership.
						</EmailFormTitle>

						<FormInputContainer>
							<StartPageInputContainer
								style={{ position: "relative" }}
							>
								<StartPageEmailInput
									value={email}
									required
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
						</FormInputContainer>
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
						height: "auto",
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
					<AnimationContainer className="layered">
						<LayerAnimationImage src={tv} />
						<Animation
							src={EnjoyAnimation}
							autoPlay
							muted
							loop
						/>
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
						<AnimationCardHeading className="right">
							Download your programmes to watch
							offline.
						</AnimationCardHeading>
						<AnimationCardSubHeading className="right">
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
									maxHeight: "95%",
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
							Watch everywhere.
						</AnimationCardHeading>
						<AnimationCardSubHeading className="left">
							Stream unlimited films and TV
							programmes on your phone, tablet,
							laptop and TV without paying more.
						</AnimationCardSubHeading>
					</AnimationCardTextContainer>
					<AnimationContainer className="devices">
						<LayerAnimationImage
							src={devicePile}
							style={{
								transform:
									"scale(1.20) translate(-40%, -1%)",
							}}
						/>
						<Animation
							src={videoDevices}
							autoPlay
							muted
							loop
						/>
					</AnimationContainer>
				</div>
			</AnimationCard>
			<StartPageCard style={{ height: "auto" }}>
				<Heading>Frequently asked Questions</Heading>
				<AccordionContainer>
					<AccordionSegment title="What is Netflix?">
						<p
							style={{
								margin: "0 0 5% 0",
								color: "white",
								textAlign: "left",
								fontSize: "20px",
							}}
						>
							Netflix is a streaming service that
							offers a wide variety of award-winning
							TV programmes, films, anime,
							documentaries and more – on thousands
							of internet-connected devices.
						</p>
						<p
							style={{
								margin: "0",
								color: "white",
								textAlign: "left",
								fontSize: "20px",
							}}
						>
							You can watch as much as you want,
							whenever you want, without a single
							advert – all for one low monthly
							price. There's always something new to
							discover, and new TV programmes and
							films are added every week!
						</p>
					</AccordionSegment>
					<AccordionSegment title="How much does Netflix cost?">
						<p
							style={{
								margin: "0",
								color: "white",
								textAlign: "left",
								fontSize: "20px",
							}}
						>
							Watch Netflix on your smartphone,
							tablet, smart TV, laptop or streaming
							device, all for one fixed monthly fee.
							Plans range from £5.99 to £13.99 a
							month. No extra costs, no contracts.
						</p>
					</AccordionSegment>
					<AccordionSegment title="Where can I watch?">
						<p
							style={{
								margin: "0",
								color: "white",
								textAlign: "left",
								fontSize: "20px",
								marginBottom: "30px",
							}}
						>
							Watch anywhere, anytime, on an
							unlimited number of devices. Sign in
							with your Netflix account to watch
							instantly on the web at netflix.com
							from your personal computer or on any
							internet-connected device that offers
							the Netflix app, including smart TVs,
							smartphones, tablets, streaming media
							players and game consoles.
						</p>
						<p
							style={{
								margin: "0",
								color: "white",
								textAlign: "left",
								fontSize: "20px",
							}}
						>
							You can also download your favourite
							programmes with the iOS, Android, or
							Windows 10 app. Use downloads to watch
							while you're on the go and without an
							internet connection. Take Netflix with
							you anywhere.
						</p>
					</AccordionSegment>
					<AccordionSegment title="How do I cancel?">
						<p
							style={{
								margin: "0",
								color: "white",
								textAlign: "left",
								fontSize: "20px",
							}}
						>
							Netflix is flexible. There are no
							annoying contracts and no commitments.
							You can easily cancel your account
							online in two clicks. There are no
							cancellation fees – start or stop your
							account at any time.
						</p>
					</AccordionSegment>
					<AccordionSegment title="What can I watch on Netflix?">
						<p
							style={{
								margin: "0",
								color: "white",
								textAlign: "left",
								fontSize: "20px",
							}}
						>
							Netflix has an extensive library of
							feature films, documentaries, TV
							programmes, anime, award-winning
							Netflix originals, and more. Watch as
							much as you want, any time you want.
						</p>
					</AccordionSegment>
				</AccordionContainer>
				<form
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<EmailFormTitle>
						Ready to watch? Enter your email to create
						or restart your membership.
					</EmailFormTitle>

					<FormInputContainer>
						<StartPageInputContainer
							style={{ position: "relative" }}
						>
							<StartPageEmailInput
								value={email}
								onChange={(e) =>
									setEmail(e.target.value)
								}
							/>
							<InputLabel>Email address</InputLabel>
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
					</FormInputContainer>
				</form>
			</StartPageCard>
		</Page>
	);
};

export default withRouter(StartPage);
