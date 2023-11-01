import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import useDocumentMetaTags from '../hooks/useDocumentMetaTags';

function Experience({ data }) {
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
        <ul className="experience-list">
          {data.content.map((e) => (
            <li key={e.id} className="experience-list-item">
              <h3>
                {e.company}
                <div>
                  <span>{e.location}</span>
                  <span> | </span>
                  <span>{e.fromTo}</span>
                </div>
              </h3>
              <p>{e.position}</p>
              <a href={e.url} target="_blank" rel="noreferrer">
                See more
              </a>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default Experience;
