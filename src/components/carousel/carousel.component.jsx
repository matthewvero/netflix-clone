/** @format */

import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import React, { useCallback, useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
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
} from "./carousel.styles";

import IndicatorGroup from './indicator-group/indicator-group.component'

import {paginator} from './carousel.utilities'

const Carousel = ({ $titles, ...props }) => {
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

	// Handle swipes on touchscreen devices
	const handlers = useSwipeable({
		onSwipedLeft: () => throttledClickHandler(true),
		onSwipedRight: () => throttledClickHandler(false),
	});

	// Preload images
	useEffect(() => {
		$titles?.titles?.results?.forEach((el) => {
			const img = new Image();
			img.src = el.poster_path;
		});
	}, [$titles.titles.results]);

	// Change number of results based on view width
	const resizeListener = useCallback(() => {
		let results = 2;
		for ( let i = 500; i < 1700; i += 300) {
			if(window.innerWidth > i) {
				results++
			}
		}
		setResultsPerPage(results)
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
			setPageArr(paginator($titles.titles.results, resultsPerPage));
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
	if (!$titles) return null;

	return (
		<CarouselContainer $height={height} {...handlers}>
			{$titles && (
				<CarouselTitle>{$titles.collectionName}</CarouselTitle>
			)}
			<IndicatorGroup pages={pageArr.length} activePage={activePage}/>
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
