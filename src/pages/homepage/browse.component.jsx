/** @format */

import {
	faBell,
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
import { truncateText, useThrottle } from "../../helpers/utilities";
import {
	BannerButtonContainer,
	BannerContent,
	BannerContentContainer,
	BannerOverview,
	BannerTitle,
	BrowsePageContainer,
	BrowsePageHeader,
	FeaturedBanner,
	HeaderItem,
	HeaderLink,
	HeaderSection,
	NetflixLogo,
} from "./browse.styles";
import { CarouselWrapper } from "../../components/carousel/carousel.styles";
import {
	BannerInfoButton,
	BannerPlayButton,
} from "../../components/buttons.styles";
import HeaderDropdown from "../../components/header-dropdown/header-dropdown.component";

const BrowsePage = () => {
	const [titles, setTitles] = useState([]);
	const [categoryIDs, setCategoryIDs] = useState([]);
	const [featured, setFeatured] = useState();
	const [scrolled, setScrolled] = useState(false);
	const [loading, setLoading] = useState(true);
	const [LazyCarousel, visibleComponents] = useLazyLoader(
		"carousel",
		Carousel,
		CarouselWrapper
	);

	const handleScroll = e => {
		if(window.scrollY > 0 && scrolled === false) {
			setScrolled(true);
		} else if (window.scrollY === 0 && scrolled === true) {
			setScrolled(false)
		}
	}
	const debouncedHandleScroll = useThrottle(handleScroll, 1000);

	useEffect(() => {
		
		window.addEventListener('scroll', debouncedHandleScroll);
		return () => {
			window.removeEventListener('scroll', debouncedHandleScroll);
		}
	}, [debouncedHandleScroll])

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
			<BrowsePageHeader className={scrolled ? 'scrolled' : null}>
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
					<HeaderDropdown/>
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
								<BannerOverview>

									{featured && (
										<>
										<BannerTitle>{featured.name}</BannerTitle>
									
											{
											truncateText(
											featured.overview,
											200
											)}
										
										</>
										)
									}
									<BannerButtonContainer>
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
									</BannerButtonContainer>
								</BannerOverview>
							</BannerContent>
						</BannerContentContainer>
					</FeaturedBanner>
					<GenreContext.Provider value={categoryIDs}>
						{
							titles?.map((el, idx) => (
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
						}
					</GenreContext.Provider>
				</React.Fragment>
			)}
		</BrowsePageContainer>
	);
};

export default BrowsePage;
