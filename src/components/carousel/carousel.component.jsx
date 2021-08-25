/** @format */

import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useThrottle } from "../../helpers/utilities";
import CarouselItem from "../carousel-item/carousel-item.component";
import {
	CarouselButton,
	CarouselContainer,
	CarouselIcon,
	CarouselPage,
	CarouselSlider,
	CarouselTitle,
	Indicator,
	IndicatorGroup,
} from "./carousel.styles";

const Carousel = ({ $titles }) => {
	const [activeIndicator, setActiveIndicator] = useState(0);
	const [pageArr, setPageArr] = useState([]);
	const [resultsPerPage, setResultsPerPage] = useState(4);
	const [prevPage, setPrevPage] = useState(-1);
	const [activePage, setActivePage] = useState(0);
	const [nextPage, setNextPage] = useState(1);
	const [direction, setDirection] = useState(true);
	const [interacted, setInteracted] = useState(false);
	const [width, setWidth] = useState(0);
	const [domNode, setDomNode] = useState(null);

	const setRef = useCallback((node) => setDomNode(node), []);

	useEffect(() => {
		if (domNode) {
			setWidth(domNode.clientWidth / resultsPerPage - 4);
		}
	}, [domNode, resultsPerPage]);

	const incrementActivePage = (direction) => {
		let newNum;

		if (activeIndicator + 1 >= pageArr.length && direction === "+") {
			newNum = 0;
		} else if (activeIndicator - 1 < 0 && direction === "-") {
			newNum = pageArr.length - 1;
		} else {
			direction === "+"
				? (newNum = activeIndicator + 1)
				: (newNum = activeIndicator - 1);
		}

		setActiveIndicator(newNum);
	};

	const clickHandler = (direction) => {
		setDirection(direction);
		// // const maxScroll = containerRef.current.scrollWidth;
		// const moveDistance = containerRef.current.offsetWidth;
		// const { scrollWidth } = containerRef.current;
		// const scrollEnd = scrollWidth - containerRef.current.offsetWidth;
		let newPageNum;

		if (direction === true) {
			if (activePage + 1 > pageArr.length - 1) {
				newPageNum = 0;
			} else {
				newPageNum = activePage + 1;
			}
		} else {
			if (activePage - 1 < 0) {
				newPageNum = pageArr.length - 1;
			} else {
				newPageNum = activePage - 1;
			}
		}

		setActivePage(newPageNum);
	};

	useEffect(() => {
		// Paginate titles
		if ($titles.titles) {
			const data = $titles.titles.results;

			let newArr = [];
			let i,
				j,
				newSlice,
				chunk = resultsPerPage;
			for (i = 0, j = data.length; i < j; i += chunk) {
				const prevIdx = i - 1 < 0 ? data.length - 1 : i - 1;
				const nextIdx =
					i + chunk + 1 > data.length - 1 ? 0 : i + chunk;
				newSlice = data.slice(i, i + chunk);
				newSlice.unshift(data[prevIdx]);
				newSlice.push(data[nextIdx]);
				newArr.push(newSlice);
			}
			setPageArr(newArr);
		}
	}, [$titles, resultsPerPage]);

	const throttledClickHandler = useThrottle(clickHandler, 500);

	return (
		<CarouselContainer>
			{$titles && (
				<CarouselTitle>{$titles.collectionName}</CarouselTitle>
			)}
			<IndicatorGroup>
				{pageArr.map((el, idx) => (
					<Indicator
						$activePage={activeIndicator}
						$idx={idx}
						key={idx}
					/>
				))}
			</IndicatorGroup>
			<CarouselButton
				className="left"
				onClick={() => throttledClickHandler(false)}
			>
				<CarouselIcon icon={faChevronLeft} />
			</CarouselButton>
			<CarouselButton onClick={() => throttledClickHandler(true)}>
				<CarouselIcon icon={faChevronRight} />
			</CarouselButton>

			<CarouselSlider ref={setRef}>
				{pageArr.map((el, idx) => (
					<CSSTransition
						in={idx === activePage}
						timeout={400}
						classNames="carouselpage"
						unmountOnExit
					>
						<CarouselPage
							$offsetWidth={
								domNode.clientWidth /
								resultsPerPage
							}
							key={idx}
							$entryDirection={
								direction === true ? "+" : "-"
							}
							$exitDirection={
								direction === true ? "-" : "+"
							}
							$active={idx === activePage}
							$prev={idx === prevPage}
						>
							{el.map((el, index) => (
								<CarouselItem
									id={idx}
									key={Math.max(
										Math.random()
									)}
									$left={index === 1}
									$right={index === 4}
									$title={el}
									$width={width}
								></CarouselItem>
							))}
						</CarouselPage>
					</CSSTransition>
				))}
			</CarouselSlider>
		</CarouselContainer>
	);
};

export default Carousel;
