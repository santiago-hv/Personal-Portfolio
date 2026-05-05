const projects = [
	{
		title: "Fintech Dashboard",
		description:
			"A modern dashboard for analytics and payment management with responsive charts and secure authentication.",
		tags: ["React", "Tailwind", "Node.js", "PostgreSQL"],
	},
	{
		title: "E-commerce Platform",
		description:
			"A full-stack storefront with product browsing, cart checkout, and order administration.",
		tags: ["Next.js", "Stripe", "MongoDB", "AWS"],
	},
	{
		title: "Portfolio CMS",
		description:
			"A content-driven portfolio system that simplifies content updates and project publishing.",
		tags: ["TypeScript", "GraphQL", "Prisma", "Vercel"],
	},
];

export function Projects() {
	return (
		<section id="projects" className="projectsSection">
			<div className="sectionHeading">
				<div>
					<p className="sectionLabel">Featured Work</p>
					<h2>Projects built with precision and polish.</h2>
				</div>
			</div>
			<div className="projectsGrid">
				{projects.map((project) => (
					<article key={project.title} className="projectCard">
						<div className="projectCardHeader">
							<span className="projectBadge">Project</span>
							<h3>{project.title}</h3>
						</div>
						<p>{project.description}</p>
						<div className="projectTags">
							{project.tags.map((tag) => (
								<span key={tag}>{tag}</span>
							))}
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
