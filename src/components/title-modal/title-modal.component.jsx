/** @format */
import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import reactDom from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	TitleModalCloseButton,
	TitleModalContainer,
	TitleModalContentContainer,
} from "./title-modal.styles";

const TitleModal = ({
	$title,
	domNode,
	itemRef,
	modalVisible,
	setModalVisible,
}) => {
	return reactDom.createPortal(
		<TitleModalContainer
			top={itemRef && itemRef.getBoundingClientRect().top}
			left={itemRef && itemRef.getBoundingClientRect().left}
			width={itemRef && itemRef.offsetWidth}
			height={itemRef && itemRef.offsetHeight}
			background={`https://image.tmdb.org/t/p/original${$title.poster_path}`}
		>
			{modalVisible && (
				<React.Fragment>
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
					<TitleModalContentContainer>
						hello
					</TitleModalContentContainer>
				</React.Fragment>
			)}
		</TitleModalContainer>,
		domNode
	);
};

export default TitleModal;
