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
