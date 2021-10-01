/** @format */
import "regenerator-runtime/runtime";
import {
	faChevronDown,
	faPlay,
	faPlus,
	faThumbsDown,
	faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { functionsURL } from "../../firebase";
import { GenreContext } from "../contexts";
import TitleModal from "../title-modal/title-modal.component";
import {
	CarouselItemContainer,
	CarouselItemContent,
	CarouselItemBackground,
	CarouselButton,
	CarouselButtonIcon,
	Rating,
	GenresContainer,
	GenreContentRow,
} from "./carousel-item.styles";

const CarouselItem = ({ $title, $left, $right, $width }) => {
	const genreIDs = useContext(GenreContext);
	const [genres, setGenres] = useState([]);
	const [info, setInfo] = useState({});
	const [modalVisible, setModalVisible] = useState(false);
	const domNode = document.getElementById("App");
	const [itemRef, setItemRef] = useState(null);
	const [imgLoaded, setImgLoaded] = useState(false);

	useEffect(() => {
		if (genreIDs?.length && $title?.genre_ids?.length) {
			setGenres(
				genreIDs.filter((el) =>
					$title.genre_ids.includes(el.id)
				)
			);
		}
	}, [$title, genreIDs]);

	const getInfo = async (id) => {
		if (!imgLoaded) {
			const image = new Image();
			image.src = `https://image.tmdb.org/t/p/original${$title.poster_path}`;
			setImgLoaded(true);
		}
		// get additional title data
		try {
			if (!info.releaseInfo?.hasOwnProperty("iso_3166_1")) {
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
			// preload full size image
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
	if (!$title) return null;
	return (
		<CarouselItemContainer
			$left={$left}
			$right={$right}
			$width={$width}
			onMouseEnter={() => getInfo($title.id)}
		>
			<CarouselItemContent>
				<GenreContentRow>
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
						className="right"
						onClick={() => setModalVisible(true)}
					>
						<CarouselButtonIcon icon={faChevronDown} />
					</CarouselButton>
				</GenreContentRow>
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
				<GenresContainer>
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
				</GenresContainer>
			</CarouselItemContent>
			<CarouselItemBackground
				ref={(ref) => setItemRef(ref)}
				src={`https://image.tmdb.org/t/p/w342${$title.poster_path}`}
			/>
			<CSSTransition
				in={modalVisible}
				classNames={"modal"}
				timeout={200}
				unmountOnExit
			>
				<TitleModal
					$title={$title}
					itemRef={itemRef}
					modalVisible={modalVisible}
					setModalVisible={setModalVisible}
					domNode={domNode}
				/>
			</CSSTransition>
		</CarouselItemContainer>
	);
};

export default CarouselItem;
