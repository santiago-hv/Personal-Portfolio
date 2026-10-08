import { useEffect, useState } from "preact/hooks";
import "../styles/textType.css";

const prefersReducedMotion = () =>
	window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Types `text` out once. The untyped remainder is rendered invisibly so the
// element keeps its final size and nothing around it shifts while typing.
const TextType = ({
	text,
	as: Component = "div",
	typingSpeed = 50,
	className = "",
	cursorCharacter = "|",
}) => {
	const [typed, setTyped] = useState(() =>
		prefersReducedMotion() ? text.length : 0,
	);

	useEffect(() => {
		if (typed >= text.length) return;
		const timeout = setTimeout(() => setTyped(typed + 1), typingSpeed);
		return () => clearTimeout(timeout);
	}, [typed, text, typingSpeed]);

	return (
		<Component className={`text-type ${className}`.trim()} aria-label={text}>
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
