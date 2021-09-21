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
