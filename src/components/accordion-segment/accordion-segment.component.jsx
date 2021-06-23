/** @format */

import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { SubHeading } from "../misc/text.styles";
import { AccordionBar } from "./accordion-segment.styles";

const AccordionSegment = ({
	children,
	title,
	expandedSegment,
	setExpandedSegment,
	idx,
}) => {
	const switchSegment = () => {
		if (expandedSegment === idx) {
			setExpandedSegment(false);
		} else {
			setExpandedSegment(idx);
		}
	};
	return (
		<AccordionBar
			className={`${expandedSegment === idx && "collapsed"}`}
			onClick={() => switchSegment()}
		>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					width: "100%",
					height: "100%",
					padding: "0 5%",
					boxSizing: "border-box",
					backgroundColor: "#303030",
				}}
			>
				<SubHeading>{title}</SubHeading>

				<FontAwesomeIcon
					icon={expandedSegment === idx ? faTimes : faPlus}
					style={{
						color: "white",
						fontSize: "2rem",
					}}
				/>
			</div>
			<div
				style={{
					padding: "20px",
					backgroundColor: "#303030",
					marginTop: "1px",
				}}
			>
				{children}
			</div>
		</AccordionBar>
	);
};

export default AccordionSegment;
