/** @format */

import React, { useEffect, useState } from "react";
import { InputBox } from "../components/misc/inputs.styles";

function capitalise(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function emailRegex(input) {
	let regex =
		/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
	return regex.test(input);
}

function customRegex(regex, input) {
	return regex.test(input);
}

export const useFormValidator = () => {
	const [validated, setValidated] = useState(false);
	const [valuesObj, setValuesObj] = useState({});
	const [errors, setErrors] = useState({});
	const [interacted, setInteracted] = useState({});
	const [inputsObj, setInputsObj] = useState({});
	useEffect(() => {
		if (Object.keys(errors).length) {
			const isValidated = Object.keys(errors).reduce(
				(prev, cur) => {
					if (errors[cur].length === 0) {
						return (prev = true);
					} else {
						return (prev = false);
					}
				},
				0
			);
			setValidated(isValidated);
		}
	}, [errors]);

	useEffect(() => {
		for (const key in valuesObj) {
			if (valuesObj[key]) {
				// Check input has been interacted with
				let errorsArr = [];
				if (
					inputsObj[key].$type === "email" &&
					!emailRegex(valuesObj[key])
				) {
					errorsArr.push("Please enter a valid email");
				}

				if (
					inputsObj[key].$rules.regex &&
					!customRegex(
						inputsObj[key].$rules.regex.str,
						valuesObj[key]
					)
				) {
					errorsArr.push(
						inputsObj[key].$rules.regex.message
					);
				}

				if (
					inputsObj[key].$rules.minLength &&
					valuesObj[key].length <
						inputsObj[key].$rules.minLength
				) {
					errorsArr.push(
						`${capitalise(key)} must be more than ${
							inputsObj[key].$rules.minLength
						}`
					);
				}

				if (
					inputsObj[key].$rules.maxLength &&
					valuesObj[key].length >
						inputsObj[key].$rules.maxLength
				) {
					errorsArr.push(
						`${capitalise(key)} must be less than ${
							inputsObj[key].maxLength
						}`
					);
				}
				setErrors((errors) => ({
					...errors,
					[key]: errorsArr,
				}));
			}
		}
	}, [valuesObj]);

	const api = {
		valuesObj,
		setValuesObj,
		validated,
		errors,
		interacted,
		setInteracted,
		setInputsObj,
		inputsObj,
	};

	return {
		valuesObj,
		setValuesObj,
		validated,
		errors,
		interacted,
		setInputsObj,
		inputsObj,
		api,
	};
};

export const ValidatedInput = ({
	$api,
	$name,
	$type,
	$rules = {},
	...props
}) => {
	const {
		setInputsObj,
		valuesObj,
		setValuesObj,
		interacted,
		setInteracted,
		errors,
	} = $api;

	useEffect(() => {
		setInputsObj((inputsObj) => ({
			...inputsObj,
			[$name]: {
				$type,
				$rules,
			},
		}));
	}, []);

	const handleChange = (e) => {
		setValuesObj((curValues) => ({
			...curValues,
			[$name]: e.target.value,
		}));
	};
	return (
		<InputBox
			name={$name}
			type={$type}
			value={valuesObj[$name] || ""}
			className={`${
				valuesObj[$name] &&
				valuesObj[$name].length &&
				"populated"
			} ${
				errors[$name] &&
				interacted[$name] &&
				Object.keys(errors[$name]).length &&
				"error"
			}`}
			onChange={(e) => handleChange(e)}
			onBlur={() =>
				setInteracted((interactedObj) => ({
					...interactedObj,
					[$name]: true,
				}))
			}
			{...props}
		/>
	);
};
