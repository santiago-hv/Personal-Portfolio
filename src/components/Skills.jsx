import { SkillCard } from "./SkillCard";

const skillData = [
	{
		title: "Frontend",
		description:
			"Building responsive, accessible, and performant user interfaces with modern JavaScript frameworks.",
		tags: [
			"React",
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"Framer Motion",
			"Zustand",
		],
	},
	{
		title: "Backend",
		description:
			"Architecting secure, scalable APIs and managing complex database interactions.",
		tags: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL", "Redis"],
	},
	{
		title: "Tools",
		description:
			"Streamlining development workflows and ensuring reliable deployment pipelines.",
		tags: ["Git", "Docker", "AWS", "Vercel", "Figma", "Jest"],
	},
];

export function Skills() {
	return (
		<section id="skills" className="skillsSection">
			<div className="sectionHeader">
				<div>
					<p className="sectionLabel">Technical Arsenal</p>
					<h2>Crafting digital experiences requires the right tools.</h2>
				</div>
			</div>
			<p className="sectionText">
				My tech stack is a curated selection of modern, scalable, and efficient
				technologies, allowing me to build robust fullstack applications from
				architecture to deployment.
			</p>
			<div className="skillsGrid">
				{skillData.map((skill) => (
					<SkillCard
						key={skill.title}
						title={skill.title}
						description={skill.description}
						tags={skill.tags}
					/>
				))}
			</div>
		</section>
	);
}
