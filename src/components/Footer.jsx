import githubIcon from "../assets/svg/github.svg";
import linkedinIcon from "../assets/svg/icons8-linkedin.svg";
import gmailIcon from "../assets/svg/gmail-svgrepo-com.svg";
export function Footer() {
	return (
		<footer className="siteFooter">
			<div>
				<strong>Santiago Huapalla Villegas</strong>
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
				<a  
					className="footerLink"
					href="mailto:santiago.hv@email.com">
					<img className="footerIcons" src={gmailIcon} alt="Email" />
					Email
				</a>
			</div>
		</footer>
	);
}
