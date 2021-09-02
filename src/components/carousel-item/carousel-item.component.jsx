/** @format */

import React, { useEffect, useState } from "react";
import {
	CarouselItemContainer,
	CarouselItemContent,
	CarouselItemBackground,
} from "./carousel-item.styles";

const CarouselItem = ({ $title, $left, $right, $width }) => {
	const [active, setActive] = useState(false);
	return (
		<CarouselItemContainer
			$left={$left}
			$right={$right}
			className={`${active && "active"}`}
			$width={$width}
		>
			<CarouselItemContent></CarouselItemContent>
			<CarouselItemBackground
				src={`https://image.tmdb.org/t/p/w342${$title.poster_path}`}
			/>
		</CarouselItemContainer>
	);
};

export default CarouselItem;
