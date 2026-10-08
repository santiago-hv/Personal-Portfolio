import { ChipList, GlassCard, SectionIntro } from "./UI";
import { CardHeader } from "./CardHeader";
import { revealDelay, useInView } from "../utils/animations";
import { projects } from "../data/portfolio";

export function Projects() {
	const [sectionRef, inView] = useInView();

	return (
		<section
			ref={sectionRef}
			id="projects"
			className={`sectionBlock ${inView ? "is-visible" : ""}`.trim()}
		>
			<SectionIntro
				eyebrow="My Projects"
				title="Functional and scalable solutions."
				text="A selection of full-stack projects showcasing problem-solving, clean architecture, and intuitive user experiences."
			/>
			<div className="cardsGrid">
				{projects.map((project, index) => (
					<div
						key={project.title}
						className="reveal"
						style={revealDelay(index + 1)}
					>
						<GlassCard className={`cardItem ${project.image ? "projectCard" : ""}`}>
							{project.image ? (
								<a
									className="projectPreviewLink"
									href={project.demoUrl}
									target="_blank"
									rel="noreferrer"
									aria-label={`Open ${project.title} live demo`}
								>
									<img
										src={project.image}
										alt={`${project.title} preview`}
										width={project.imageWidth}
										height={project.imageHeight}
										loading="lazy"
										decoding="async"
									/>
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
					</div>
				))}
			</div>
		</section>
	);
}
