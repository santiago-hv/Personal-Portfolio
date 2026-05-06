import { motion } from "framer-motion";
import profileImage from "../assets/20260415_155653.jpg";
import { githubIcon, linkedinIcon, downloadIcon,whatsappIcon } from "../data/icons";
import { GlassCard } from "./UI";
import { staggerContainer, itemVariants } from "../utils/animations";
import { scrollToHashFromEvent } from "../utils/scrollTo";

const heroVariants = {
	hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
	visible: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
	},
};

export function Hero() {
    const handleHeroClick = scrollToHashFromEvent;

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
							<a
								className="button button--primary"
								href="#contact"
								onClick={handleHeroClick}
							>
								Contact Me
							</a>
							<a
								className="button button--secondary"
								href="#projects"
								onClick={handleHeroClick}
							>
								View Projects
							</a>
							<a
								className="button button--secondary cvButton"
								href="public\CV_Santiago Vladimir Huapalla Villegas.pdf"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img className="icon" src={downloadIcon} alt="Download CV" />
								Download CV
							</a>
						</div>
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
                        <a href="https://github.com/santiago-hv" target="_blank" rel="noreferrer">
                            <img src={githubIcon} alt="GitHub" />
                        </a>
                        <a href="https://www.linkedin.com/in/santiago-huapalla-villegas/" target="_blank" rel="noreferrer">
                            <img src={linkedinIcon} alt="LinkedIn" />
                        </a>
						<a href="https://wa.me/59179342664" target="_blank" rel="noreferrer">
							<img src={whatsappIcon} alt="WhatsApp" />
						</a>
                    </div>
				</motion.div>
			</motion.div>
		</motion.section>
	);
}
