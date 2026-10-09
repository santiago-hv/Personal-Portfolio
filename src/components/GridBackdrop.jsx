import { useEffect, useRef } from "preact/hooks";

// Must match the background-size of .gridBackdrop.
const CELL = 34;
const STEP_MS = 400;

// The faint grid behind the page, drifting down and to the right. It moves one
// whole pixel at a time on a timer: at 2.5px a second that is all a screen
// can show anyway, and it lets the browser keep the masked grid as a single
// static layer that is repainted a couple of times a second, instead of
// compositing a moving, masked, full-screen layer on every frame.
export function GridBackdrop() {
	const ref = useRef(null);

	useEffect(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		let step = 0;
		const interval = setInterval(() => {
			step = (step + 1) % (CELL * 2);
			ref.current.style.backgroundPosition = `${step >> 1}px ${step}px`;
		}, STEP_MS);

		return () => clearInterval(interval);
	}, []);

	return <div ref={ref} className="gridBackdrop" aria-hidden="true" />;
}
