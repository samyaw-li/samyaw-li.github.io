import "./ProjectCard.css";

function ProjectCard({ title, image, description, languages, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card-link"
    >
      <div className="project-card">
        <img src={image} alt={title} className="project-image" />
        <div className="project-content">
          <h2 className="project-title">{title}</h2>
          <p className="project-description">{description}</p>
          <ul className="project-languages">
            {languages.map((lang, i) => (
              <li key={i}>{lang}</li>
            ))}
          </ul>
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
