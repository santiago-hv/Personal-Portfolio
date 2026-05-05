export function Header() {
	return (
		<header className="siteHeader">
			<a className="brand" href="#home" aria-label="Go to home">
				<span className="brandSymbol">&gt;_</span>
				<span className="brandMark">DevPortfolio</span>
			</a>
			<nav className="navLinks">
				<a href="#home" className="active">Home</a>
				<a href="#projects">Projects</a>
				<a href="#skills">Skills</a>
			</nav>
			<a className="button button--ghost headerAction" href="#contact">
				Contact
			</a>
		</header>
	);
}
