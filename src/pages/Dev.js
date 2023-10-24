import Header from '../components/Header';
import DevListItem from '../components/DevListItem';
import useDocumentTitle from '../hooks/useDocumentTitle';

function Dev({ data }) {
  useDocumentTitle(data.title);

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
