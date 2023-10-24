import Header from '../components/Header';
import ProjectsListItem from '../components/ProjectsListItem';
import useDocumentTitle from '../hooks/useDocumentTitle';

function Projects({ data }) {
  useDocumentTitle(data.title);

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
