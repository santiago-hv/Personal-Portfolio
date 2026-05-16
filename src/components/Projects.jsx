import { motion } from "framer-motion";
import { ChipList, GlassCard, SectionIntro } from "./UI";
import { CardHeader } from "./CardHeader";
import { staggerContainer, itemVariants } from "../utils/animations";
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
				eyebrow="My Projects"
				title="Functional and scalable solutions."
				text="A selection of full-stack projects showcasing problem-solving, clean architecture, and intuitive user experiences."
			/>
			<motion.div className="cardsGrid" variants={staggerContainer}>
				{projects.map((project, index) => (
					<motion.div key={project.title} variants={itemVariants}>
						<GlassCard className={`cardItem ${project.image ? "projectCard" : ""}`}>
							{project.image ? (
								<a
									className="projectPreviewLink"
									href={project.demoUrl}
									target="_blank"
									rel="noreferrer"
									aria-label={`Open ${project.title} live demo`}
								>
									<img src={project.image} alt={`${project.title} preview`} />
								</a>
							) : null}
							<div className="projectContent">
								<CardHeader index={`0${index + 1}`} title={project.title} isProject />
								<p>{project.description}</p>
								<ChipList items={project.tags} />
								{project.demoUrl || project.repoUrl ? (
									<div className="projectLinks">
										{project.demoUrl ? (
											<a href={project.demoUrl} target="_blank" rel="noreferrer">
												Live Demo
											</a>
										) : null}
										{project.repoUrl ? (
											<a href={project.repoUrl} target="_blank" rel="noreferrer">
												GitHub Repo
											</a>
										) : null}
									</div>
								) : null}
							</div>
						</GlassCard>
					</motion.div>
				))}
			</motion.div>
		</motion.section>
	);
}
