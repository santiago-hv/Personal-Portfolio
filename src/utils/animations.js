import { useEffect, useRef, useState } from "react";

const DELAY_CHILDREN = 0.2;
const STAGGER_CHILDREN = 0.15;

// Inline style that delays a .reveal element. `index` is its position among
// its staggered siblings, `base` is when their container starts.
export function revealDelay(index = 0, base = 0) {
	const delay = base + DELAY_CHILDREN + index * STAGGER_CHILDREN;
	return { "--reveal-delay": `${delay.toFixed(2)}s` };
}

// Turns true once the element scrolls into view, and stays true.
export function useInView(rootMargin = "-100px") {
	const ref = useRef(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries.some((entry) => entry.isIntersecting)) {
					setInView(true);
					observer.disconnect();
				}
			},
			{ rootMargin },
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, [rootMargin]);

	return [ref, inView];
}
