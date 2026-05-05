export function GlassCard({ children, className = "", as: Tag = "article" }) {
	return <Tag className={`glassCard ${className}`.trim()}>{children}</Tag>;
}

export function ChipList({ items, className = "" }) {
	return (
		<div className={`chipList ${className}`.trim()}>
			{items.map((item) => (
				<span className="chip" key={item}>
					{item}
				</span>
			))}
		</div>
	);
}

export function SectionIntro({ eyebrow, title, text }) {
	return (
		<div className="sectionIntro">
			<p className="eyebrow">{eyebrow}</p>
			<h2>{title}</h2>
			{text ? <p className="sectionText">{text}</p> : null}
		</div>
	);
}
