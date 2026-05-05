import { ChipList, GlassCard, SectionIntro } from "./UI";
import { projects } from "../data/portfolio";

export function Projects() {
	return (
		<section id="projects" className="sectionBlock projectsSection">
			<SectionIntro
				eyebrow="Featured Work"
				title="Projects presented as polished product showcases."
				text="For now the focus is visual: deep cards, clear hierarchy, and room to turn each case into a complete story later."
			/>
			<div className="projectsGrid">
				{projects.map((project, index) => (
					<GlassCard key={project.title} className="projectCard">
						<div className="projectCardHeader">
							<span className="projectBadge">0{index + 1}</span>
							<h3>{project.title}</h3>
						</div>
						<p>{project.description}</p>
						<ChipList items={project.tags} />
					</GlassCard>
				))}
			</div>
		</section>
	);
}
