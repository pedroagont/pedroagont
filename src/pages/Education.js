import Header from '../components/Header';
import useDocumentTitle from '../hooks/useDocumentTitle';

function Education() {
  useDocumentTitle('Pedro A. González - Education');

  const data = [
    {
      id: 1,
      institution: 'MIRAI Innovation',
      achievement:
        'Emergent Future Technologies Certificate (Neurotech, Biomedics, IoT, Data Science, AI/ML, AR/VR)',
      location: 'Osaka, JP',
      fromTo: '2023',
      url: 'https://www.mirai-innovation-lab.com',
    },
    {
      id: 2,
      institution: 'DEV.F',
      achievement:
        'Master in Coding (Fullstack Development Javascript, Git, React, Express, MongoDB, Postgresql)',
      location: 'Mexico City, MX',
      fromTo: '2018 - 2019',
      url: 'https://new.devf.la/en',
    },
    {
      id: 3,
      institution: 'TecniA Technology Park',
      achievement:
        'High Impact Entrepreneurship Certificate (Startup ecosystem, Agile methodology, Intellectual Property)',
      location: 'Merida, MX',
      fromTo: '2015 - 2016',
      url: 'https://merida.anahuac.mx/tecnia',
    },
    {
      id: 4,
      institution: 'National Technological Institute of Mexico',
      achievement:
        'B.S. in Mechatronics Engineering (Mechanics, Electronics, Software, Control Engineering)',
      location: 'Cancun, MX',
      fromTo: '2011 - 2016',
      url: 'https://www.cancun.tecnm.mx',
    },
  ];

  return (
    <>
      <Header title="Education" description="Academic timeline" />
      <main className="container">
        <ul className="education-list">
          {data.map((e) => (
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
