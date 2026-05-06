import { motion } from "framer-motion";
import { GlassCard, SectionIntro, IconList } from "./UI";
import { CardHeader } from "./CardHeader";
import { staggerContainer, itemVariants } from "../utils/animations";
import { skills } from "../data/portfolio";
export function Skills() {
	return (
		<motion.section
			id="skills"
			className="sectionBlock"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
			variants={staggerContainer}
		>
			<SectionIntro
				eyebrow="My Skills"
				title="Modern end-to-end development."
				text="A robust toolkit centered around the JavaScript ecosystem, bridging dynamic React interfaces with scalable Node.js foundations."
			/>
			<motion.div className="cardsGrid" variants={staggerContainer}>
				{skills.map((skill) => (
					<motion.div key={skill.title} variants={itemVariants}>
                        <GlassCard className="cardItem">
                            <CardHeader icon={skill.icon} title={skill.title} />
                            <p>{skill.description}</p>
                            <IconList icons={skill.icons} tags={skill.tags} />
                        </GlassCard>
					</motion.div>
				))}
			</motion.div>
		</motion.section>
	);
}
