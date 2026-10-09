import { ChipList, GlassCard, SectionIntro } from "./UI";
import { CardHeader } from "./CardHeader";
import { revealDelay, useInView } from "../utils/animations";
import { projects } from "../data/portfolio";
import { externalLinkIcon, githubIcon } from "../data/icons";

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
						className="reveal reveal--item glassWrap"
						style={revealDelay(index, 0.35)}
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
											<a
												href={project.demoUrl}
												target="_blank"
												rel="noreferrer"
												aria-label={`${project.title} live demo`}
												title="Live demo"
											>
												<img className="icon" src={externalLinkIcon} alt="" />
											</a>
										) : null}
										{project.repoUrl ? (
											<a
												href={project.repoUrl}
												target="_blank"
												rel="noreferrer"
												aria-label={`${project.title} GitHub repository`}
												title="GitHub repository"
											>
												<img className="icon" src={githubIcon} alt="" />
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
