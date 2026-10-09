import { useEffect, useState } from "preact/hooks";
import { useInView } from "../utils/animations";
import "../styles/textType.css";

const prefersReducedMotion = () =>
	window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Types `text` out, holds it, deletes it and starts over. The untyped
// remainder is rendered invisibly and the cursor sits out of flow, so the
// element keeps its final size and line breaks and nothing around it shifts
// while typing. The loop is suspended while the element is off screen.
const TextType = ({
	text,
	as: Component = "div",
	typingSpeed = 50,
	pauseDuration = 2000,
	deletingSpeed = 30,
	loop = true,
	className = "",
	cursorCharacter = "|",
}) => {
	const [isStatic] = useState(prefersReducedMotion);
	const [typed, setTyped] = useState(isStatic ? text.length : 0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [ref, onScreen] = useInView({ rootMargin: "0px", once: false });

	useEffect(() => {
		if (isStatic || !onScreen) return;

		let delay;
		let step;
		if (isDeleting) {
			delay = typed > 0 ? deletingSpeed : 0;
			step = () => (typed > 0 ? setTyped(typed - 1) : setIsDeleting(false));
		} else if (typed < text.length) {
			delay = typingSpeed;
			step = () => setTyped(typed + 1);
		} else {
			if (!loop) return;
			delay = pauseDuration;
			step = () => setIsDeleting(true);
		}

		const timeout = setTimeout(step, delay);
		return () => clearTimeout(timeout);
	}, [
		typed,
		isDeleting,
		isStatic,
		onScreen,
		text,
		typingSpeed,
		pauseDuration,
		deletingSpeed,
		loop,
	]);

	return (
		<Component
			ref={ref}
			className={`text-type ${className}`.trim()}
			aria-label={text}
		>
			<span className="text-type__content" aria-hidden="true">
				{text.slice(0, typed)}
			</span>
			<span className="text-type__cursor" aria-hidden="true">
				{cursorCharacter}
			</span>
			<span className="text-type__rest" aria-hidden="true">
				{text.slice(typed)}
			</span>
		</Component>
	);
};

export default TextType;
