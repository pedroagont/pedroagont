import Header from '../components/Header';
import useDocumentTitle from '../hooks/useDocumentTitle';

function Experience({ data }) {
  useDocumentTitle(data.title);

  return (
    <>
      <Header title={data.title} description={data.description} />
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
