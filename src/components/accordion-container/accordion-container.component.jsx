/** @format */

import React, { useEffect, useState } from "react";

const AccordionContainer = ({ children }) => {
	const [childrenWithProps, setChildrenWithProps] = useState([]);
	const [expandedSegment, setExpandedSegment] = useState(false);

	useEffect(() => {
		const childrenWithPropsArr = children.map((el, idx) => {
			return React.cloneElement(el, {
				expandedSegment,
				setExpandedSegment,
				idx,
			});
		});
		setChildrenWithProps(childrenWithPropsArr);
	}, [children, expandedSegment]);

	return (
		<div
			style={{
				width: "90%",
				minHeight: "auto",
				margin: "30px",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			{childrenWithProps}
		</div>
	);
};

export default AccordionContainer;
