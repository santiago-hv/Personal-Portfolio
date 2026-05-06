export function CardHeader({ index, icon, title, isProject }) {
  return (
    <div className="cardHeader">
      {isProject ? (
        <span className="projectBadge">{index}</span>
      ) : (
        <span className="cardIndex">
          {icon ? <img className="skillIcon" src={icon} alt={`${title} Icon`} /> : null}
        </span>
      )}
      <div>
        {!isProject && <p className="cardKicker">Specialty</p>}
        <h3>{title}</h3>
      </div>
    </div>
  );
}
