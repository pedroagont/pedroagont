import Header from '../components/Header';
import useDocumentTitle from '../hooks/useDocumentTitle';

function About({ data }) {
  useDocumentTitle(data.title);

  return (
    <>
      <Header title={data.title} description={data.description} />
      <main className="container">
        <p className="about-content">{data.content}</p>
      </main>
    </>
  );
}

export default About;
