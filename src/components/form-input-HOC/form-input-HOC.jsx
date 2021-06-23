/** @format */

import React, { useState } from "react";

const FormInputHOC = (
	WrappedComponent,
	props,
	{ setValue, setInteracted, name }
) => {
	const updateValue = (e) => {
		setValue((valuesObj) => ({ ...valuesObj, [name]: e.target.value }));
		setInteracted((interactedObj) => ({
			...interactedObj,
			[name]: true,
		}));
	};
	return (
		<WrappedComponent
			setInteracted={setInteracted}
			onChange={updateValue}
			{...props}
		/>
	);
};

export default FormInputHOC;
