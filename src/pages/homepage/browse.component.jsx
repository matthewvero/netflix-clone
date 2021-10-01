/** @format */

import {
	faBell,
	faChevronDown,
	faInfoCircle,
	faPlay,
	faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Carousel from "../../components/carousel/carousel.component";
import useLazyLoader from "../../components/component-lazy-loader/component-lazy-loader.component";
import { GenreContext } from "../../components/contexts";
import LoadingAnimation from "../../components/LoadingAnimation/loading-animation.component";
import { db } from "../../firebase";
import { truncateText } from "../../helpers/utilities";
import {
	BannerContent,
	BannerContentContainer,
	BannerInfoButton,
	BannerOverview,
	BannerPlayButton,
	BrowsePageContainer,
	BrowsePageHeader,
	CarouselWrapper,
	FeaturedBanner,
	HeaderItem,
	HeaderLink,
	HeaderSection,
	NetflixLogo,
} from "./browse.styles";

const BrowsePage = () => {
	const [titles, setTitles] = useState([]);
	const [categoryIDs, setCategoryIDs] = useState([]);
	const [featured, setFeatured] = useState();
	const [loading, setLoading] = useState(true);
	const [LazyCarousel, visibleComponents] = useLazyLoader(
		"carousel",
		Carousel,
		CarouselWrapper
	);

	useEffect(() => {
		const getTitles = async () => {
			try {
				const collectionRef = await db
					.collection("categories")
					.get();
				if (collectionRef.docs) {
					const data = collectionRef.docs.map((el) => ({
						collectionName: el.id,
						titles: el.data(),
					}));
					setFeatured(
						data.filter(
							(el) =>
								el.collectionName === "trending"
						)[0].titles.results[0]
					);
					setTitles(data);
				} else {
					alert("There was a problem loading content");
				}
			} catch (err) {
				console.log(err);
			}
		};

		const getCategoryIDs = async () => {
			try {
				const categoryIDs = await db
					.collection("categoryIDs")
					.doc("IDs")
					.get();
				const genreData = categoryIDs.data();
				if (genreData.genres) {
					setCategoryIDs(genreData.genres);
				} else {
					alert("There was a problem loading content");
				}
			} catch (err) {
				console.log(err);
			}
		};

		getTitles();
		getCategoryIDs();
	}, []);

	useEffect(() => {
		if (categoryIDs.length && titles.length) setLoading(false);
	}, [categoryIDs.length, titles.length]);

	return (
		<BrowsePageContainer>
			<BrowsePageHeader>
				<HeaderSection>
					<NetflixLogo />
					<HeaderLink>Home</HeaderLink>
					<HeaderLink>Series</HeaderLink>
					<HeaderLink>Films</HeaderLink>
				</HeaderSection>
				<HeaderSection className="left">
					<HeaderItem>
						<FontAwesomeIcon
							icon={faSearch}
							style={{
								color: "#e5e5e5",
								fontSize: "0.9rem",
							}}
						/>
					</HeaderItem>
					<HeaderItem>
						<FontAwesomeIcon
							icon={faBell}
							style={{
								color: "#e5e5e5",
								fontSize: "0.9rem",
							}}
						/>
					</HeaderItem>
					<HeaderItem>
						<div
							style={{
								height: "30px",
								width: "30px",
								backgroundColor: "yellow",
								borderRadius: "4px",
								marginRight: "10px",
							}}
						></div>
						<FontAwesomeIcon
							icon={faChevronDown}
							style={{
								color: "#e5e5e5",
							}}
						/>
					</HeaderItem>
				</HeaderSection>
			</BrowsePageHeader>

			{loading ? (
				<LoadingAnimation />
			) : (
				<React.Fragment>
					<FeaturedBanner
						$backgroundImage={
							"https://image.tmdb.org/t/p/original" +
							featured.poster_path
						}
					>
						<BannerContentContainer>
							<BannerContent>
								<BannerOverview style={{}}>
									{featured.overview &&
										truncateText(
											featured.overview,
											200
										)}
									<div
										style={{
											display: "flex",
											margin: "13px 0",
										}}
									>
										<BannerPlayButton>
											<FontAwesomeIcon
												className="bannericon"
												icon={
													faPlay
												}
											/>
											Play
										</BannerPlayButton>
										<BannerInfoButton>
											<FontAwesomeIcon
												className="bannericon"
												icon={
													faInfoCircle
												}
											/>
											More info
										</BannerInfoButton>
									</div>
								</BannerOverview>
							</BannerContent>
						</BannerContentContainer>
					</FeaturedBanner>
					<GenreContext.Provider value={categoryIDs}>
						{titles.length
							? titles.map((el, idx) => (
									<LazyCarousel
										$titles={el}
										$genreIDs={
											categoryIDs
										}
										key={idx}
										lazyKey={idx}
										visibleComponents={
											visibleComponents
										}
									/>
							  ))
							: null}
					</GenreContext.Provider>
				</React.Fragment>
			)}
		</BrowsePageContainer>
	);
};

export default BrowsePage;
