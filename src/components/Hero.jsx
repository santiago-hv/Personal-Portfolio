import profileImage from "../assets/profile.webp";
import { githubIcon, linkedinIcon, downloadIcon,whatsappIcon } from "../data/icons";
import { GlassCard } from "./UI";
import { revealDelay } from "../utils/animations";
import { scrollToHashFromEvent } from "../utils/scrollTo";
import TextType from "./TextType";

const cvUrl = `${import.meta.env.BASE_URL}CV_Santiago_Huapalla_Villegas.pdf`;

export function Hero() {
    const handleHeroClick = scrollToHashFromEvent;

	return (
		<section id="home" className="heroSection is-visible">
			<div className="orb orb--one" />
			<div className="orb orb--two" />
			<div className="heroGrid">
				<div className="reveal reveal--item glassWrap" style={revealDelay(0)}>
					<GlassCard className="heroCard heroCard--main">
						<span className="eyebrow">FULLSTACK DEVELOPER</span>
						<TextType
							text="< Hi, I'm Santiago Villegas />"
							as="h1"
							typingSpeed={50}
							pauseDuration={5000}
							deletingSpeed={40}
						/>
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
								href={cvUrl}
								download="CV_Santiago_Huapalla_Villegas.pdf"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img className="icon" src={downloadIcon} alt="Download CV" />
								Download CV
							</a>
						</div>
					</GlassCard>
				</div>

				<div className="reveal reveal--item heroProfile" style={revealDelay(1)}>
					<img
						className="personalImg"
						src={profileImage}
						alt="Santiago Villegas"
						width={709}
						height={945}
						fetchpriority="high"
						decoding="async"
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
						<a
							href="https://wa.me/59179342664"
							target="_blank"
							rel="noreferrer"
						>
							<img src={whatsappIcon} alt="WhatsApp" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
