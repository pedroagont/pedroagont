const data = {
  navigationData: [
    {
      name: 'Home',
      pathname: '/',
    },
    {
      name: 'About',
      pathname: '/about',
    },
    {
      name: 'Experience',
      pathname: '/experience',
    },
    {
      name: 'Education',
      pathname: '/education',
    },
    {
      name: 'Projects',
      pathname: '/projects',
    },
    {
      name: 'Dev',
      pathname: '/dev',
    },
    {
      name: 'Contact',
      pathname: '/contact',
    },
  ],

  homeData: {
    title: 'Pedro A. González',
    description: [
      'Tech Entrepreneur',
      'Educator',
      'Software Developer',
      'Innovator',
      'Mechatronics Engineer',
      'Digital Nomad',
      'Skydiver',
    ],
    content:
      'Pedro A. González is a mexican engineer and multi-faceted individual with a track record of making technology accessible and impactful. His visionary leadership has brought positive change through innovation, education, and an unwavering passion for technology.',
  },

  aboutData: {
    title: 'About',
    description: 'A little bit about me',
    content: `Pedro A. González is a lifelong enthusiast of digital development and innovation with the mission of making technology accesible and impactful.\n
        He is the co-founder of Kaanbal.org, a non profit organization focused on connecting remote communities with Internet access and tech-driven education.\n
        His journey as an innovator and tech entrepreneur have contributed significantly to boost the knowledge-based ecosystem and bridge the digital divide, positively impacting the lives of thousands.\n
        With a background in Mechatronics Engineering, a Master in Coding and a specialization in Entrepreneurship and Future Tech, Mr. González is a high end professional in the field of technology.\n
        His passion on the topic has led him to participate as an international guest speaker, lecturer and presenter in dozens of events around Canada, United States, Mexico, Argentina, Germany and Japan, which features invitations from prestigious institutions such as Harvard, the MIT Media Lab and the United Nations.\n
        Beyond his professional life, he loves playing chess, skydiving and to travel around the world as a digital nomad.`,
  },

  experienceData: {
    title: 'Experience',
    description: 'Professional background',
    content: [
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
    ],
  },

  educationData: {
    title: 'Education',
    description: 'Academic timeline',
    content: [
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
    ],
  },

  projectsData: {
    title: 'Projects',
    description: "Some projects I've worked around",
    content: [
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
    ],
  },

  devData: {
    title: 'Dev',
    description: 'Software development, coding and engineering stuff',
    content: [
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
        repository:
          'https://github.com/amyleblanc/shopify-technical-assignment',
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
    ],
  },

  contactData: {
    title: 'Contact',
    description: "Let's collaborate",
    content:
      "For work, conferences, lectures, workshops, event invitation, media inquiries, or any kind of collaboration, I'll be happy to answer from the following channels:",
    links: [
      { name: 'pgonzalez@post.com', url: 'mailto:pgonzalez@post.com' },
      { name: 'Github', url: 'https://github.com/pedroagont' },
      { name: 'LinkedIn', url: 'https://linkedin.com/in/pedroagont' },
      { name: 'Twitter', url: 'https://twitter.com/pedroagont' },
      { name: 'Instagram', url: 'https://instagram.com/pedroagont' },
      { name: 'Facebook', url: 'https://facebook.com/pedroagont' },
      { name: 'Reddit', url: 'https://reddit.com/user/pedroagont' },
    ],
  },
};

export default data;
