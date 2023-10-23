import Header from '../components/Header';
import useDocumentTitle from '../hooks/useDocumentTitle';

function Contact({ data }) {
  useDocumentTitle(data.title);

  return (
    <>
      <Header title={data.title} description={data.description} />
      <main className="container">
        <p>{data.content}</p>
        <ul className="contact-links-list">
          {data.links.map((link) => (
            <li key={link.name}>
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default Contact;
