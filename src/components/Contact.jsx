import { GlassCard, SectionIntro } from "./UI";
import { contactLinks } from "../data/portfolio";

export function Contact() {
	return (
		<section id="contact" className="sectionBlock contactSection">
			<GlassCard className="contactCard" as="div">
				<div className="contactCopy">
					<SectionIntro
						eyebrow="Contact Menu"
						title="A simple entry point to start a conversation."
						text="Functionality will come later; for now this visual structure is ready to connect with email, socials, or a real form."
					/>
					<div className="contactLinks">
						{contactLinks.map((link) => (
							<a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
								<span>{link.label}</span>
								<strong>{link.value}</strong>
							</a>
						))}
					</div>
				</div>

				<form className="contactForm" aria-label="Visual contact form">
					<label>
						<span>Your name</span>
						<input type="text" placeholder="Who is writing" />
					</label>
					<label>
						<span>Email</span>
						<input type="email" placeholder="tu@email.com" />
					</label>
					<label>
						<span>Message</span>
						<textarea placeholder="Tell me what you want to build" rows="5" />
					</label>
					<a className="button button--primary" href="mailto:santiago.hv@email.com">
						Prepare Email
					</a>
				</form>
			</GlassCard>
		</section>
	);
}
