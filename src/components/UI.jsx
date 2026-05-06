import { motion } from "framer-motion";

export function GlassCard({ children, className = "", as: Tag = "article" }) {
	return <Tag className={`glassCard ${className}`.trim()}>{children}</Tag>;
}

export function ChipList({ items, className = "", }) {
	return (
		<div className={`chipList ${className}`.trim()}>
			{items.map((item) => (
				<span className="chip" key={item}>{item}</span>
			))}
		</div>
	);
}
export function IconList({ icons, className = "", tags}) {
	return (
		<div className={`iconList ${className}`.trim()}>
			{icons.map((icon, index) => (
				<div key={index} className="chipSkillIcon" data-tooltip={tags[index]}>
					<img src={icon} alt={`Skill Icon ${index}`} />
				</div>
			))}
		</div>
	);
}

const sectionVariants = {
	hidden: { opacity: 0, y: 80, scale: 0.95, filter: "blur(12px)" },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		filter: "blur(0px)",
		transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
	}
};

const titleVariants = {
	hidden: { opacity: 0, scale: 1.3, filter: "blur(8px)" },
	visible: {
		opacity: 1,
		scale: 1,
		filter: "blur(0px)",
		transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
	}
};

const staggerContainer = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.2
		}
	}
};

const itemVariants = {
	hidden: { opacity: 0, y: 60, scale: 0.9, filter: "blur(10px)" },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		filter: "blur(0px)",
		transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
	}
};

export function SectionIntro({ eyebrow, title, text }) {
	return (
		<motion.div className="sectionIntro" variants={sectionVariants}>
			<p className="eyebrow">{eyebrow}</p>
			<motion.h2 variants={titleVariants}>{title}</motion.h2>
			{text ? <p className="sectionText">{text}</p> : null}
		</motion.div>
	);
}

export { staggerContainer, itemVariants };
