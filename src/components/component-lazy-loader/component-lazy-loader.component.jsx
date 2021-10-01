/** @format */

import React, { useEffect, useState } from "react";

const useLazyLoader = (
	lazyClass,
	Component,
	Wrapper,
	options = {
		root: null,
		rootMargin: "0px 0px 400px 0px",
		threshold: [0.01, 0.3, 0.7, 1.0],
	},
	ignore = [0, 1]
) => {
	// Add components that we want to be loaded immediately.
	const [visibleComponents, setVisibleComponents] = useState([...ignore]);

	useEffect(() => {
		const handleLazyLoad = (e) => {
			const id = parseInt(e[0].target.dataset.lazyId);
			if (e[0].isIntersecting && !visibleComponents.includes(id)) {
				setVisibleComponents((visibleComponents) => [
					...visibleComponents,
					id,
				]);
			}
		};
		const observer = new IntersectionObserver(handleLazyLoad, options);
		const components = document.querySelectorAll(`.${lazyClass}`);
		components.forEach((el) => {
			observer.observe(el);
		});
		observer.takeRecords();
	}, [lazyClass, options]);

	useEffect(() => {
		console.log(visibleComponents);
	}, [visibleComponents]);

	const LazyComponent = ({ lazyKey, visibleComponents, ...props }) => {
		const [load, setLoad] = useState(false);
		useEffect(() => {
			visibleComponents.includes(lazyKey) && setLoad(true);
		}, [lazyKey, visibleComponents]);

		return (
			<Wrapper className={lazyClass} data-lazy-id={lazyKey}>
				{load && <Component {...props} />}
			</Wrapper>
		);
	};

	return [LazyComponent, visibleComponents];
};

export default useLazyLoader;
