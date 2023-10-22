function ProjectsListItem({ name, description, url, image }) {
  return (
    <li className="projects-list-item">
      <img src={image} alt={image} />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <a href={url} target="_blank" rel="noreferrer">
          See more
        </a>
      </div>
    </li>
  );
}

export default ProjectsListItem;
