/** @format */

import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import React, { useCallback, useEffect, useState } from "react";
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
	const [activePage, setActivePage] = useState(0);
	const [direction, setDirection] = useState(true);
	// const [interacted, setInteracted] = useState(false);
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(
		Math.round((window.innerWidth / resultsPerPage) * 1.4)
	);
	const [domNode, setDomNode] = useState(null);

	// Listen for size changes
	const setRef = useCallback((node) => setDomNode(node), []);

	// Change number of results based on view width
	const resizeListener = useCallback(() => {
		if (window.innerWidth < 500) {
			setResultsPerPage(2);
		} else if (window.innerWidth >= 500 && window.innerWidth < 800) {
			setResultsPerPage(3);
		} else if (window.innerWidth >= 800 && window.innerWidth < 1100) {
			setResultsPerPage(4);
		} else if (window.innerWidth >= 1100 && window.innerWidth < 1400) {
			setResultsPerPage(5);
		} else if (window.innerWidth >= 1400) {
			setResultsPerPage(6);
		}

		setHeight(Math.round((window.innerWidth / resultsPerPage) * 1.35));
	}, [resultsPerPage]);

	const throttledResizeListener = useThrottle(resizeListener, 100);

	useEffect(() => {
		resizeListener();
		window.addEventListener("resize", throttledResizeListener);
		return () => {
			window.removeEventListener("resize", throttledResizeListener);
		};
	}, [resizeListener, throttledResizeListener]);

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

	useEffect(() => {
		// Set width of carousel items.
		if (domNode) {
			setWidth(100 / resultsPerPage);
		}
	}, [domNode, resultsPerPage]);

	const incrementActivePage = (direction) => {
		let newNum;

		if (activeIndicator + 1 >= pageArr.length && direction === true) {
			newNum = 0;
		} else if (activeIndicator - 1 < 0 && direction === false) {
			newNum = pageArr.length - 1;
		} else {
			direction === true
				? (newNum = activeIndicator + 1)
				: (newNum = activeIndicator - 1);
		}

		setActiveIndicator(newNum);
	};

	const clickHandler = (direction) => {
		setDirection(direction);
		incrementActivePage(direction);
		let newPageNum;
		// Loop through pages
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

	const throttledClickHandler = useThrottle(clickHandler, 500);

	return (
		<CarouselContainer $height={height}>
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
							$offsetWidth={width}
							key={idx}
							$entryDirection={
								direction === true ? "+" : "-"
							}
							$exitDirection={
								direction === true ? "-" : "+"
							}
						>
							{el.map((el, index) => (
								<CarouselItem
									id={idx}
									key={Math.max(
										Math.random()
									)}
									$left={index === 1}
									$right={
										index ===
										resultsPerPage
									}
									$title={el}
									$width={width}
								/>
							))}
						</CarouselPage>
					</CSSTransition>
				))}
			</CarouselSlider>
		</CarouselContainer>
	);
};

export default Carousel;
