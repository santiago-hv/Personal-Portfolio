import { GlassCard, SectionIntro, IconList } from "./UI";
import { CardHeader } from "./CardHeader";
import { revealDelay, useInView } from "../utils/animations";
import { skills } from "../data/portfolio";
export function Skills() {
	const [sectionRef, inView] = useInView();

	return (
		<section
			ref={sectionRef}
			id="skills"
			className={`sectionBlock ${inView ? "is-visible" : ""}`.trim()}
		>
			<SectionIntro
				eyebrow="My Skills"
				title="Modern end-to-end development."
				text="A robust toolkit centered around the JavaScript ecosystem, bridging dynamic React interfaces with scalable Node.js foundations."
			/>
			<div className="cardsGrid">
				{skills.map((skill, index) => (
					<div
						key={skill.title}
						className="reveal"
						style={revealDelay(index + 1)}
					>
                        <GlassCard className="cardItem">
                            <CardHeader icon={skill.icon} title={skill.title} />
                            <p>{skill.description}</p>
                            <IconList icons={skill.icons} tags={skill.tags} />
                        </GlassCard>
					</div>
				))}
			</div>
		</section>
	);
}
