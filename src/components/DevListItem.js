function DevListItem({ name, description, url, repository, image }) {
  return (
    <li className="dev-list-item">
      <img src={image} alt={image} />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <span className="dev-list-item-links">
          <a href={url} target="_blank" rel="noreferrer">
            Link
          </a>
          <a href={repository} target="_blank" rel="noreferrer">
            Repository
          </a>
        </span>
      </div>
    </li>
  );
}

export default DevListItem;
