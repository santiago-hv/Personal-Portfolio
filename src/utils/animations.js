import { useEffect, useRef, useState } from "preact/hooks";

const STAGGER_CHILDREN = 0.06;

// Inline style that delays a .reveal element by its position among its
// staggered siblings.
export function revealDelay(index = 0) {
	return { "--reveal-delay": `${(index * STAGGER_CHILDREN).toFixed(2)}s` };
}

// Turns true once the element scrolls into view, and stays true.
export function useInView(rootMargin = "-60px") {
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
