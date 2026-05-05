import { ChipList, GlassCard, SectionIntro } from "./UI";
import { skills } from "../data/portfolio";

export function Skills() {
	return (
		<section id="skills" className="sectionBlock skillsSection">
			<SectionIntro
				eyebrow="Technical Arsenal"
				title="Skills organized as parts of a visual system."
				text="A compact stack for building complete products, from a clear interface to the technical foundation behind it."
			/>
			<div className="skillsGrid">
				{skills.map((skill) => (
					<GlassCard className="skillCard" key={skill.title}>
						<div className="skillCardHeader">
							<span className="cardIndex">{skill.index}</span>
							<div>
								<p className="cardKicker">Specialty</p>
								<h3>{skill.title}</h3>
							</div>
						</div>
						<p>{skill.description}</p>
						<ChipList items={skill.tags} />
					</GlassCard>
				))}
			</div>
		</section>
	);
}
