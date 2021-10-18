/** @format */

import React from "react";
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
	StartPageHeader,
	StartPageInputContainer,
	Animation,
	AnimationCardSubHeading,
	DownLoadCard,
	StartPageEmailInput,
	AnimationCardContentContainer,
} from "./startpage.styles";
import { ReactComponent as ReactLogo } from "../../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronRight,
	faPlus,
	faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
	FormInputContainer,
	InputContainer,
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
	Text,
} from "../../components/misc/text.styles";
import { withRouter } from "react-router";
import {
	useFormValidator,
	withValidation,
} from "../../hooks/form-validator/form-validator";

import {
	AccordionSegment,
	AccordionSummary,
} from "../../components/accordion/accordion.styles";
import Accordion from "../../components/accordion/accordion.component";
import FormErrors from "../../components/form-errors/form-errors.component";
const ValidatedEmail = withValidation(StartPageEmailInput, "email", "email", {
	required: true,
});

const StartPage = ({ history }) => {
	const formApi = useFormValidator();

	const { state } = formApi;

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
					<SignInButton onClick={() => history.push('/signin')}>Sign In</SignInButton>
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
							maxWidth: '100%'
						}}
						onSubmit={(e) => {
							e.preventDefault();
							history.push({
								pathname: "/signup/form",
								state: {
									email: state.values[
										"email"
									],
								},
							});
						}}
					>
						<EmailFormTitle>
							Ready to watch? Enter your email to
							create or restart your membership.
						</EmailFormTitle>

						<FormInputContainer>
							<StartPageInputContainer>
								<InputContainer
									style={{
										position: "relative",
									}}
								>
									<ValidatedEmail
										api={formApi}
									/>
									<InputLabel>
										Email address
									</InputLabel>
								</InputContainer>
								
								<FormErrors state={state} inputName={'email'}/>
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
				<AnimationCardContentContainer>
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
				</AnimationCardContentContainer>
			</AnimationCard>
			<AnimationCard>
				<AnimationCardContentContainer reverse>
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
				</AnimationCardContentContainer>
			</AnimationCard>
			<AnimationCard>
				<AnimationCardContentContainer>
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
				</AnimationCardContentContainer>
			</AnimationCard>
			<StartPageCard style={{ height: "auto", paddingBottom: '100px' }}>
				<Heading>Frequently asked Questions</Heading>
				<Accordion>
					<AccordionSegment className="segment">
						<AccordionSummary>
							<SubHeading>
								What is Netflix?
							</SubHeading>
							<FontAwesomeIcon
								icon={faPlus}
								className="opened"
							/>
							<FontAwesomeIcon
								icon={faTimes}
								className="closed"
							/>
						</AccordionSummary>
						<Text>
							Netflix is a streaming service that
							offers a wide variety of award-winning
							TV programmes, films, anime,
							documentaries and more – on thousands
							of internet-connected devices.
						</Text>
						<Text>
							You can watch as much as you want,
							whenever you want, without a single
							advert – all for one low monthly
							price. There's always something new to
							discover, and new TV programmes and
							films are added every week!
						</Text>
					</AccordionSegment>
					<AccordionSegment className="segment">
						<AccordionSummary>
							<SubHeading>
								How much does Netflix cost??
							</SubHeading>
							<FontAwesomeIcon
								icon={faPlus}
								className="opened"
							/>
							<FontAwesomeIcon
								icon={faTimes}
								className="closed"
							/>
						</AccordionSummary>
						<Text>
							Watch Netflix on your smartphone,
							tablet, smart TV, laptop or streaming
							device, all for one fixed monthly fee.
							Plans range from £5.99 to £13.99 a
							month. No extra costs, no contracts.
						</Text>
					</AccordionSegment>
					<AccordionSegment className="segment">
						<AccordionSummary>
							<SubHeading>
								Where can I watch?
							</SubHeading>
							<FontAwesomeIcon
								icon={faPlus}
								className="opened"
							/>
							<FontAwesomeIcon
								icon={faTimes}
								className="closed"
							/>
						</AccordionSummary>
						<Text>
							Watch anywhere, anytime, on an
							unlimited number of devices. Sign in
							with your Netflix account to watch
							instantly on the web at netflix.com
							from your personal computer or on any
							internet-connected device that offers
							the Netflix app, including smart TVs,
							smartphones, tablets, streaming media
							players and game consoles.
						</Text>
						<Text>
							You can also download your favourite
							programmes with the iOS, Android, or
							Windows 10 app. Use downloads to watch
							while you're on the go and without an
							internet connection. Take Netflix with
							you anywhere.
						</Text>
					</AccordionSegment>
					<AccordionSegment className="segment">
						<AccordionSummary>
							<SubHeading>
								How do I cancel?
							</SubHeading>
							<FontAwesomeIcon
								icon={faPlus}
								className="opened"
							/>
							<FontAwesomeIcon
								icon={faTimes}
								className="closed"
							/>
						</AccordionSummary>
						<Text>
							Netflix is flexible. There are no
							annoying contracts and no commitments.
							You can easily cancel your account
							online in two clicks. There are no
							cancellation fees – start or stop your
							account at any time.
						</Text>
					</AccordionSegment>
					<AccordionSegment className="segment">
						<AccordionSummary>
							<SubHeading>
								What can I watch on Netflix?
							</SubHeading>
							<FontAwesomeIcon
								icon={faPlus}
								className="opened"
							/>
							<FontAwesomeIcon
								icon={faTimes}
								className="closed"
							/>
						</AccordionSummary>
						<Text>
							Netflix has an extensive library of
							feature films, documentaries, TV
							programmes, anime, award-winning
							Netflix originals, and more. Watch as
							much as you want, any time you want.
						</Text>
					</AccordionSegment>
				</Accordion>
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
								email: state.errors["email"],
							},
						});
					}}
				>
					<EmailFormTitle>
						Ready to watch? Enter your email to create
						or restart your membership.
					</EmailFormTitle>

					<FormInputContainer>
						<StartPageInputContainer>
							<InputContainer
								style={{
									position: "relative",
								}}
							>
								<ValidatedEmail api={formApi} />
								<InputLabel>
									Email address
								</InputLabel>
							</InputContainer>
							<FormErrors state={state} inputName='email'/>
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
