import profileImage from "../assets/20260415_155653.jpg";
import githubIcon from "../assets/svg/github.svg";
import linkedinIcon from "../assets/svg/icons8-linkedin.svg";
import { ChipList, GlassCard } from "./UI";
import { techStack } from "../data/portfolio";

export function Hero() {
	return (
		<section id="home" className="heroSection">
			<div className="orb orb--one" />
			<div className="orb orb--two" />
			<div className="heroGrid">
				<GlassCard className="heroCard heroCard--main">
					<span className="eyebrow">FULLSTACK DEVELOPER</span>
					<h1>
						{"< "}Hi, I'm <span>Santiago Villegas</span>
						{" />"}
					</h1>
					<p>
						Crafting robust and scalable fullstack solutions with modern
						technologies. Bridging the gap between elegant design and
						high-performance engineering.
					</p>
					<div className="heroActions">
						<a className="button button--primary" href="#contact">
							Contact Me
						</a>
						<a className="button button--secondary" href="#projects">
							View Projects
						</a>
					</div>
					<ChipList items={techStack} className="heroTechs" />
				</GlassCard>

				<GlassCard className="heroCard heroCard--profile">
					<img
						className="personalImg"
						src={profileImage}
						alt="Santiago Villegas"
					/>
					<div className="profileStatus">
						<span className="statusDot" />
						<div>
							<strong>Status:</strong>
							<span>Available for work</span>
						</div>
					</div>
					<div className="socialDock" aria-label="Social links">
						<a
							href="https://github.com/santiago-hv"
							target="_blank"
							rel="noreferrer"
						>
							<img src={githubIcon} alt="GitHub" />
						</a>
						<a
							href="https://www.linkedin.com/in/santiago-huapalla-villegas/"
							target="_blank"
							rel="noreferrer"
						>
							<img src={linkedinIcon} alt="LinkedIn" />
						</a>
					</div>
				</GlassCard>
			</div>
		</section>
	);
}
