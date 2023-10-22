import Header from '../components/Header';

function Experience() {
  const data = [
    {
      id: 1,
      company: 'University of Guelph',
      position: 'Software Programming Instructor',
      location: 'Ontario, CA / Remote',
      fromTo: '2023 - Actual',
      url: 'https://www.uoguelph.ca',
    },
    {
      id: 2,
      company: 'Lighthouse Labs Inc',
      position:
        'Software Development Instructor, Mentor, Tech Interviewer, Project Evaluator',
      location: 'Vancouver, CA / Remote',
      fromTo: '2021 - Actual',
      url: 'https://www.lighthouselabs.ca',
    },
    {
      id: 3,
      company: 'DEV.F',
      position: 'Community Lead, Full Stack Development Instructor',
      location: 'Cancun, MX / Remote',
      fromTo: '2018 - 2021',
      url: 'https://new.devf.la/en',
    },
    {
      id: 4,
      company: 'Internet Society',
      position: 'Community Networks, Internet of Things Program Coordinator',
      location: 'Mexico City, MX / Remote',
      fromTo: '2017 - 2020',
      url: 'https://www.internetsociety.org',
    },
    {
      id: 5,
      company: 'Tech Garage Technology Park',
      position: 'Innovation Program Manager',
      location: 'Cancun, MX',
      fromTo: '2016 - 2018',
      url: 'https://www.facebook.com/techgaragemx',
    },
    {
      id: 6,
      company: 'Microsoft Innovation Center',
      position: 'Community Lead',
      location: 'Cancun, MX',
      fromTo: '2015 - 2016',
      url: 'https://www.microsoft.com/en-us/mtc',
    },
    {
      id: 7,
      company:
        'Mexican Chamber of Electronics, Telecommunications and Information Technologies (CANIETI)',
      position: 'Events Coordinator Internship',
      location: 'Cancun, MX',
      fromTo: '2015 - 2016',
      url: 'http://www.canieti.org/Inicio/English/englishcan/about.aspx',
    },
  ];

  return (
    <>
      <Header title="Experience" description="Professional background" />
      <main className="container">
        <ul className="experience-list">
          {data.map((e) => (
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
