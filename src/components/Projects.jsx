import { motion } from "framer-motion";
import { ChipList, GlassCard, SectionIntro, staggerContainer, itemVariants } from "./UI";
import { projects } from "../data/portfolio";

export function Projects() {
	return (
		<motion.section
			id="projects"
			className="sectionBlock"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
			variants={staggerContainer}
		>
			<SectionIntro
				eyebrow="Featured Work"
				title="Projects presented as polished product showcases."
				text="For now the focus is visual: deep cards, clear hierarchy, and room to turn each case into a complete story later."
			/>
			<motion.div className="cardsGrid" variants={staggerContainer}>
				{projects.map((project, index) => (
					<motion.div key={project.title} variants={itemVariants}>
						<GlassCard className="cardItem">
							<div className="cardHeader">
								<span className="projectBadge">0{index + 1}</span>
								<h3>{project.title}</h3>
							</div>
							<p>{project.description}</p>
							<ChipList items={project.tags} />
						</GlassCard>
					</motion.div>
				))}
			</motion.div>
		</motion.section>
	);
}
