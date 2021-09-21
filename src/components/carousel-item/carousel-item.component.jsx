/** @format */

import {
	faChevronDown,
	faPlay,
	faPlus,
	faThumbsDown,
	faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

import React, { useContext, useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { functionsURL } from "../../firebase";
import { GenreContext } from "../contexts";
import Modal from "../modal/modal.component";
import { ModalContainer } from "../modal/modal.styles";
import {
	CarouselItemContainer,
	CarouselItemContent,
	CarouselItemBackground,
	CarouselButton,
	CarouselButtonIcon,
	Rating,
} from "./carousel-item.styles";

const CarouselItem = ({ $title, $left, $right, $width }) => {
	const genreIDs = useContext(GenreContext);
	const [genres, setGenres] = useState([]);
	const [info, setInfo] = useState({});
	const [modalVisible, setModalVisible] = useState(false);
	const domNode = document.getElementById("App");
	// const itemRef = useRef(null);
	const [itemRef, setItemRef] = useState(null);
	useEffect(() => {
		if (genreIDs.length) {
			setGenres(
				genreIDs.filter((el) =>
					$title.genre_ids.includes(el.id)
				)
			);
		}
	}, [$title.genre_ids, $title.genres, genreIDs]);

	const getInfo = async (id) => {
		try {
			if (!info.hasOwnProperty("iso_3166_1")) {
				const res = await fetch(
					`${functionsURL}/getinfo/${id}`
				);
				const titleData = await res.json();

				const releaseInfo =
					titleData.releaseInfo.results.filter(
						(el) => el.iso_3166_1 === "GB"
					)[0];

				setInfo({
					titleInfo: titleData.titleInfo,
					releaseInfo,
				});
			}
		} catch (err) {
			console.log(err.message);
		}
	};

	const minToHourConverter = (minutes) => {
		let str = "";
		const hours = Math.floor(minutes / 60);
		const mins = minutes % 60;
		if (hours > 0) {
			str += `${hours}h`;
		}
		if (mins > 0) {
			str += ` ${mins}m`;
		}
		return str;
	};

	return (
		<CarouselItemContainer
			$left={$left}
			$right={$right}
			$width={$width}
			onMouseEnter={() => getInfo($title.id)}
			ref={(ref) => setItemRef(ref)}
		>
			<CarouselItemContent>
				<div
					style={{
						width: "100%",
						height: "30%",
						display: "flex",
						alignItems: "center",
					}}
				>
					<CarouselButton style={{ marginLeft: "0" }}>
						<CarouselButtonIcon icon={faPlay} />
					</CarouselButton>
					<CarouselButton>
						<CarouselButtonIcon icon={faPlus} />
					</CarouselButton>
					<CarouselButton>
						<CarouselButtonIcon icon={faThumbsUp} />
					</CarouselButton>
					<CarouselButton>
						<CarouselButtonIcon icon={faThumbsDown} />
					</CarouselButton>
					<CarouselButton
						style={{ marginLeft: "auto" }}
						onClick={() => setModalVisible(true)}
					>
						<CarouselButtonIcon icon={faChevronDown} />
					</CarouselButton>
				</div>
				<div
					style={{
						height: "30%",
						width: "100%",
						display: "flex",
						flexWrap: "wrap",
						alignItems: "center",
					}}
				>
					{info.releaseInfo &&
						info.releaseInfo.hasOwnProperty(
							"iso_3166_1"
						) && (
							<Rating>
								{info.releaseInfo
									.release_dates[0]
									.certification === "12A"
									? "12"
									: info.releaseInfo
											.release_dates[0]
											.certification}
							</Rating>
						)}
					{info.titleInfo && (
						<p
							style={{
								display: "inline-block",
								color: "white",
								fontSize: "0.7rem",
								margin: "0 10px",
								transform: "translateY(1px)",
							}}
						>
							{minToHourConverter(
								info.titleInfo.runtime
							)}
						</p>
					)}
				</div>
				<div
					style={{
						height: "30%",
						width: "100%",
						display: "flex",
						flexWrap: "wrap",
					}}
				>
					{genres.map((el, idx) => (
						<React.Fragment key={idx}>
							<span
								style={{
									color: "white",
									fontSize: "0.7rem",
								}}
							>
								{el.name}
							</span>
						</React.Fragment>
					))}
				</div>
			</CarouselItemContent>
			<CarouselItemBackground
				src={`https://image.tmdb.org/t/p/w342${$title.poster_path}`}
			/>
			<CSSTransition
				in={modalVisible}
				classNames={"modal"}
				timeout={5000}
				unmountOnExit
			>
				<Modal domNode={domNode}>
					<ModalContainer
						top={
							itemRef &&
							itemRef.getBoundingClientRect().top
						}
						left={
							itemRef &&
							itemRef.getBoundingClientRect().left
						}
						background={`https://image.tmdb.org/t/p/original${$title.poster_path}`}
					></ModalContainer>
				</Modal>
			</CSSTransition>
		</CarouselItemContainer>
	);
};

export default CarouselItem;
