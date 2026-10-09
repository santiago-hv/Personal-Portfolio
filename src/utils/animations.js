import { useEffect, useRef, useState } from "preact/hooks";

const DELAY_CHILDREN = 0.2;
const STAGGER_CHILDREN = 0.15;

// Inline style that delays a .reveal element. `index` is its position among
// its staggered siblings, `base` is when their container starts.
export function revealDelay(index = 0, base = 0) {
	const delay = base + DELAY_CHILDREN + index * STAGGER_CHILDREN;
	return { "--reveal-delay": `${delay.toFixed(2)}s` };
}

// Reports whether the element is in view. With `once` it turns true the first
// time the element scrolls into view and stays true; without it, it follows
// the element on and off screen.
export function useInView({ rootMargin = "-100px", once = true } = {}) {
	const ref = useRef(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (once) {
					if (!entries.some((entry) => entry.isIntersecting)) return;
					setInView(true);
					observer.disconnect();
				} else {
					setInView(entries[entries.length - 1].isIntersecting);
				}
			},
			{ rootMargin },
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, [rootMargin, once]);

	return [ref, inView];
}
