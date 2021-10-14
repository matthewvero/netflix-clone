/** @format */
import "regenerator-runtime/runtime";
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
import TitleModal from "../title-modal/title-modal.component";
import {
	CarouselItemContainer,
	CarouselItemContent,
	CarouselItemBackground,
	GenresContainer,
	GenreContentRow,
} from "./carousel-item.styles";
import { CircleButton, CircleButtonIcon } from "../buttons.styles";
import TitleMetaData from "../title-meta-data/title-meta-data.component";
import AttributeList from "../attribute-list/attribute-list.component";

const CarouselItem = ({ $title, $left, $right, $width }) => {
	const genreIDs = useContext(GenreContext);
	const [genres, setGenres] = useState([]);
	const [info, setInfo] = useState({});
	const [modalVisible, setModalVisible] = useState(false);
	const [itemRef, setItemRef] = useState();
	const [imgLoaded, setImgLoaded] = useState(false);
	const domNode = document.getElementById("App");
	const modalRef = useRef();

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
					<CircleButton style={{ marginLeft: "0" }}>
						<CircleButtonIcon icon={faPlay} />
					</CircleButton>
					<CircleButton>
						<CircleButtonIcon icon={faPlus} />
					</CircleButton>
					<CircleButton>
						<CircleButtonIcon icon={faThumbsUp} />
					</CircleButton>
					<CircleButton>
						<CircleButtonIcon icon={faThumbsDown} />
					</CircleButton>
					<CircleButton
						className="right"
						onClick={() => setModalVisible(true)}
					>
						<CircleButtonIcon icon={faChevronDown} />
					</CircleButton>
				</GenreContentRow>
				<TitleMetaData info={info} />
				<GenresContainer>
					<AttributeList items={genres} separator=' •' small/>
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
				nodeRef={modalRef}
			>
				<TitleModal
					$title={$title}
					info={info}
					itemRef={itemRef}
					modalVisible={modalVisible}
					setModalVisible={setModalVisible}
					domNode={domNode}
					transitionRef={modalRef}
				/>
			</CSSTransition>
		</CarouselItemContainer>
	);
};

export default CarouselItem;
