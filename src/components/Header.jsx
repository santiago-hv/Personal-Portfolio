export function Header() {
	return (
		<header className="siteHeader">
			<div className="brand">
				<span className="brandMark">DevPortfolio</span>
			</div>
			<nav className="navLinks">
				<a href="#home" className="active">
					Home
				</a>
				<a href="#projects">Projects</a>
				<a href="#skills">Skills</a>
				<a href="#contact">Contact</a>
			</nav>
			<button className="button button--ghost">Contact</button>
		</header>
	);
}
