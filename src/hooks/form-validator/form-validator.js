/** @format */

import React, { useEffect, useReducer } from "react";
import { reducer, stateTypes } from "./form-validator.reducer";

function capitalise(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function emailRegex(input) {
	let regex =
		/^[a-z0-9!#%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
	return regex.test(input);
}

function customRegex(regex, input) {
	return regex.test(input);
}

export const useFormValidator = (initialValues) => {
	const initialState = {
		inputs: {},
		values: initialValues,
		errors: {},
		interacted: {},
		validated: false,
	};

	const setState = (type, payload, name) => {
		dispatch({
			type,
			name,
			payload,
		});
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		if (Object.keys(state.errors).length) {
			const isValidated = Object.keys(state.errors).reduce(
				(prev, cur) => {
					if (state.errors[cur].length === 0) {
						return (prev = true);
					} else {
						return (prev = false);
					}
				},
				0
			);
			setState(stateTypes.setValidated, isValidated);
		}
	}, [state.errors]);

	useEffect(() => {
		for (const key in state.values) {
			if (state.inputs[key] && state.values[key]) {
				// Check input has been interacted with
				let errorsArr = [];
				if (
					state.inputs[key].type === "email" &&
					!emailRegex(state.values[key])
				) {
					errorsArr.push("Please enter a valid email");
				}

				if (
					state.inputs[key].rules.regex &&
					!customRegex(
						state.inputs[key].rules.regex.str,
						state.values[key]
					)
				) {
					errorsArr.push(
						state.inputs[key].rules.regex.message
					);
				}

				if (
					state.inputs[key].rules.minLength &&
					state.values[key].length <
						state.inputs[key].rules.minLength
				) {
					errorsArr.push(
						`${capitalise(key)} must be more than ${
							state.inputs[key].rules.minLength
						}`
					);
				}

				if (
					state.inputs[key].rules.maxLength &&
					state.values[key].length >
						state.inputs[key].rules.maxLength
				) {
					errorsArr.push(
						`${capitalise(key)} must be less than ${
							state.inputs[key].maxLength
						}`
					);
				}
				setState(stateTypes.setErrors, { [key]: errorsArr });
			}
		}
	}, [state.inputs, state.values]);

	const handleSubmit = (event, fn) => {
		event.preventDefault();
		let newInteractedObj = {};
		for (const key in state.interacted) {
			newInteractedObj[key] = true;
		}
		setState(stateTypes.setInteracted, newInteractedObj);
	};

	const api = {
		state,
		setState,
		stateTypes,
		handleSubmit,
	};

	return {
		state,
		setState,
		stateTypes,
		handleSubmit,
		api,
	};
};

export const withValidation = (WrappedComponent, name, type, rules = {}) => {
	const ValidatedInput = ({ api, ...props }) => {
		const { state, setState, stateTypes } = api;

		useEffect(() => {
			if (!state.inputs[name]) {
				setState(stateTypes.setInputs, {
					[name]: {
						type,
						rules,
					},
				});
			}
			// eslint-disable-next-line
		}, []);

		const handleChange = (e) => {
			setState(stateTypes.setValues, { [name]: e.target.value });
		};
		return (
			<WrappedComponent
				name={name}
				type={type}
				value={state.values[name] || ""}
				className={`${
					state.values[name] &&
					state.values[name].length &&
					"populated"
				} ${
					state.errors[name] &&
					state.interacted[name] &&
					Object.keys(state.errors[name]).length &&
					"error"
				}`}
				onChange={(e) => handleChange(e)}
				onBlur={() =>
					setState(stateTypes.setInteracted, {
						[name]: true,
					})
				}
				{...props}
			/>
		);
	};
	return ValidatedInput;
};
