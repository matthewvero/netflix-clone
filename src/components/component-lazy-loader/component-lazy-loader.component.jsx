/** @format */

import React, { useEffect, useState } from "react";

export const useLazyLoader = (
	lazyClass,
	options = {
		root: null,
		rootMargin: "0px 0px 400px 0px",
		threshold: 0,
	},
	ignore = [0, 1]
) => {
	// Add components that we want to be loaded immediately.
	const [visibleComponents, setVisibleComponents] = useState([...ignore]);



	// Init intersection observers for all elements with lazy class.
	useEffect(() => {
		const handleLazyLoad = (e) => {
			e.forEach((el) => {
				const id = parseInt(el.target.dataset.lazyId);
				if (
					!visibleComponents.includes(id) &&
					el.isIntersecting
				) {
					setVisibleComponents((visibleComponents) => [
						...visibleComponents,
						id,
					]);
				}
			});
		};
		const observer = new IntersectionObserver(handleLazyLoad, options);
		const components = document.querySelectorAll(`.${lazyClass}`);
		components.forEach((el) => {
			observer.observe(el);
		});
		observer.takeRecords();
		return () => {
			components.forEach((el) => {
				observer.unobserve(el);
			});
		};
	}, [lazyClass, options, visibleComponents]);



	return [visibleComponents];
};


export const withLazyLoad = (Wrapper, Component) => ({
		lazyKey,
		lazyClass,
		visibleComponents,
		ignore,
		...props
	}) => {
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
