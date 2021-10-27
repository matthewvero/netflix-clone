import React, { useEffect, useState } from "react";
import {IndicatorGroupContainer, Indicator} from './indicator-group.styles';

const IndicatorGroup = ({pages, activePage}) => {
	const [indicators, setIndicators] = useState([]);

	useEffect(() => {
		const indicatorArr = [];
		for(let i = 0; i < pages; i++) {
			indicatorArr.push(
				<Indicator
					$activePage={activePage}
					$idx={i}
					key={i}
				/>
			)
		}
		setIndicators(indicatorArr)
	}, [pages, activePage])

	return (
		<IndicatorGroupContainer>
			{indicators.map(el => el)}
		</IndicatorGroupContainer>
	)
};

export default IndicatorGroup;