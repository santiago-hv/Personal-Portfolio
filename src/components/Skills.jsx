import { motion } from "framer-motion";
import { ChipList, GlassCard, SectionIntro, staggerContainer, itemVariants } from "./UI";
import { skills } from "../data/portfolio";
import { IconList } from "./UI";
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
				eyebrow="Technical Skills"
				title="Skills organized as parts of a visual system."
				text="A compact stack for building complete products, from a clear interface to the technical foundation behind it."
			/>
			<motion.div className="cardsGrid" variants={staggerContainer}>
				{skills.map((skill) => (
					<motion.div key={skill.title} variants={itemVariants}>
						<GlassCard className="cardItem">
							<div className="cardHeader">
								<span className="cardIndex">
									<img className="skillIcon" src={skill.icon} alt={`${skill.title} Icon`} />
								</span>
								<div>
									<p className="cardKicker">Specialty</p>
									<h3>{skill.title}</h3>
								</div>
							</div>
							<p>{skill.description}</p>
							<IconList icons={skill.icons} tags={skill.tags} />
						</GlassCard>
					</motion.div>
				))}
			</motion.div>
		</motion.section>
	);
}
