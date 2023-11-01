import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import useDocumentMetaTags from '../hooks/useDocumentMetaTags';

function Contact({ data }) {
  const location = useLocation();
  useDocumentMetaTags(data.title, location.pathname);

  return (
    <>
      <Header
        title={data.title}
        description={data.description}
        backgroundImg={data.backgroundImg}
      />
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
