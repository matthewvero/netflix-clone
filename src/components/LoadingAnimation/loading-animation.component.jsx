/** @format */

import React from "react";
import {
	CardContainer,
	CardLoadingAnimation,
	LoadingAnimationContainer,
	TextLoadingAnimation,
} from "./loading-animation.styles";

const LoadingAnimation = () => {
	return (
		<LoadingAnimationContainer>
			<TextLoadingAnimation />
			<CardContainer>
				<CardLoadingAnimation />
				<CardLoadingAnimation delay={300} />
				<CardLoadingAnimation delay={600} />
				<CardLoadingAnimation delay={900} />
				<CardLoadingAnimation delay={1200} />
				<CardLoadingAnimation delay={1500} />

				<CardLoadingAnimation delay={1800} />
				<CardLoadingAnimation delay={2100} />
				<CardLoadingAnimation delay={2400} />
				<CardLoadingAnimation delay={2700} />
			</CardContainer>
		</LoadingAnimationContainer>
	);
};

export default LoadingAnimation;
