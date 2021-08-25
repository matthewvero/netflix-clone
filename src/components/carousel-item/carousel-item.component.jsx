/** @format */

import React, { useEffect, useState } from "react";
import {
	CarouselItemContainer,
	CarouselItemCard,
} from "./carousel-item.styles";

const CarouselItem = ({ $title, $left, $right, $width }) => {
	const [active, setActive] = useState(false);
	return (
		<CarouselItemContainer
			$left={$left}
			$right={$right}
			onMouseEnter={() => setActive(true)}
			onMouseOut={() => setActive(false)}
			className={`${active && "active"}`}
			$backgroundImage={`https://image.tmdb.org/t/p/w342${$title.poster_path}`}
			$width={$width}
		></CarouselItemContainer>
	);
};

export default CarouselItem;
