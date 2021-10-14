/** @format */

import React, { useEffect, useReducer } from "react";
import styled from "styled-components";
import { reducer, stateTypes } from "./form-validator.reducer";

function capitalise(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function emailRegex(input, value) {
	let regex =
		/^[a-z0-9!#%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
	if (input.type === "email" && !regex.test(value)) {
		return "Please enter a valid email";
	}
}

function customRegex(input, value) {
	if (input.rules.regex && !input.rules.regex.test(value)) {
		return input.rules.regex.message;
	}
}

function minLength(input, value) {
	if (
		input.rules.minLength &&
		value.length < input.rules.minLength &&
		value.length !== 0
	) {
		return `${capitalise(input.type)} must be more than ${
			input.rules.minLength
		}`;
	}
}

function maxLength(input, value) {
	if (input.rules.maxLength && value.length > input.rules.maxLength) {
		return `${capitalise(input.type)} must be less than ${
			input.rules.maxLength
		}`;
	}
}

function required(input, value) {
	if (input.rules.required === true && value.length === 0) {
		return "This field is required.";
	}
}

export const useFormValidator = (initialValues) => {
	const initialState = {
		inputs: {},
		values: initialValues || {},
		errors: {},
		interacted: {},
		validated: false,
	};

	// Syntactical sugar
	const setState = (type, payload, name) => {
		dispatch({
			type,
			name,
			payload,
		});
	};

	// Initiate reducer / state
	const [state, dispatch] = useReducer(reducer, initialState);

	// Ensure all inputs have initial values so that validation can begin immediately
	useEffect(() => {
		const initialValues = Object.keys(state.inputs).reduce(
			(prev, cur) => {
				if (!state.values[cur]) {
					return { ...prev, [cur]: "" };
				}
				return prev;
			},
			{}
		);
		setState(stateTypes.setValues, initialValues);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.inputs]);

	// Set validation state
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

	// On change check values against rules
	// Update errors for each input accordingly

	useEffect(() => {
		const standardChecks = [
			emailRegex,
			customRegex,
			minLength,
			maxLength,
			required,
		];
		// Check new values against array of standard checks
		// Do not check values that have not changed
		for (const key in state.values) {
			if (state.inputs[key]) {
				const errorsArr = standardChecks.reduce((acc, next) => {
					const errMessage = next(
						state.inputs[key],
						state.values[key]
					);

					if (errMessage) {
						return [...acc, errMessage];
					}
					return acc;
				}, []);

				setState(stateTypes.setErrors, { [key]: errorsArr });
			}
		}
	}, [state.inputs, state.values]);

	const handleSubmit = (event, fn) => {
		event.preventDefault();

		// Highlight any validation errors
		const newInteractedObj = Object.keys(state.inputs).reduce(
			(prev, key) => {
				return { ...prev, [key]: true };
			},
			{}
		);
		setState(stateTypes.setInteracted, newInteractedObj);

		if (state.validated && fn) {
			fn();
		}
	};

	return {
		state,
		setState,
		stateTypes,
		handleSubmit,
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

		const handleBlur = () =>
			setState(stateTypes.setInteracted, {
				[name]: true,
			});

		return (
			<WrappedComponent
				name={name}
				type={type}
				value={state.values[name] || ""}
				className={`${
					state.values[name]?.length && "populated"
				} ${
					state.errors[name] &&
					state.interacted[name] &&
					Object.keys(state.errors[name]).length &&
					"error"
				}
				${
					state.interacted[name] &&
					state.errors[name] &&
					Object.keys(state.errors[name]).length === 0 &&
					"validated"
				}`}
				onChange={(e) => handleChange(e)}
				onBlur={handleBlur}
				{...props}
			/>
		);
	};
	return ValidatedInput;
};
