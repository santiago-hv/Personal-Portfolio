import { useRef, useState } from "react";
import { GlassCard, SectionIntro } from "./UI";
import { revealDelay, useInView } from "../utils/animations";
import { contactLinks } from "../data/portfolio";
import { EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, EMAIL_PUBLIC_KEY } from "../config/email";

export function Contact() {
	const formRef = useRef();
	const [sectionRef, inView] = useInView();
	const [status, setStatus] = useState("idle");
	const [statusMessage, setStatusMessage] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("sending");
		setStatusMessage("");

		try {
            const { default: emailjs } = await import("@emailjs/browser");
            await emailjs.sendForm(
                EMAIL_SERVICE_ID,
                EMAIL_TEMPLATE_ID,
                formRef.current,
                EMAIL_PUBLIC_KEY,
            );
			setStatus("success");
			setStatusMessage("Message sent successfully! I'll get back to you soon.");
			formRef.current.reset();
		} catch {
			setStatus("error");
			setStatusMessage(
				"Failed to send message. Please try again or email me directly.",
			);
		}
	};
	return (
		<section
			ref={sectionRef}
			id="contact"
			className={`sectionBlock contactSection ${inView ? "is-visible" : ""}`.trim()}
		>
			<div
				className="reveal reveal--item glassWrap glassWrap--contact"
				style={revealDelay()}
			>
				<GlassCard className="contactCard" as="div">
					<div className="contactCopy">
						<SectionIntro
							eyebrow="Contact Menu"
							title="Let's connect."
							text="I'm currently open to new opportunities and full-time roles. Drop me a message to discuss how I can contribute to your team."
						/>
						<div className="contactLinks">
							{contactLinks.map((link) => (
								<a
									key={link.label}
									href={link.href}
									target={link.href.startsWith("http") ? "_blank" : undefined}
									rel="noreferrer"
								>
									<span>{link.label}</span>
									<strong>{link.value}</strong>
								</a>
							))}
						</div>
					</div>

					<form
						ref={formRef}
						className="contactForm"
						onSubmit={handleSubmit}
						aria-label="Contact form"
					>
						<label>
							<span>Your name</span>
							<input
								type="text"
								name="user_name"
								placeholder="Your name"
								required
							/>
						</label>
						<label>
							<span>Email</span>
							<input
								type="email"
								name="user_email"
								placeholder="your.email@example.com"
								required
							/>
						</label>
						<label>
							<span>Subject</span>
							<input
								type="text"
								name="subject"
								placeholder="Subject of your message"
								required
							/>
						</label>
						<label>
							<span>Message</span>
							<textarea
								name="message"
								rows={4}
								placeholder="Your message here..."
								required
							/>
						</label>
						<button
							className={`button button--primary ${status === "sending" ? "button--disabled" : ""}`}
							type="submit"
							disabled={status === "sending"}
						>
							{status === "sending" ? "Sending..." : "Send Message"}
						</button>
						{statusMessage && (
							<p className={`statusMessage statusMessage--${status}`}>
								{statusMessage}
							</p>
						)}
					</form>
				</GlassCard>
			</div>
		</section>
	);
}
