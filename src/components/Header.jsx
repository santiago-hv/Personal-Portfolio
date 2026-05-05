import { useState, useEffect } from "react";

export function Header() {
	const [activeSection, setActiveSection] = useState("home");
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll("section[id]");
			const scrollPosition = window.scrollY + 100;

			for (const section of sections) {
				const sectionTop = section.offsetTop;
				const sectionBottom = sectionTop + section.offsetHeight;

				if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
					const sectionId = section.id;
					setActiveSection(sectionId);
					break;
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const isActive = (href) => {
		const sectionId = href.replace("#", "");
		return activeSection === sectionId ? "active" : "";
	};

	const handleNavClick = (e) => {
		const href = e.currentTarget.getAttribute("href");
		if (href.startsWith("#")) {
			e.preventDefault();
			const targetId = href.replace("#", "");
			const targetElement = document.getElementById(targetId);

			if (targetElement) {
				targetElement.style.transition = "box-shadow 0.3s ease";
				targetElement.style.boxShadow = "0 0 0 3px rgba(201, 166, 255, 0.3)";

				setTimeout(() => {
					targetElement.style.boxShadow = "none";
				}, 800);

				targetElement.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			}
		}
		setIsMenuOpen(false);
	};

	return (
		<header className="siteHeader">
			<a className="brand" href="#home" aria-label="Go to home" onClick={handleNavClick}>
				<span className="brandSymbol">&gt;_</span>
				<span className="brandMark">My portfolio</span>
			</a>
			<button className="menuToggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
				<span></span>
				<span></span>
				<span></span>
			</button>
			<nav className={`navLinks ${isMenuOpen ? "navLinks--open" : ""}`}>
				<a href="#home" className={isActive("#home")} onClick={handleNavClick}>Home</a>
				<a href="#skills" className={isActive("#skills")} onClick={handleNavClick}>Skills</a>
				<a href="#projects" className={isActive("#projects")} onClick={handleNavClick}>Projects</a>
			</nav>
			<a className="button button--ghost headerAction" href="#contact" onClick={handleNavClick}>
				Contact
			</a>
		</header>
	);
}
