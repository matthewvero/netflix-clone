/** @format */

import React, { useState } from "react";
import { SubHeading } from "../misc/text.styles";
import { AccordionBar, AccordionContentBox } from "./accordion.styles";

const AccordionSegment = ({ children, title }) => {
	const [collapsed, setCollapsed] = useState(true);
	return (
		<AccordionBar
			className={`${!collapsed && "collapsed"}`}
			onClick={() => setCollapsed((cur) => !cur)}
		>
			<SubHeading>{title}</SubHeading>

			<div style={{ padding: "20px" }}>{children}</div>
		</AccordionBar>
	);
};

export default AccordionSegment;
