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
	const [pageArr, setPageArr] = useState([]);
	const [refArr, setRefArr] = useState([]);
	const [resultsPerPage, setResultsPerPage] = useState(4);
	const [activePage, setActivePage] = useState(0);

	const [direction, setDirection] = useState(true);
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(
		Math.round((window.innerWidth / resultsPerPage) * 1.4)
	);
	const [domNode, setDomNode] = useState(null);
	// Listen for size changes
	const setRef = useCallback((node) => setDomNode(node), []);

	// Preload images
	useEffect(() => {
		$titles.titles.results.forEach((el) => {
			const img = new Image();
			img.src = el.poster_path;
		});
	}, [$titles.titles.results]);

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
	// Create array of refs to prevent ref forwarding error
	useEffect(() => {
		const newRefArr = pageArr.map(() => React.createRef(null));
		setRefArr(newRefArr);
	}, [pageArr]);

	// Set width of carousel items.
	useEffect(() => {
		if (domNode) {
			setWidth(100 / resultsPerPage);
		}
	}, [domNode, resultsPerPage]);

	const clickHandler = (direction) => {
		setDirection(direction);
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
						$activePage={activePage}
						$idx={idx}
						key={idx}
					/>
				))}
			</IndicatorGroup>
			<CarouselButton
				$width={width}
				className="left"
				onClick={() => throttledClickHandler(false)}
			>
				<CarouselIcon icon={faChevronLeft} />
			</CarouselButton>
			<CarouselButton
				$width={width}
				onClick={() => throttledClickHandler(true)}
			>
				<CarouselIcon icon={faChevronRight} />
			</CarouselButton>

			<CarouselSlider ref={setRef}>
				{pageArr.map((el, idx) => (
					<CSSTransition
						in={idx === activePage}
						timeout={400}
						classNames="carouselpage"
						unmountOnExit
						nodeRef={refArr[idx]}
						key={idx}
					>
						<CarouselPage
							ref={refArr[idx]}
							$offsetWidth={width}
							className={direction && "forward"}
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
