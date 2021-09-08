/** @format */

import React, { useContext, useEffect, useState } from "react";
import {
	BrowsePageContainer,
	BrowsePageHeader,
	HeaderItem,
	HeaderSection,
	HeaderLink,
} from "./browse.styles";
import { ReactComponent as NetflixLogo } from "../../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBell,
	faChevronDown,
	faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { GenreContext } from "../../components/contexts";
import { db } from "../../firebase";

import Carousel from "../../components/carousel/carousel.component";

const BrowsePage = () => {
	const [titles, setTitles] = useState([]);
	const [categoryIDs, setCategoryIDs] = useState([]);

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

					setTitles(data.slice(0, 4));
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
			<div
				style={{
					height: "20vh",
					width: "100vw",
				}}
			></div>
			<GenreContext.Provider value={categoryIDs}>
				{titles.length &&
					titles.map((el) => (
						<Carousel
							$titles={el}
							$genreIDs={categoryIDs}
							key={Math.max(Math.random())}
						/>
					))}
			</GenreContext.Provider>
		</BrowsePageContainer>
	);
};

export default BrowsePage;
