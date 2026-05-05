import { motion } from "framer-motion";
import { GlassCard, SectionIntro, staggerContainer, itemVariants } from "./UI";
import { contactLinks } from "../data/portfolio";

export function Contact() {
	return (
		<motion.section
			id="contact"
			className="sectionBlock contactSection"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
			variants={staggerContainer}
		>
			<motion.div variants={itemVariants}>
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
							<input type="email" placeholder="Where to reply" />
						</label>
						<label>
							<span>Message</span>
							<textarea rows={4} placeholder="What is this about" />
						</label>
						<button className="button button--primary" type="button">Send Message</button>
					</form>
				</GlassCard>
			</motion.div>
		</motion.section>
	);
}
