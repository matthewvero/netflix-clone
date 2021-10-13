/** @format */

import { useRef } from "react";

export function useThrottle(func, timeout) {
	const timer = useRef();

	return (...args) => {
		if (timer.current === undefined) {
			func.apply(this, args);

			timer.current = setTimeout(() => {
				func.apply(this, args);
				timer.current = undefined;
			}, timeout);
		}
	};
}

export const truncateText = (str, maxLength) => {
	if (str) {
		const trimmedString = str.substr(0, maxLength);

		return (
			trimmedString.substring(
				0,
				Math.min(
					trimmedString.length,
					trimmedString.lastIndexOf(".") + 1
				)
			) + ".."
		);
	}
};

export const minToHourConverter = (minutes) => {
	let str = "";
	const hours = Math.floor(minutes / 60);
	const mins = minutes % 60;
	if (hours > 0) {
		str += `${hours}h`;
	}
	if (mins > 0) {
		str += ` ${mins}m`;
	}
	return str;
};
