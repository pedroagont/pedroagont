import Header from '../components/Header';
import ProjectsListItem from '../components/ProjectsListItem';

function Projects() {
  const data = [
    {
      id: 1,
      name: 'Kaanbal.org',
      description:
        'Nonprofit organization with the mission to connect remote communities with Internet access and tech-driven education.',
      url: 'https://kaanbal.org',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 2,
      name: 'Global Shapers Cancun Hub',
      description:
        'Youth empowerment initiative with the World Economic Foum to promote citizenship and social impact.',
      url: 'https://globalshaperscancun.org',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 3,
      name: 'Neonwave.mx',
      description:
        'Digital marketing agency delivering web development, branding and graphic design.',
      url: 'https://neonwave.mx',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 4,
      name: 'Turepa.mx',
      description:
        'Delivery people platform for your business at the tip of your fingers.',
      url: 'https://www.turepa.mx',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 5,
      name: 'Cerebro Digital',
      description:
        'Educational content to promote science and technology to a 4 million followers community',
      url: 'https://facebook.com/tucerebrodigital',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 6,
      name: 'Singulary.ai',
      description:
        'A singular AI platform to prompt questions, images, music, video and code.',
      url: 'https://singulary.ai',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 7,
      name: 'TicketFlyers.com',
      description:
        'Global search engine for purchasing flights, hotels, tours and car rentals.',
      url: 'https://ticketflyers.com',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 8,
      name: 'Bouncing Bob',
      description:
        'Simple tap game to stack endless hours of fun, available on Android and iOS',
      url: 'https://play.google.com/store/apps/details?id=com.game.bouncingbob.play',
      image: 'https://picsum.photos/300/200',
    },
  ];

  return (
    <>
      <Header title="Projects" description="Some projects I've worked around" />
      <main className="container">
        <ul className="projects-list">
          {data.map((p) => (
            <ProjectsListItem key={p.id} {...p} />
          ))}
        </ul>
      </main>
    </>
  );
}

export default Projects;
