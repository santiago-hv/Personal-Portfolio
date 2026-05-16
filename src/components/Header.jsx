import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { scrollToHashFromEvent } from "../utils/scrollTo";

export function Header() {
	const [activeSection, setActiveSection] = useState("home");
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const sections = document.querySelectorAll("section[id]");

		const handleScroll = () => {
			const scrollPosition = window.scrollY + 160;

			for (const section of sections) {
				const sectionTop = section.offsetTop;
				const sectionBottom = sectionTop + section.offsetHeight;

				if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
					const sectionId = section.id;

					setActiveSection((prevSection) =>
						prevSection !== sectionId ? sectionId : prevSection,
					);
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
		scrollToHashFromEvent(e);
		setIsMenuOpen(false);
	};

	const renderNavLinks = (className) => (
		<nav className={className}>
			<a href="#home" className={isActive("#home")} onClick={handleNavClick}>
				Home
			</a>
			<a href="#skills" className={isActive("#skills")} onClick={handleNavClick}>
				Skills
			</a>
			<a
				href="#projects"
				className={isActive("#projects")}
				onClick={handleNavClick}
			>
				Projects
			</a>

			<a
				className="button button--ghost mobileContactBtn"
				href="#contact"
				onClick={handleNavClick}
			>
				Contact Me
			</a>
		</nav>
	);

	const mobileMenu = isMenuOpen
		? createPortal(
			<>
				<div
					className="menuOverlay active"
					onClick={() => setIsMenuOpen(false)}
					aria-hidden="true"
				/>
				{renderNavLinks("navLinks navLinks--mobile navLinks--open")}
			</>,
			document.body,
		)
		: null;

	return (
		<>
			{mobileMenu}

			<header className="siteHeader">
				<a
					className="brand"
					href="#home"
					aria-label="Go to home"
					onClick={handleNavClick}
				>
					<span className="brandSymbol">&gt;_</span>
					<span className="brandMark">My portfolio</span>
				</a>

				<button
					className={`menuToggle ${isMenuOpen ? "active" : ""}`}
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					aria-label="Toggle menu"
					aria-expanded={isMenuOpen}
				>
					<span></span>
					<span></span>
					<span></span>
				</button>

				{renderNavLinks("navLinks navLinks--desktop")}

				<a
					className="button button--ghost headerAction"
					href="#contact"
					onClick={handleNavClick}
				>
					Contact Me
				</a>
			</header>
		</>
	);
}
