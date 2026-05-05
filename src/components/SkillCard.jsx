export function SkillCard({ title, description, tags }) {
	return (
		<article className="skillCard">
			<div className="skillCardHeader">
				<div className="skillIcon" />
				<h3>{title}</h3>
			</div>
			<p>{description}</p>
			<div className="skillTags">
				{tags.map((tag) => (
					<span key={tag}>{tag}</span>
				))}
			</div>
		</article>
	);
}
