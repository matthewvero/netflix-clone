/** @format */

import { render, cleanup } from "@testing-library/react";
import React from "react";
import CarouselItem from "./carousel-item.component";

let container = null;
beforeEach(() => {
	// setup a DOM element as a render target
	container = document.createElement("div");
	document.body.appendChild(container);
});

afterEach(cleanup);
describe("CarouselItem", () => {
	it("Renders without props", () => {
		expect.assertions(1);
		const element = render(<CarouselItem />);
		expect(element).toMatchSnapshot();
	});

	it("Renders correctly with props", () => {
		const defaultProps = {
			$title: {
				id: "23434",
				genre_ids: [12, 23, 34],
			},
			$left: true,
			$right: false,
			$width: 200,
		};
		const element = render(<CarouselItem {...defaultProps} />);
		expect(element).toMatchSnapshot();
	});
});
