import Header from '../components/Header';
import DevListItem from '../components/DevListItem';

function Dev() {
  const data = [
    {
      id: 1,
      name: 'Herbiview',
      description:
        'Identify plants pictures uploaded by users using AI and learn from it.',
      url: 'http://herbiview.onrender.com',
      repository: 'https://github.com/pedroagont/herbiview',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 2,
      name: 'AI Tech Assessment',
      description:
        'Frontend role task using OpenAI for a job position in Shopify.',
      url: 'https://shopify-technical-assignment.vercel.app',
      repository: 'https://github.com/amyleblanc/shopify-technical-assignment',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 3,
      name: 'Pokemon Matching Game',
      description:
        'Awesome and simple matching card game using Pokemon characters.',
      url: 'https://norbjz.github.io/memorama-pokemon',
      repository: 'https://github.com/Norbjz/memorama-pokemon',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 4,
      name: 'Women Violencemeter',
      description:
        'Survey to evaluate violence during International Women Day.',
      url: 'https://mo0sh.github.io/violentometro',
      repository: 'https://github.com/mo0sh/violentometro',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 5,
      name: 'Studeecloud',
      description:
        'Collaborative dashboard that integrates a range of tools like pomodoro timer and video calls to stay on track.',
      url: 'https://studeecloud.onrender.com',
      repository: 'https://github.com/pedroagont/studeecloud',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 6,
      name: 'The Shoebox',
      description:
        'E-commerce website to browse through a collection of shoes where you can filter the search based on style, color and price.',
      url: 'https://shoe-box.netlify.app',
      repository: 'https://github.com/FarzanehSa/shoeBox-client',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 7,
      name: 'Raspberry Pi + Python + TouchOSC',
      description: 'Remote controlled robots to livestream video.',
      url: 'https://pedroagont.tumblr.com/post/137541587893#137541587893',
      repository: 'https://github.com/pedroagont/py-carosc',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 8,
      name: 'React + Giphy SDK',
      description: 'Gif searcher using the Giphy SDK and API.',
      url: 'https://react-cool-gifs.netlify.app',
      repository: 'https://github.com/pedroagont/react-cool-gifs',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 9,
      name: 'React + ThreeJS',
      description:
        'Experiment using 3d modeling and browser events with ThreeJS',
      url: 'https://react-three-js.netlify.app',
      repository: 'https://github.com/pedroagont/react-three-js',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 10,
      name: 'React + Bootstrap',
      description: 'Demo on using React with Bootstrap.',
      url: 'https://react-bootstrap-g7.netlify.app',
      repository:
        'https://github.com/pedroagont/master-code-g7/blob/master/05_Frontend/07_react-bootstrap',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 11,
      name: 'VanillaJS Avatar Maker',
      description: 'Create a fun avatar image and download it.',
      url: 'https://pedroagont.github.io/mochi-maker/',
      repository: 'https://github.com/pedroagont/mochi-maker',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 12,
      name: 'VanillaJS NASA Image Searcher',
      description: 'Search images on NASA archive using the NASA API.',
      url: 'https://pedroagont.github.io/steam-fair-conference-8apr',
      repository: 'https://github.com/pedroagont/steam-fair-conference-8apr',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 13,
      name: 'VanillaJS CSS Color Flicker',
      description: 'Select a range of CSS colors using this fun tool.',
      url: 'https://pedroagont.github.io/The-Flicker',
      repository: 'https://github.com/pedroagont/The-Flicker',
      image: 'https://picsum.photos/300/200',
    },
  ];

  return (
    <>
      <Header
        title="Dev"
        description="Software development, coding and engineering stuff"
      />
      <main className="container">
        <ul className="dev-list">
          {data.map((d) => (
            <DevListItem key={d.id} {...d} />
          ))}
        </ul>
      </main>
    </>
  );
}

export default Dev;
