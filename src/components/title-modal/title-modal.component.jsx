/** @format */
import React, { useEffect, useState } from "react";
import {
	faPlay,
	faPlus,
	faThumbsDown,
	faThumbsUp,
	faTimes,
} from "@fortawesome/free-solid-svg-icons";
import reactDom from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	ContentFader,
	TitleModalCloseButton,
	TitleModalContainer,
	TitleModalContentCard,
	TitleModalContentContainer,
	TitleModalImageCard,
	TitleModalInfoContainer,
} from "./title-modal.styles";
import {
	BannerPlayButton,
	CircleButton,
	CircleButtonIcon,
} from "../buttons.styles";
import TitleMetaData from "../title-meta-data/title-meta-data.component";
import { functionsURL } from "../../firebase";

const TitleModal = ({
	$title,
	info,
	domNode,
	itemRef,
	modalVisible,
	setModalVisible,
	transitionRef,
}) => {
	const [cast, setCast] = useState([]);
	useEffect(() => {
		// Prevent scrolling while modal is open
		const page = document.querySelector("html");
		if (modalVisible) {
			page.classList.add("noscroll");
		} else {
			page.classList.remove("noscroll");
		}
	});

	useEffect(() => {
		const getCast = async () => {
			const res = await fetch(
				`${functionsURL}/tmdb/movie/${$title.id}/credits`
			);
			const castInfo = await res.json();

			const castArr = castInfo.cast.slice(0, 5);

			setCast(castArr);
		};

		getCast();
	}, [$title, info]);

	return reactDom.createPortal(
		<TitleModalContainer
			top={itemRef && itemRef.getBoundingClientRect().top}
			left={itemRef && itemRef.getBoundingClientRect().left}
			width={itemRef && itemRef.offsetWidth}
			height={itemRef && itemRef.offsetHeight}
			ref={transitionRef}
		>
			<TitleModalContentContainer>
				<TitleModalImageCard
					background={`https://image.tmdb.org/t/p/original${$title.poster_path}`}
				>
					{modalVisible && (
						<ContentFader>
							<TitleModalCloseButton
								onClick={() =>
									setModalVisible(false)
								}
							>
								<FontAwesomeIcon
									icon={faTimes}
									style={{
										color: "white",
										fontSize: "1.5rem",
									}}
								/>
							</TitleModalCloseButton>

							<div className="title-card-button-container">
								<BannerPlayButton className="large">
									<FontAwesomeIcon
										icon={faPlay}
									/>
									Play
								</BannerPlayButton>
								<CircleButton className="large">
									<CircleButtonIcon
										icon={faPlus}
										className="title-card-icon"
									/>
								</CircleButton>
								<CircleButton className="large">
									<CircleButtonIcon
										icon={faThumbsUp}
										className="title-card-icon"
									/>
								</CircleButton>
								<CircleButton className="large">
									<CircleButtonIcon
										icon={faThumbsDown}
										className="title-card-icon"
									/>
								</CircleButton>
							</div>
						</ContentFader>
					)}
				</TitleModalImageCard>
				{modalVisible && (
					<TitleModalContentCard>
						<ContentFader>
							<TitleModalInfoContainer>
								<TitleMetaData info={info} />
								<p
									style={{
										color: "white",
										textAlign: "left",
										fontSize: "1.1rem",
										gridColumn: "1/2",
										paddingRight:
											"10px",
									}}
								>
									{$title.overview}
								</p>
								<div
									style={{
										height: "100%",
										color: "white",
										gridRow: "1/3",
										gridColumn: "2/3",
										textAlign: "left",
									}}
								>
									<div
										style={{
											marginBottom:
												"10px",
										}}
									>
										<span
											style={{
												color: "#888888",
											}}
										>
											Genres:{" "}
										</span>
										{info.titleInfo.genres.map(
											(el) => (
												<span className="genre">{`${el.name}, `}</span>
											)
										)}
									</div>
									<div>
										<span
											style={{
												color: "#888888",
											}}
										>
											Cast:{" "}
										</span>

										{cast.map((el) => (
											<span className="genre">{`${el.name}, `}</span>
										))}
									</div>
								</div>
							</TitleModalInfoContainer>
						</ContentFader>
					</TitleModalContentCard>
				)}
			</TitleModalContentContainer>
		</TitleModalContainer>,
		domNode
	);
};

export default TitleModal;
