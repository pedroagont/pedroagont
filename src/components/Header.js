function Header({ title, description, backgroundImg }) {
  return (
    <header
      className="header"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
}

export default Header;
