/** @format */

import React, { useEffect, useState } from "react";

const useLazyLoader = (
	lazyClass,
	Components,
	Wrapper,
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

	const LazyComponents = ({
		lazyKey,
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
				{load && <Components {...props} />}
			</Wrapper>
		);
	};

	return [LazyComponents, visibleComponents];
};

export default useLazyLoader;
