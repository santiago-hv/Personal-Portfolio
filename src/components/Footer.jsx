import { githubIcon, linkedinIcon, gmailIcon, ubicationIcon, whatsappIcon } from "../data/icons";

export function Footer() {
	return (
		<footer className="siteFooter">
			<div>
				<strong>Santiago Huapalla Villegas</strong>
				<p id="ubication">
					<img id="location-icon" src={ubicationIcon} alt="Location" />
					Cochabamba, Bolivia
				</p>
				<p>© 2026 Visual portfolio. Built with React.</p>
			</div>
			<div className="footerLinks">
				<a
					className="footerLink"
					href="https://github.com/santiago-hv"
					target="_blank"
					rel="noreferrer"
				>
					<img className="footerIcons" src={githubIcon} alt="GitHub" />
					GitHub
				</a>
				<a
					className="footerLink"
					href="https://www.linkedin.com/in/santiago-huapalla-villegas/"
					target="_blank"
					rel="noreferrer"
				>
					<img className="footerIcons" src={linkedinIcon} alt="LinkedIn" />
					LinkedIn
				</a>
				<a className="footerLink" href="mailto:santiagoh0802@gmail.com">
					<img className="footerIcons" src={gmailIcon} alt="Email" />
					Email
				</a>
				<a className="footerLink" href="https://wa.me/59179342664" target="_blank" rel="noreferrer">
					<img className="footerIcons" src={whatsappIcon} alt="WhatsApp" />
					WhatsApp
				</a>
			</div>
		</footer>
	);
}
