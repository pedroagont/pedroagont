import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import useDocumentMetaTags from '../hooks/useDocumentMetaTags';

function About({ data }) {
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
        <p className="about-content">{data.content}</p>
      </main>
    </>
  );
}

export default About;
