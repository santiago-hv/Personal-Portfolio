import { motion } from "framer-motion";
import profileImage from "../assets/20260415_155653.jpg";
import githubIcon from "../assets/svg/github.svg";
import linkedinIcon from "../assets/svg/icons8-linkedin.svg";
import downloadIcon from "../assets/svg/document-download-svgrepo-com.svg";
import { ChipList, GlassCard, staggerContainer, itemVariants } from "./UI";
import { techStack } from "../data/portfolio";

const heroVariants = {
	hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
	visible: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
	}
};

export function Hero() {
	return (
		<motion.section
			id="home"
			className="heroSection"
			initial="hidden"
			animate="visible"
			variants={heroVariants}
		>
			<div className="orb orb--one" />
			<div className="orb orb--two" />
			<motion.div className="heroGrid" variants={staggerContainer}>
				<motion.div variants={itemVariants}>
					<GlassCard className="heroCard heroCard--main">
						<span className="eyebrow">FULLSTACK DEVELOPER</span>
						<h1>
							{"< "}Hi, I'm <span>Santiago Villegas</span>
							{" />"}
						</h1>
						<p>
							Full-stack engineering student specializing in the modern
							JavaScript ecosystem. I combine a strong background in clean
							software architecture with tools like React and Node.js to craft
							highly responsive and maintainable web applications.
						</p>
						<div className="heroActions">
							<a className="button button--primary" href="#contact">
								Contact Me
							</a>
							<a className="button button--secondary" href="#projects">
								View Projects
							</a>
							<a className="button button--secondary cvButton" href="#projects">
								<img class="icon" src={downloadIcon} alt="Download CV" />
								Download CV
							</a>
						</div>
						<ChipList items={techStack} className="heroTechs" />
					</GlassCard>
				</motion.div>

				<motion.div variants={itemVariants}>
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
				</motion.div>
			</motion.div>
		</motion.section>
	);
}
