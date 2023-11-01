import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import ProjectsListItem from '../components/ProjectsListItem';
import useDocumentMetaTags from '../hooks/useDocumentMetaTags';

function Projects({ data }) {
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
        <ul className="projects-list">
          {data.content.map((p) => (
            <ProjectsListItem key={p.id} {...p} />
          ))}
        </ul>
      </main>
    </>
  );
}

export default Projects;
