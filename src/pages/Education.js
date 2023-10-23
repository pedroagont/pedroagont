import Header from '../components/Header';
import useDocumentTitle from '../hooks/useDocumentTitle';

function Education({ data }) {
  useDocumentTitle(data.title);

  return (
    <>
      <Header title={data.title} description={data.description} />
      <main className="container">
        <ul className="education-list">
          {data.content.map((e) => (
            <li key={e.id} className="education-list-item">
              <h3>
                {e.institution}
                <div>
                  <span>{e.location}</span>
                  <span> | </span>
                  <span>{e.fromTo}</span>
                </div>
              </h3>
              <p>{e.achievement}</p>
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

export default Education;
