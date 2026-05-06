import { motion } from "framer-motion";
import { sectionVariants, titleVariants } from "../utils/animations";

export function GlassCard({ children, className = "", as: Tag = "article" }) {
    // Render a decorative orb element for shared styling. Keeping layout
    // and visuals identical while consolidating styles into ui.css.
    return (
        <Tag className={`glassCard ${className}`.trim()}>
            {children}
            <span aria-hidden className="accentOrb" />
        </Tag>
    );
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
export function IconList({ icons, className = "", tags }) {
    return (
        <div className={`iconList ${className}`.trim()}>
            {icons.map((icon, index) => (
                <div key={index} className="chipSkillIcon" data-tooltip={tags?.[index] ?? ""}>
                    <img src={icon} alt={tags?.[index] ?? `Skill Icon ${index}`} />
                </div>
            ))}
        </div>
    );
}


export function SectionIntro({ eyebrow, title, text }) {
    return (
        <motion.div className="sectionIntro" variants={sectionVariants}>
            <p className="eyebrow">{eyebrow}</p>
            <motion.h2 variants={titleVariants}>{title}</motion.h2>
            {text ? <p className="sectionText">{text}</p> : null}
        </motion.div>
    );
}
