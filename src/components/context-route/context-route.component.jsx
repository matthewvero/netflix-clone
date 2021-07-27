/** @format */

import React from "react";
import { Route } from "react-router-dom";

const ContextRoute = ({ contextComponent, value, children, ...rest }) => {
	const { Provider } = contextComponent;

	return (
		<Route {...rest}>
			<Provider value={value}>{children}</Provider>
		</Route>
	);
};

export default ContextRoute;
