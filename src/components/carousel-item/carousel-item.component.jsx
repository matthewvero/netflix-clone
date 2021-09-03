/** @format */

import {
	faChevronDown,
	faPlay,
	faPlus,
	faThumbsDown,
	faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../../firebase";
import { GenreContext } from "../contexts";
import {
	CarouselItemContainer,
	CarouselItemContent,
	CarouselItemBackground,
	CarouselButton,
	CarouselButtonIcon,
} from "./carousel-item.styles";

const CarouselItem = ({ $title, $left, $right, $width }) => {
	const genreIDs = useContext(GenreContext);
	const [genres, setGenres] = useState([]);
	useEffect(() => {
		if (genreIDs.length) {
			setGenres(
				genreIDs.filter((el) =>
					$title.genre_ids.includes(el.id)
				)
			);
		}
	}, [$title.genre_ids, $title.genres, genreIDs]);

	return (
		<CarouselItemContainer
			$left={$left}
			$right={$right}
			$width={$width}
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
					<CarouselButton>
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
					<CarouselButton style={{ marginLeft: "auto" }}>
						<CarouselButtonIcon icon={faChevronDown} />
					</CarouselButton>
				</div>
				<div
					style={{
						height: "30%",
						width: "100%",
						display: "flex",
						flexWrap: "wrap",
					}}
				>
					{genres.map((el) => (
						<React.Fragment>
							<span
								style={{
									color: "white",
									fontSize: "0.8rem",
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
		</CarouselItemContainer>
	);
};

export default CarouselItem;
