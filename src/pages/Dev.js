import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import DevListItem from '../components/DevListItem';
import useDocumentMetaTags from '../hooks/useDocumentMetaTags';

function Dev({ data }) {
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
        <ul className="dev-list">
          {data.content.map((d) => (
            <DevListItem key={d.id} {...d} />
          ))}
        </ul>
      </main>
    </>
  );
}

export default Dev;
