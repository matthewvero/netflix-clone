/** @format */
import React, { useEffect } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import reactDom from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	TitleModalCloseButton,
	TitleModalContainer,
	TitleModalContent,
	TitleModalContentContainer,
} from "./title-modal.styles";

const TitleModal = ({
	$title,
	domNode,
	itemRef,
	modalVisible,
	setModalVisible,
}) => {
	useEffect(() => {
		// Prevent scrolling while modal is open
		const page = document.querySelector("html");
		if (modalVisible) {
			page.classList.add("noscroll");
		} else {
			page.classList.remove("noscroll");
		}
	});

	return reactDom.createPortal(
		<TitleModalContainer
			top={itemRef && itemRef.getBoundingClientRect().top}
			left={itemRef && itemRef.getBoundingClientRect().left}
			width={itemRef && itemRef.offsetWidth}
			height={itemRef && itemRef.offsetHeight}
		>
			<TitleModalContentContainer
				background={`https://image.tmdb.org/t/p/original${$title.poster_path}`}
			>
				{modalVisible && (
					<TitleModalCloseButton
						onClick={() => setModalVisible(false)}
					>
						<FontAwesomeIcon
							icon={faTimes}
							style={{
								color: "white",
								fontSize: "1.5rem",
							}}
						/>
					</TitleModalCloseButton>
				)}
				<TitleModalContent>hello</TitleModalContent>
			</TitleModalContentContainer>
		</TitleModalContainer>,
		domNode
	);
};

export default TitleModal;
