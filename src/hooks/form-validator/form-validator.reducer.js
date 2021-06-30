/** @format */

export const stateTypes = {
	setInputs: "SET_INPUTS",
	setValues: "SET_VALUES",
	setPrevValues: "SET_PREV_VALUES",
	setErrors: "SET_ERRORS",
	setInteracted: "SET_INTERACTED",
	setValidated: "SET_VALIDATED",
};

export const reducer = (state, action) => {
	switch (action.type) {
		case stateTypes.setInputs:
			return {
				...state,
				inputs: {
					...state.inputs,
					...action.payload,
				},
			};
		case stateTypes.setValues:
			return {
				...state,
				values: {
					...state.values,
					...action.payload,
				},
			};
		case stateTypes.setPrevValues:
			return {
				...state,
				prevValues: {
					...state.values,
				},
			};
		case stateTypes.setErrors:
			return {
				...state,
				errors: {
					...state.errors,
					...action.payload,
				},
			};
		case stateTypes.setInteracted:
			return {
				...state,
				interacted: {
					...state.interacted,
					...action.payload,
				},
			};
		case stateTypes.setValidated:
			return {
				...state,
				validated: action.payload,
			};
		default:
			throw new Error();
	}
};
