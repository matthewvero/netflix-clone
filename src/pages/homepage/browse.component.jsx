/** @format */

import React, { useEffect, useState } from "react";
import {
	BrowsePageContainer,
	BrowsePageHeader,
	HeaderItem,
	HeaderSection,
	HeaderLink,
	FeaturedBanner,
	BannerContentContainer,
	BannerContent,
	BannerOverview,
	BannerPlayButton,
	BannerInfoButton,
} from "./browse.styles";
import { ReactComponent as NetflixLogo } from "../../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBell,
	faChevronDown,
	faInfoCircle,
	faPlay,
	faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { GenreContext } from "../../components/contexts";
import { db } from "../../firebase";

import Carousel from "../../components/carousel/carousel.component";
import { truncateText } from "../../helpers/utilities";

const BrowsePage = () => {
	const [titles, setTitles] = useState([]);
	const [categoryIDs, setCategoryIDs] = useState([]);
	const [featured, setFeatured] = useState();
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
				alert(err);
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
				alert(err);
			}
		};

		getTitles();
		getCategoryIDs();
	}, []);

	return (
		<BrowsePageContainer>
			<BrowsePageHeader>
				<HeaderSection>
					<NetflixLogo
						style={{
							maxHeight: "60%",
							maxWidth: "30%",
							marginRight: "3%",
						}}
					/>
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

			{featured && (
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
											icon={faPlay}
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
			)}

			<GenreContext.Provider value={categoryIDs}>
				{titles.length
					? titles.map((el) => (
							<Carousel
								$titles={el}
								$genreIDs={categoryIDs}
								key={Math.max(Math.random())}
							/>
					  ))
					: null}
			</GenreContext.Provider>
		</BrowsePageContainer>
	);
};

export default BrowsePage;
