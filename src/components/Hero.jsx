import profileImage from "../assets/20260415_155653.jpg";

export function Hero() {
	return (
		<section id="home" className="heroSection">
			<div className="heroGrid">
				<article className="heroCard heroCard--main glass-effect-strong">
					<span className="heroTag">FULLSTACK DEVELOPER</span>
					<h1>
						Hi, I'm <span>Santiago Villegas</span>
					</h1>
					<p>
						I'm a software developer specializing in building exceptional
						digital experiences. Currently, I'm focused on building responsive
						web applications.
					</p>
					<div className="heroActions">
						<button className="button button--primary">Contact</button>
						<button className="button button--secondary">View Projects</button>
					</div>
					<div className="heroTechs">
						<span>React</span>
						<span>Node.js</span>
						<span>TypeScript</span>
						<span>Next.js</span>
						<span>Tailwind CSS</span>
						<span>PostgreSQL</span>
					</div>
				</article>

				<article className="heroCard heroCard--profile ">
					<img
						className="personalImg"
						src={profileImage}
						alt="Santiago Villegas"
					/>
					<div className="profileStatus">
						<strong>Current Status:</strong>
						<span>Available for work</span>
					</div>
				</article>
			</div>
		</section>
	);
}
