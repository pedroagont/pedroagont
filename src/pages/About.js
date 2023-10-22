import Header from '../components/Header';
import useDocumentTitle from '../hooks/useDocumentTitle';

function About() {
  useDocumentTitle('Pedro A. González - About');

  return (
    <>
      <Header title="About" description="A little bit about me" />
      <main className="container">
        <p>
          Pedro A. González is a lifelong enthusiast of digital development and
          innovation with the mission of making technology accesible and
          impactful.
          <br /> <br />
          He is the co-founder of{' '}
          <a href="https://kaanbal.org" target="_blank" rel="noreferrer">
            Kaanbal.org
          </a>
          , a non profit organization focused on connecting remote communities
          with Internet access and tech-driven education.
          <br /> <br />
          His journey as an innovator and tech entrepreneur have contributed
          significantly to boost the knowledge-based ecosystem and bridge the
          digital divide, positively impacting the lives of thousands.
          <br /> <br />
          With a background in Mechatronics Engineering, a Master in Coding and
          a specialization in Entrepreneurship and Future Tech, Mr. González is
          a high end professional in the field of technology.
          <br /> <br />
          His passion on the topic has led him to participate as an
          international guest speaker, lecturer and presenter in dozens of
          events around Canada, United States, Mexico, Argentina, Germany and
          Japan, which features invitations from prestigious institutions such
          as Harvard, the MIT Media Lab and the United Nations.
          <br /> <br />
          Beyond his professional life, he loves playing chess, skydiving and to
          travel around the world as a digital nomad.
        </p>
      </main>
    </>
  );
}

export default About;
