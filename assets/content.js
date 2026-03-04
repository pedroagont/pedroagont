const projects = {
  en: {
    title: "Related",
    projectsByQuestion: [
      // Question 1: What drives your work in technology?
      [
        {
          name: "Lighthouse Labs Inc",
          description:
            "Full-Stack Development Mentor, Instructor, and Technical Interviewer (2021–2025), delivered 5,000+ hours of training professionals in Canada through full-stack PERN (Node.js, Express, PostgreSQL, ReactJS) and Ruby on Rails software AI-powered bootcamps, with real-world projects, mentoring, code reviews and 1:1 sessions.",
          icon: "💡",
          imgUrl: "/assets/img/lhl.jpg",
          link: "https://enterprise.lighthouselabs.ca",
        },
        {
          name: "DEVF",
          description:
            "Full-Stack Development Instructor, Community Lead and Content Creator (2019–2021), trained more than 120 professionals into MERN (Node.js, Express, NoSQL MongoDB, ReactJS) technologies, led 25+ hackathons and tech activities, creating educational content, live social media activities and supporting the growth of developer communities across Latin America.",
          icon: "🧑‍🏫",
          imgUrl: "/assets/img/devf.jpg",
          link: "http://devf.la",
        },
        {
          name: "Tech Garage Innovation Park",
          description:
            "Experience Manager (2016–2018) at Cancún’s first Technology & Innovation Park, leading the coworking community, promoting full-stack technologies, organizing 150+ events for over 3,000 participants, mentoring startups, and helping boost the regional innovation ecosystem.",
          icon: "🚀",
          imgUrl: "/assets/img/techgarage.jpg",
          link: "https://www.facebook.com/techgaragemx",
        },
        {
          name: "Microsoft Innovation Center",
          description:
            "Community Lead Cancún (2015–2016), organizing technology programs, workshops, and events to foster local innovation, entrepreneurship, and digital skills development.",
          icon: "🪟",
          imgUrl: "/assets/img/mic.jpg",
          link: "https://www.microsoft.com/en-us/hub",
        },
        {
          name: "Internet Society",
          description:
            "Mexico Chapter Representative and Internet Of Things Program Coordinator (2018), contributing to national and international initiatives focused on internet governance, connectivity, and emerging technologies.",
          icon: "🌐",
          imgUrl: "/assets/img/iot.jpg",
          link: "https://www.internetsociety.org",
        },
        {
          name: "Cerebro Digital",
          description:
            "Community Lead and Content Creator (2015–2019), producing educational content, live event coverage and organizing activities focused on digital literacy, science, technology, and creative learning.",
          icon: "🧠",
          imgUrl: "/assets/img/cerebrodigital.png",
          link: "https://facebook.com/tucerebrodigital",
        },
        {
          name: "University of Guelph",
          description:
            "Full-Stack Web Development Instructor and Project Evaluator, teaching PERN and Ruby on Rails stacks while assessing student projects in an academic environment.",
          icon: "🎓",
          imgUrl: "/assets/img/uog.jpg",
          link: "http://uoguelph.ca",
        },
      ],

      // Question 2: Tell me about a project you're most proud of
      [
        {
          name: "IoT Mobile Robot with DJI Osmo",
          description:
            "IoT-enabled mobile robotics project built with Raspberry Pi and Python, showcased at the United Nations Science, Technology and Innovation Forum 2018 to demonstrate real-time robotics and media capture.",
          icon: "🤖",
          imgUrl: "/assets/img/iotrobot.jpg",
          link: "https://youtu.be/TT2myChMV28",
        },
        {
          name: "Raspberry Pi Robot Controlled via OSC",
          description:
            "Interactive mobile robot developed with Raspberry Pi and Python, featuring real-time remote control through OSC and TouchOSC, designed for live event coverage and audience engagement.",
          icon: "🤖",
          imgUrl: "/assets/img/rpi.jpg",
          link: "https://pedroagont.tumblr.com/post/137541587893#137541587893",
        },
        {
          name: "Arduino Robot Controlled with p5",
          description:
            "Mobile robotics project using Arduino and C, controlled in real time through a p5 interface, exploring human–machine interaction and remote physical computing.",
          icon: "🤖",
          imgUrl: "/assets/img/arduino.jpg",
          link: "https://youtu.be/LvywwB-Fqxk",
        },

        {
          name: "Cloud Database for Future Skills Transfer",
          description:
            "Research-driven system for capturing and synchronizing motion, muscle, and brainwave signals using sensors and ESP32 microcontrollers with custom embedded firmware; notch filters, feature extraction and ML classifiers were synchronized through a JWT Node.js backend with Socket.IO and OpenAI; for then to be fetched, visualized and interacted through a React-based Progressive Web App interface deployed in the cloud.",
          icon: "🧠",
          imgUrl: "/assets/img/mirai.png",
          link: "https://www.youtube.com/watch?v=OIXP0Al67ME",
        },
        {
          name: "Cancun Beach 3D Multiplayer Simulator",
          description:
            "Real-time 3D multiplayer environment built with Three.js, Node.js, and Socket.IO, integrated with OpenAI-powered interactions to explore social presence and shared virtual spaces.",
          icon: "🌴",
          imgUrl: "/assets/img/cancun-simulator.png",
          link: "https://cancun-beach-simulator.onrender.com",
        },
        {
          name: "Skydive Collector",
          description:
            "Motion-controlled 3D game using Three.js and the Device Orientation API, translating physical movement into in-game mechanics for an embodied interactive experience.",
          icon: "🪂",
          imgUrl: "/assets/img/skydive-collector.jpg",
          link: "https://skydive-collector.onrender.com",
        },
        {
          name: "Hand Rush",
          description:
            "Gesture-based 3D game built with Three.js and ml5.js Hand Pose, using computer vision to enable real-time hand tracking and intuitive, touchless interaction.",
          icon: "✋",
          imgUrl: "/assets/img/hand-rush.png",
          link: "https://hand-rush-3d-game.onrender.com",
        },
        {
          name: "d3stinations",
          description:
            "Interactive 3D globe travel booking platform, built with Three.js, geolocation and the Travelpayouts API, visualizing global destinations and spatial data through an immersive, exploratory interface that generates income.",
          icon: "🌍",
          imgUrl: "/assets/img/d3stinations.png",
          link: "https://d3stinations.world",
        },
        {
          name: "Color Classifier Line",
          description:
            "Robotics experiment using LEGO Mindstorms to classify and sort objects by color, exploring sensors, automation, and physical feedback systems.",
          icon: "🎨",
          imgUrl: "/assets/img/classifier.png",
          link: "https://youtu.be/1no7NbHiN4E",
        },
        {
          name: "Rubik’s Cube Solver",
          description:
            "Algorithmic robotics project using LEGO EV3 to mechanically solve a Rubik’s Cube, combining logical problem-solving with physical execution.",
          icon: "🧩",
          imgUrl: "/assets/img/rubik.png",
          link: "https://www.youtube.com/watch?v=TyOzVxzmnO8",
        },
      ],

      // Question 3: How do you turn ideas into functional, creative digital products for clients?
      [
        {
          name: "Multiple Assessment Projects",
          description:
            "Frontend development for a drone LiDAR company, delivered a clean, accessible interface to using HTML, BootstrapCSS and JavaScript to showcase project cases on construction and urban planning.",
          icon: "🚁",
          imgUrl: "/assets/img/map.png",
          link: "https://mxmap.org",
        },
        {
          name: "Ticket Flyers",
          description:
            "End-to-end branding and frontend development for a flight and hotel booking platform, integrating the Travelpayouts API to enable real-world transactions and monetization.",
          icon: "✈️",
          imgUrl: "/assets/img/ticketflyers.jpg",
          link: "https://ticketflyers.com",
        },
        {
          name: "Coquelicot",
          description:
            "Stylish phone cases E-commerce website built with Shopify and Webflow, focused on brand expression, conversion optimization, and a smooth shopping experience.",
          icon: "🛍️",
          imgUrl: "/assets/img/coquelicot.png",
          link: "https://coquelicot.online",
        },
        {
          name: "Centro Evaluador",
          description:
            "Branding and WordPress-based frontend development for an educational evaluation center, aligning institutional identity with a clear and trustworthy digital presence.",
          icon: "🏛️",
          imgUrl: "/assets/img/centroevaluador.png",
          link: "https://centroevaluador.mx",
        },
        {
          name: "MyDoctorAway",
          description:
            "Branding and frontend development for a medical-on-demand platform, focused on clarity, trust, and ease of access for international and local users.",
          icon: "🩺",
          imgUrl: "/assets/img/mydoctoraway.png",
          link: "https://mydoctoraway.com",
        },
        {
          name: "Sax Palacios",
          description:
            "Frontend development for a professional musician’s website, integrating Stripe payments to enable direct bookings and digital service sales.",
          icon: "🎷",
          imgUrl: "/assets/img/sax-palacios.png",
          link: "https://palaciossax.com",
        },
        {
          name: "BIM Central",
          description:
            "WordPress website development for a professional services platform, integrating PayPal payments to support digital product sales and client onboarding.",
          icon: "🏗️",
          imgUrl: "/assets/img/bim.png",
          link: "https://bimcentral.com.mx",
        },
        {
          name: "Shapers Academy",
          description:
            "Full-stack development of an online learning platform using Node.js and vanilla web technologies, designed to support scalable education and community-driven learning.",
          icon: "🎓",
          imgUrl: "/assets/img/shapers-academy.png",
          link: "https://shapers.academy",
        },
        {
          name: "AMMC Estudio Creativo",
          description:
            "Frontend website built with Tailwind CSS, translating a creative studio’s visual identity into a fast, responsive, and modern digital experience.",
          icon: "🎨",
          imgUrl: "/assets/img/ammc.png",
          link: "https://ammcestudiocreativo.com",
        },
        {
          name: "Quinta Balam",
          description:
            "Frontend development for a hospitality and events venue, emphasizing visual storytelling, usability, and conversion-oriented design.",
          icon: "🏡",
          imgUrl: "/assets/img/quinta-balam.png",
          link: "https://quintabalam.com",
        },
        {
          name: "Yun Tu Asesora",
          description:
            "Frontend website for a personal brand offering insurance and savings services, delivering a clear structure and professional presence using lightweight, maintainable web technologies.",
          icon: "💼",
          imgUrl: "/assets/img/yuntuasesora.png",
          link: "https://yuntuasesora.com",
        },
        {
          name: "Mis Dulces Momentos",
          description:
            "Branding and frontend development for a party and sweets business, crafting a warm and expressive digital identity aligned with the brand’s emotional tone.",
          icon: "🍰",
          imgUrl: "/assets/img/misdulcesmomentos.png",
          link: "https://misdulcesmomentos.com",
        },
        {
          name: "Hoteles Zhilak",
          description:
            "Frontend development for a touristic agency group website, focused on clarity, performance, and a frictionless user journey for prospective travelers.",
          icon: "🏨",
          imgUrl: "/assets/img/zhilak.png",
          link: "https://hoteleszhilak.com",
        },
        {
          name: "Lumina Glass",
          description:
            "Frontend website for a manufacturing and materials company, translating technical offerings into a clean, accessible, and business-focused interface.",
          icon: "🪟",
          imgUrl: "/assets/img/lumina.png",
          link: "https://luminaglass.mx",
        },
        {
          name: "Twin Tigers",
          description:
            "Branding and frontend development for a sports brand, unifying visual identity and web presence into a cohesive, modern digital experience.",
          icon: "🐯",
          imgUrl: "/assets/img/twin-tigers.png",
          link: "https://twintigers.mx",
        },
      ],

      // Question 4: How do you think about real-world impact and global collaboration?
      [
        {
          name: "Kaanbal",
          description:
            "Non-profit President, Co-founder, and CTO focused on community-owned connectivity and digital education. Since 2016, Kaanbal has connected 30 rural communities across Mexico, enabling internet access, local infrastructure, and long-term technical capacity building.",
          icon: "🌱",
          imgUrl: "/assets/img/kaanbal.jpg",
          link: "https://kaanbal.org",
        },
        {
          name: "United Nations",
          description:
            "Speaker and contributor highlighting the role of connectivity and technology in empowering Indigenous communities, aligned with the United Nations Sustainable Development Goals.",
          icon: "🎯",
          imgUrl: "/assets/img/un.jpg",
          link: "https://www.un.org/sustainabledevelopment/blog/2016/12/video-pedro-gonzalez-on-indigenous-communities-and-the-internet/",
        },
        {
          name: "MIT Media Lab",
          description:
            "Ignite Talk speaker at the MIT Media Lab Connected Learning Summit, sharing experiences on community-driven technology, learning, and digital inclusion.",
          icon: "💡",
          imgUrl: "/assets/img/mit.jpg",
          link: "https://vimeo.com/284947875",
        },
        {
          name: "World Economic Forum",
          description:
            "Participant in World Economic Forum Plan México (CDMX, 2025), contributing youth perspectives on technology, innovation, and national development strategies.",
          icon: "🤝",
          imgUrl: "/assets/img/wef.jpg",
          link: "https://www.facebook.com/GlobalShapers/posts/from-7-8-october-the-world-economic-forum-and-the-government-of-mexico-came-toge/1205407984944373/",
        },
        {
          name: "Global Shapers Community",
          description:
            "Founder Member, former Vice Curator, Curator, and Alumni. Led and scaled youth-driven initiatives addressing digital inclusion, education, and civic innovation, while connecting local action in Cancún to global collaboration through the World Economic Forum network.",
          icon: "🌍",
          imgUrl: "/assets/img/gs.jpg",
          link: "https://globalshaperscancun.org",
        },
        {
          name: "Internet Society",
          description:
            "Contributor to the Connecting the Unconnected program and recipient of the Beyond the Net Grant (2016), supporting sustainable digital inclusion initiatives for rural schools and communities through locally managed infrastructure.",
          icon: "📡",
          imgUrl: "/assets/img/isoc.jpg",
          link: "https://www.internetsociety.org/blog/2016/07/connecting-the-unconnected-the-story-of-a-visit-to-a-school-in-agua-azul-mexico/",
        },
        {
          name: "Government of Mexico",
          description:
            "Recognized by the Government of Mexico for initiatives aimed at reducing the digital divide and expanding access to technology in underserved regions.",
          icon: "🏛️",
          imgUrl: "/assets/img/gobmx.jpg",
          link: "http://www.dgest.gob.mx/ciencia-y-tecnologia/pedro-gonzalez-busca-disminuir-la-brecha-digital-de-mexico-al-mundo",
        },
        {
          name: "Secretaría de Relaciones Exteriores",
          description:
            "Invited participant in international forums on innovation and technology, representing Mexico in global conversations on connectivity and digital inclusion.",
          icon: "🇲🇽",
          imgUrl: "/assets/img/sre.jpg",
          link: "https://mision.sre.gob.mx/onu/index.php/intervenciones/746-innovadores",
        },
        {
          name: "Government of Quintana Roo",
          description:
            "Public recognition and media features for contributions to science, technology, and social development initiatives in the state of Quintana Roo.",
          icon: "🏝️",
          imgUrl: "/assets/img/gobqroo.png",
          link: "https://youtu.be/7qFzDJ4nM9A",
        },
        {
          name: "Salzburg Global Fellowship",
          description:
            "Fellow (Austria, 2024) in the Connecting Technologies program, collaborating with global leaders to explore ethical, inclusive, and future-facing approaches in the talent and innovation ecosystem.",
          icon: "🎓",
          imgUrl: "/assets/img/salzburg.jpg",
          link: "https://www.salzburgglobal.org/newsroom/latest-news/uncertain-futures-and-connections-reimagined-connecting-technologies",
        },
        {
          name: "TV Azteca",
          description:
            "Featured interview discussing technology, innovation, and social impact initiatives focused on connectivity and education in Mexico.",
          icon: "📺",
          imgUrl: "/assets/img/tvazteca.png",
          link: "https://www.youtube.com/watch?v=W6bhcRPkdLQ",
        },
        {
          name: "Novedades Quintana Roo",
          description:
            "Media coverage highlighting regional impact projects centered on digital inclusion and youth-led innovation.",
          icon: "📰",
          imgUrl: "/assets/img/novedades.png",
          link: "https://www.youtube.com/watch?v=TSK7pnEjTZQ",
        },
      ],

      // Question 6: What does life outside of technology look like for you?
      [
        {
          name: "21K Cancún",
          description:
            "Half marathon finisher (2024). My first endurance challenge.",
          icon: "🏃‍♂️",
          imgUrl: "/assets/img/21kcancun.jpg",
          link: "https://asdeporte.com/evento/medio-marato-n-cancu-n-2024-yf2/resultados?resultado=fddeb919-41a7-4467-b778-db6ab3624048",
        },
        {
          name: "Triathlon Sprint - Xel-Há",
          description: "Sprint triathlon finisher (2024). Swim, bike, and run.",
          icon: "🏊‍♂️",
          imgUrl: "/assets/img/tri.jpg",
          link: "https://asdeporte.com/evento/triatlo-n-sprint-y-oli-mpico-xel-ha-2024-70n/resultados?resultado=f7c1cc04-5e47-48c9-8de0-d1f160723856",
        },
        {
          name: "Skydiving - AFF Certification",
          description:
            "Completed Accelerated Freefall (AFF) training. Milestone 7th jump in Puerto Escondido, Oaxaca (2022).",
          icon: "🪂",
          imgUrl: "/assets/img/aff.jpg",
          link: "https://www.facebook.com/reel/5121765457920609",
        },
        {
          name: "Chess.com",
          description:
            "Play chess with me and explore strategy, pattern recognition, and lifelong learning.",
          icon: "♟️",
          imgUrl: "/assets/img/chess.png",
          link: "https://www.chess.com/member/pedroagont",
        },
        {
          name: "21K Madrid",
          description:
            "Half marathon finisher (2024). My first international race experience.",
          icon: "🏃‍♂️",
          imgUrl: "/assets/img/21kmadrid.jpg",
          link: "https://results.sporthive.com/events/7180618688493574912/races/489023/bib/30038",
        },
        {
          name: "21K Tulum",
          description: "Half marathon finisher (2024).",
          icon: "🏃‍♂️",
          imgUrl: "/assets/img/21ktulum.jpg",
          link: "https://asdeporte.com/evento/medio-marato-n-tulum-2024-c9x/resultados?resultado=95460178-5547-4511-8f17-4c9b4de8546e",
        },
        {
          name: "21K El Salvador",
          description: "Half marathon finisher (2025).",
          icon: "🏃‍♂️",
          imgUrl: "/assets/img/21ksalvador.jpg",
          link: "https://results.sporthive.com/events/7322247047332331776/races/493297/bib/2171",
        },
        {
          name: "Skydiving - 25th Jump",
          description: "Milestone skydive in Cuautla, Morelos (2024).",
          icon: "🪂",
          imgUrl: "/assets/img/25.png",
          link: "https://www.facebook.com/reel/2796281807249244",
        },
        {
          name: "Skydiving - 50th Jump",
          description: "50th skydive milestone (Cuautla, 2025).",
          icon: "🪂",
          imgUrl: "/assets/img/50.png",
          link: "https://www.facebook.com/reel/2796281807249244",
        },
        {
          name: "Muay Thai & Kickboxing",
          description:
            "Active Muay Thai practitioner with sparring experience (2026).",
          icon: "🥊",
          imgUrl: "/assets/img/muaythai.png",
          link: "https://www.facebook.com/reel/1302450748305673",
        },
      ],
    ],
  },
  es: {
    title: "Relacionado",
    projectsByQuestion: [
      // Pregunta 1: ¿Qué impulsa tu trabajo en tecnología?
      [
        {
          name: "Gobierno Digital",
          description:
            "Consultor Líder de Tecnología e IA del equipo de Analítica GovTech (2025–2026), utilizando desarrollo full-stack, inteligencia artificial y dinámicas colaborativas para visualizar y analizar datos urbanos y del sector público. Uso de Node.js, React, autenticación JWT, Leaflet, Recharts, OpenAI y herramientas de análisis de datos como Power BI y Looker Studio para habilitar la toma de decisiones basada en datos en iniciativas de ciudades inteligentes.",
          icon: "🏙️",
          imgUrl: "/assets/img/cancun-inteligente.png",
          link: "http://cancun-inteligente.onrender.com",
        },
        {
          name: "Lighthouse Labs Inc",
          description:
            "Mentor, instructor y entrevistador técnico en desarrollo Full-Stack (2021–2025). Impartí más de 5,000 horas de formación a profesionales en Canadá mediante bootcamps de desarrollo de software PERN (Node.js, Express, PostgreSQL, ReactJS) y Ruby on Rails con enfoque en IA, incluyendo proyectos del mundo real, mentoría, revisiones de código y sesiones 1:1.",
          icon: "💡",
          imgUrl: "/assets/img/lhl.jpg",
          link: "https://enterprise.lighthouselabs.ca",
        },
        {
          name: "DEVF",
          description:
            "Instructor de desarrollo Full-Stack, líder de comunidad y creador de contenido (2019–2021). Formé a más de 120 profesionales en tecnologías MERN (Node.js, Express, MongoDB NoSQL, ReactJS), lideré más de 25 hackatones y actividades tecnológicas, creé contenido educativo, realicé actividades en vivo en redes sociales y apoyé el crecimiento de comunidades de desarrolladores en toda Latinoamérica.",
          icon: "🧑‍🏫",
          imgUrl: "/assets/img/devf.jpg",
          link: "http://devf.la",
        },
        {
          name: "Tech Garage Innovation Park",
          description:
            "Experience Manager (2016–2018) en el primer Parque de Tecnología e Innovación de Cancún, liderando la comunidad de coworking, promoviendo tecnologías full-stack, organizando más de 150 eventos para más de 3,000 participantes, mentorando startups y fortaleciendo el ecosistema regional de innovación.",
          icon: "🚀",
          imgUrl: "/assets/img/techgarage.jpg",
          link: "https://www.facebook.com/techgaragemx",
        },
        {
          name: "Microsoft Innovation Center",
          description:
            "Líder de Comunidad en Cancún (2015–2016), organizando programas, talleres y eventos tecnológicos para fomentar la innovación local, el emprendimiento y el desarrollo de habilidades digitales.",
          icon: "🪟",
          imgUrl: "/assets/img/mic.jpg",
          link: "https://www.microsoft.com/en-us/hub",
        },
        {
          name: "Internet Society",
          description:
            "Representante del Capítulo México y Coordinador del Programa de Internet de las Cosas (2018), contribuyendo a iniciativas nacionales e internacionales enfocadas en gobernanza de internet, conectividad y tecnologías emergentes.",
          icon: "🌐",
          imgUrl: "/assets/img/iot.jpg",
          link: "https://www.internetsociety.org",
        },
        {
          name: "Cerebro Digital",
          description:
            "Líder de Comunidad y Creador de Contenido (2015–2019), produciendo contenido educativo, cobertura de eventos en vivo y organizando actividades enfocadas en alfabetización digital, ciencia, tecnología y aprendizaje creativo.",
          icon: "🧠",
          imgUrl: "/assets/img/cerebrodigital.png",
          link: "https://facebook.com/tucerebrodigital",
        },
        {
          name: "University of Guelph",
          description:
            "Instructor de Desarrollo Web Full-Stack y Evaluador de Proyectos, enseñando stacks PERN y Ruby on Rails y evaluando proyectos estudiantiles en un entorno académico.",
          icon: "🎓",
          imgUrl: "/assets/img/uog.jpg",
          link: "http://uoguelph.ca",
        },
      ],

      // Pregunta 2: Cuéntame sobre un proyecto del que te sientas más orgulloso
      [
        {
          name: "Robot Móvil IoT con DJI Osmo",
          description:
            "Proyecto de robótica móvil habilitado con IoT construido con Raspberry Pi y Python, presentado en el Foro de Ciencia, Tecnología e Innovación de las Naciones Unidas 2018 para demostrar robótica en tiempo real y captura de medios.",
          icon: "🤖",
          imgUrl: "/assets/img/iotrobot.jpg",
          link: "https://youtu.be/TT2myChMV28",
        },
        {
          name: "Robot Raspberry Pi Controlado vía OSC",
          description:
            "Robot móvil interactivo desarrollado con Raspberry Pi y Python, con control remoto en tiempo real mediante OSC y TouchOSC, diseñado para cobertura de eventos en vivo y participación del público.",
          icon: "🤖",
          imgUrl: "/assets/img/rpi.jpg",
          link: "https://pedroagont.tumblr.com/post/137541587893#137541587893",
        },
        {
          name: "Robot Arduino Controlado con p5",
          description:
            "Proyecto de robótica móvil usando Arduino y C, controlado en tiempo real mediante una interfaz p5, explorando la interacción humano-máquina y la computación física remota.",
          icon: "🤖",
          imgUrl: "/assets/img/arduino.jpg",
          link: "https://youtu.be/LvywwB-Fqxk",
        },
        {
          name: "Base de Datos en la Nube para Transferencia de Habilidades Futuras",
          description:
            "Sistema de investigación para capturar y sincronizar señales de movimiento, musculares y ondas cerebrales usando sensores y microcontroladores ESP32 con firmware embebido personalizado; filtros notch, extracción de características y clasificadores de ML sincronizados mediante un backend Node.js con JWT, Socket.IO y OpenAI; posteriormente consumidos, visualizados e interactuados a través de una Progressive Web App en React desplegada en la nube.",
          icon: "🧠",
          imgUrl: "/assets/img/mirai.png",
          link: "https://www.youtube.com/watch?v=OIXP0Al67ME",
        },
        {
          name: "Simulador Multijugador 3D de Playa Cancún",
          description:
            "Entorno multijugador 3D en tiempo real construido con Three.js, Node.js y Socket.IO, integrado con interacciones potenciadas por OpenAI para explorar la presencia social y los espacios virtuales compartidos.",
          icon: "🌴",
          imgUrl: "/assets/img/cancun-simulator.png",
          link: "https://cancun-beach-simulator.onrender.com",
        },
        {
          name: "Skydive Collector",
          description:
            "Juego 3D controlado por movimiento utilizando Three.js y la API de Orientación del Dispositivo, traduciendo el movimiento físico en mecánicas de juego para una experiencia interactiva encarnada.",
          icon: "🪂",
          imgUrl: "/assets/img/skydive-collector.jpg",
          link: "https://skydive-collector.onrender.com",
        },
        {
          name: "Hand Rush",
          description:
            "Juego 3D basado en gestos construido con Three.js y ml5.js Hand Pose, utilizando visión por computadora para habilitar el seguimiento de manos en tiempo real y una interacción intuitiva sin contacto.",
          icon: "✋",
          imgUrl: "/assets/img/hand-rush.png",
          link: "https://hand-rush-3d-game.onrender.com",
        },
        {
          name: "d3stinations",
          description:
            "Plataforma interactiva de reservaciones de viajes en un globo 3D, construida con Three.js, geolocalización y la API de Travelpayouts, visualizando destinos globales y datos espaciales a través de una interfaz inmersiva que genera ingresos.",
          icon: "🌍",
          imgUrl: "/assets/img/d3stinations.png",
          link: "https://d3stinations.world",
        },
        {
          name: "Clasificador de Colores",
          description:
            "Experimento de robótica usando LEGO Mindstorms para clasificar y ordenar objetos por color, explorando sensores, automatización y sistemas de retroalimentación física.",
          icon: "🎨",
          imgUrl: "/assets/img/classifier.png",
          link: "https://youtu.be/1no7NbHiN4E",
        },
        {
          name: "Solucionador de Cubo Rubik",
          description:
            "Proyecto de robótica algorítmica usando LEGO EV3 para resolver mecánicamente un Cubo Rubik, combinando razonamiento lógico con ejecución física.",
          icon: "🧩",
          imgUrl: "/assets/img/rubik.png",
          link: "https://www.youtube.com/watch?v=TyOzVxzmnO8",
        },
      ],

      // Pregunta 3: ¿Cómo conviertes ideas en productos digitales funcionales y creativos para clientes?
      [
        {
          name: "Multiple Assessment Projects",
          description:
            "Desarrollo frontend para una empresa de drones LiDAR, entregando una interfaz limpia y accesible usando HTML, BootstrapCSS y JavaScript para mostrar casos de uso en construcción y planeación urbana.",
          icon: "🚁",
          imgUrl: "/assets/img/map.png",
          link: "https://mxmap.org",
        },
        {
          name: "Ticket Flyers",
          description:
            "Branding de principio a fin y desarrollo frontend para una plataforma de reservación de vuelos y hoteles, integrando la API de Travelpayouts para habilitar transacciones reales y monetización.",
          icon: "✈️",
          imgUrl: "/assets/img/ticketflyers.jpg",
          link: "https://ticketflyers.com",
        },
        {
          name: "Coquelicot",
          description:
            "Sitio e-commerce de fundas para celular construido con Shopify y Webflow, enfocado en expresión de marca, optimización de conversión y una experiencia de compra fluida.",
          icon: "🛍️",
          imgUrl: "/assets/img/coquelicot.png",
          link: "https://coquelicot.online",
        },
        {
          name: "Centro Evaluador",
          description:
            "Branding y desarrollo frontend en WordPress para un centro de evaluación educativa, alineando la identidad institucional con una presencia digital clara y confiable.",
          icon: "🏛️",
          imgUrl: "/assets/img/centroevaluador.png",
          link: "https://centroevaluador.mx",
        },
        {
          name: "MyDoctorAway",
          description:
            "Branding y desarrollo frontend para una plataforma médica bajo demanda, enfocada en claridad, confianza y facilidad de acceso para usuarios locales e internacionales.",
          icon: "🩺",
          imgUrl: "/assets/img/mydoctoraway.png",
          link: "https://mydoctoraway.com",
        },
        {
          name: "Sax Palacios",
          description:
            "Desarrollo frontend para el sitio web de un músico profesional, integrando pagos con Stripe para permitir reservaciones directas y venta de servicios digitales.",
          icon: "🎷",
          imgUrl: "/assets/img/sax-palacios.png",
          link: "https://palaciossax.com",
        },
        {
          name: "BIM Central",
          description:
            "Desarrollo de sitio web en WordPress para una plataforma de servicios profesionales, integrando pagos con PayPal para soportar venta de productos digitales y onboarding de clientes.",
          icon: "🏗️",
          imgUrl: "/assets/img/bim.png",
          link: "https://bimcentral.com.mx",
        },
        {
          name: "Shapers Academy",
          description:
            "Desarrollo full-stack de una plataforma de aprendizaje en línea usando Node.js y tecnologías web vanilla, diseñada para educación escalable y aprendizaje impulsado por comunidad.",
          icon: "🎓",
          imgUrl: "/assets/img/shapers-academy.png",
          link: "https://shapers.academy",
        },
        {
          name: "AMMC Estudio Creativo",
          description:
            "Sitio web frontend construido con Tailwind CSS, traduciendo la identidad visual de un estudio creativo en una experiencia digital moderna, rápida y responsiva.",
          icon: "🎨",
          imgUrl: "/assets/img/ammc.png",
          link: "https://ammcestudiocreativo.com",
        },
        {
          name: "Quinta Balam",
          description:
            "Desarrollo frontend para un espacio de hospitalidad y eventos, enfatizando narrativa visual, usabilidad y diseño orientado a conversión.",
          icon: "🏡",
          imgUrl: "/assets/img/quinta-balam.png",
          link: "https://quintabalam.com",
        },
        {
          name: "Yun Tu Asesora",
          description:
            "Sitio frontend para una marca personal de seguros y ahorro, entregando una estructura clara y una presencia profesional con tecnologías web ligeras y mantenibles.",
          icon: "💼",
          imgUrl: "/assets/img/yuntuasesora.png",
          link: "https://yuntuasesora.com",
        },
        {
          name: "Mis Dulces Momentos",
          description:
            "Branding y desarrollo frontend para un negocio de repostería y eventos, creando una identidad digital cálida y expresiva alineada con el tono emocional de la marca.",
          icon: "🍰",
          imgUrl: "/assets/img/misdulcesmomentos.png",
          link: "https://misdulcesmomentos.com",
        },
        {
          name: "Hoteles Zhilak",
          description:
            "Desarrollo frontend para el sitio web de un grupo de agencias turísticas, enfocado en claridad, rendimiento y una experiencia de usuario sin fricción.",
          icon: "🏨",
          imgUrl: "/assets/img/zhilak.png",
          link: "https://hoteleszhilak.com",
        },
        {
          name: "Lumina Glass",
          description:
            "Sitio frontend para una empresa de manufactura y materiales, traduciendo ofertas técnicas en una interfaz clara, accesible y orientada a negocio.",
          icon: "🪟",
          imgUrl: "/assets/img/lumina.png",
          link: "https://luminaglass.mx",
        },
        {
          name: "Twin Tigers",
          description:
            "Branding y desarrollo frontend para una marca deportiva, unificando identidad visual y presencia web en una experiencia digital coherente y moderna.",
          icon: "🐯",
          imgUrl: "/assets/img/twin-tigers.png",
          link: "https://twintigers.mx",
        },
      ],

      // Pregunta 4: ¿Cómo piensas sobre el impacto en el mundo real y la colaboración global?
      [
        {
          name: "Kaanbal",
          description:
            "Presidente, Cofundador y CTO de una organización sin fines de lucro enfocada en conectividad comunitaria y educación digital. Desde 2016, Kaanbal ha conectado 30 comunidades rurales en México, habilitando acceso a internet, infraestructura local y desarrollo de capacidades técnicas a largo plazo.",
          icon: "🌱",
          imgUrl: "/assets/img/kaanbal.jpg",
          link: "https://kaanbal.org",
        },
        {
          name: "Naciones Unidas",
          description:
            "Ponente y colaborador destacando el rol de la conectividad y la tecnología en el empoderamiento de comunidades indígenas, alineado con los Objetivos de Desarrollo Sostenible de la ONU.",
          icon: "🎯",
          imgUrl: "/assets/img/un.jpg",
          link: "https://www.un.org/sustainabledevelopment/blog/2016/12/video-pedro-gonzalez-on-indigenous-communities-and-the-internet/",
        },
        {
          name: "MIT Media Lab",
          description:
            "Ponente Ignite Talk en el Connected Learning Summit del MIT Media Lab, compartiendo experiencias sobre tecnología impulsada por comunidad, aprendizaje e inclusión digital.",
          icon: "💡",
          imgUrl: "/assets/img/mit.jpg",
          link: "https://vimeo.com/284947875",
        },
        {
          name: "World Economic Forum",
          description:
            "Participante en World Economic Forum Plan México (CDMX, 2025), aportando perspectivas juveniles sobre tecnología, innovación y estrategias de desarrollo nacional.",
          icon: "🤝",
          imgUrl: "/assets/img/wef.jpg",
          link: "https://www.facebook.com/GlobalShapers/posts/from-7-8-october-the-world-economic-forum-and-the-government-of-mexico-came-toge/1205407984944373/",
        },
        {
          name: "Global Shapers Community",
          description:
            "Miembro fundador, ex Vice Curador, Curador y Alumni. Lideró y escaló iniciativas juveniles enfocadas en inclusión digital, educación e innovación cívica, conectando acción local en Cancún con colaboración global a través de la red del World Economic Forum.",
          icon: "🌍",
          imgUrl: "/assets/img/gs.jpg",
          link: "https://globalshaperscancun.org",
        },
        {
          name: "Internet Society",
          description:
            "Colaborador del programa Connecting the Unconnected y beneficiario del Beyond the Net Grant (2016), apoyando iniciativas sostenibles de inclusión digital para escuelas y comunidades rurales mediante infraestructura gestionada localmente.",
          icon: "📡",
          imgUrl: "/assets/img/isoc.jpg",
          link: "https://www.internetsociety.org/blog/2016/07/connecting-the-unconnected-the-story-of-a-visit-to-a-school-in-agua-azul-mexico/",
        },
        {
          name: "Gobierno de México",
          description:
            "Reconocido por el Gobierno de México por iniciativas enfocadas en reducir la brecha digital y expandir el acceso a la tecnología en regiones desatendidas.",
          icon: "🏛️",
          imgUrl: "/assets/img/gobmx.jpg",
          link: "http://www.dgest.gob.mx/ciencia-y-tecnologia/pedro-gonzalez-busca-disminuir-la-brecha-digital-de-mexico-al-mundo",
        },
        {
          name: "Secretaría de Relaciones Exteriores",
          description:
            "Participante invitado en foros internacionales de innovación y tecnología, representando a México en conversaciones globales sobre conectividad e inclusión digital.",
          icon: "🇲🇽",
          imgUrl: "/assets/img/sre.jpg",
          link: "https://mision.sre.gob.mx/onu/index.php/intervenciones/746-innovadores",
        },
        {
          name: "Gobierno de Quintana Roo",
          description:
            "Reconocimiento público y cobertura mediática por contribuciones a iniciativas de ciencia, tecnología y desarrollo social en el estado de Quintana Roo.",
          icon: "🏝️",
          imgUrl: "/assets/img/gobqroo.png",
          link: "https://youtu.be/7qFzDJ4nM9A",
        },
        {
          name: "Salzburg Global Fellowship",
          description:
            "Fellow (Austria, 2024) del programa Connecting Technologies, colaborando con líderes globales para explorar enfoques éticos, inclusivos y orientados al futuro en el ecosistema de talento e innovación.",
          icon: "🎓",
          imgUrl: "/assets/img/salzburg.jpg",
          link: "https://www.salzburgglobal.org/newsroom/latest-news/uncertain-futures-and-connections-reimagined-connecting-technologies",
        },
        {
          name: "TV Azteca",
          description:
            "Entrevista destacada sobre tecnología, innovación e impacto social, enfocada en conectividad y educación en México.",
          icon: "📺",
          imgUrl: "/assets/img/tvazteca.png",
          link: "https://www.youtube.com/watch?v=W6bhcRPkdLQ",
        },
        {
          name: "Novedades Quintana Roo",
          description:
            "Cobertura mediática destacando proyectos de impacto regional enfocados en inclusión digital e innovación liderada por jóvenes.",
          icon: "📰",
          imgUrl: "/assets/img/novedades.png",
          link: "https://www.youtube.com/watch?v=TSK7pnEjTZQ",
        },
      ],

      // Pregunta 6: ¿Cómo es tu vida fuera de la tecnología?
      [
        {
          name: "21K Cancún",
          description:
            "Finalista de medio maratón (2024). Mi primer reto de resistencia.",
          icon: "🏃‍♂️",
          imgUrl: "/assets/img/21kcancun.jpg",
          link: "https://asdeporte.com/evento/medio-marato-n-cancu-n-2024-yf2/resultados?resultado=fddeb919-41a7-4467-b778-db6ab3624048",
        },
        {
          name: "Triatlón Sprint – Xel-Há",
          description:
            "Finalista de triatlón sprint (2024). Nado, bici y carrera.",
          icon: "🏊‍♂️",
          imgUrl: "/assets/img/tri.jpg",
          link: "https://asdeporte.com/evento/triatlo-n-sprint-y-oli-mpico-xel-ha-2024-70n/resultados?resultado=f7c1cc04-5e47-48c9-8de0-d1f160723856",
        },
        {
          name: "Paracaidismo – Certificación AFF",
          description:
            "Entrenamiento Accelerated Freefall (AFF) completado. Salto número 7 en Puerto Escondido, Oaxaca (2022).",
          icon: "🪂",
          imgUrl: "/assets/img/aff.jpg",
          link: "https://www.facebook.com/reel/5121765457920609",
        },
        {
          name: "Chess.com",
          description:
            "Juega ajedrez conmigo y explora estrategia, reconocimiento de patrones y aprendizaje continuo.",
          icon: "♟️",
          imgUrl: "/assets/img/chess.png",
          link: "https://www.chess.com/member/pedroagont",
        },
        {
          name: "21K Madrid",
          description:
            "Finalista de medio maratón (2024). Mi primera carrera internacional.",
          icon: "🏃‍♂️",
          imgUrl: "/assets/img/21kmadrid.jpg",
          link: "https://results.sporthive.com/events/7180618688493574912/races/489023/bib/30038",
        },
        {
          name: "21K Tulum",
          description: "Finalista de medio maratón (2024).",
          icon: "🏃‍♂️",
          imgUrl: "/assets/img/21ktulum.jpg",
          link: "https://asdeporte.com/evento/medio-marato-n-tulum-2024-c9x/resultados?resultado=95460178-5547-4511-8f17-4c9b4de8546e",
        },
        {
          name: "21K El Salvador",
          description: "Finalista de medio maratón (2025).",
          icon: "🏃‍♂️",
          imgUrl: "/assets/img/21ksalvador.jpg",
          link: "https://results.sporthive.com/events/7322247047332331776/races/493297/bib/2171",
        },
        {
          name: "Paracaidismo – Salto 25",
          description: "Salto número 25 (Cuautla, Morelos, 2024).",
          icon: "🪂",
          imgUrl: "/assets/img/25.png",
          link: "https://www.facebook.com/reel/2796281807249244",
        },
        {
          name: "Paracaidismo – Salto 50",
          description: "Hito de 50 saltos (Cuautla, 2025).",
          icon: "🪂",
          imgUrl: "/assets/img/50.png",
          link: "https://www.facebook.com/reel/2796281807249244",
        },
        {
          name: "Muay Thai y Kickboxing",
          description:
            "Practicante activo de Muay Thai con experiencia en sparring (2026).",
          icon: "🥊",
          imgUrl: "/assets/img/muaythai.png",
          link: "https://www.facebook.com/reel/1302450748305673",
        },
      ],
    ],
  },
  fr: {
    title: "Associé",
    projectsByQuestion: [
      // Question 1 : Qu’est-ce qui motive ton travail dans la technologie ?
      [
        {
          name: "Gobierno Digital",
          description:
            "Consultant Principal en Technologie et IA au sein de l’équipe GovTech Analytics (2025–2026), combinant développement full-stack, intelligence artificielle et dynamiques collaboratives pour visualiser et analyser des données urbaines et du secteur public. Utilisation de Node.js, React, authentification JWT, Leaflet, Recharts, OpenAI et d’outils d’analyse de données tels que Power BI et Looker Studio afin de soutenir la prise de décision basée sur les données pour les initiatives de villes intelligentes.",
          icon: "🏙️",
          imgUrl: "/assets/img/cancun-inteligente.png",
          link: "http://cancun-inteligente.onrender.com",
        },
        {
          name: "Lighthouse Labs Inc",
          description:
            "Mentor, formateur et intervieweur technique en développement Full Stack (2021–2025), avec plus de 5 000 heures de formation dispensées à des professionnels au Canada à travers des bootcamps full stack PERN (Node.js, Express, PostgreSQL, ReactJS) et Ruby on Rails, intégrant des projets concrets, du mentorat, des revues de code et des sessions individuelles (1:1).",
          icon: "💡",
          imgUrl: "/assets/img/lhl.jpg",
          link: "https://enterprise.lighthouselabs.ca",
        },
        {
          name: "DEVF",
          description:
            "Formateur en développement Full Stack, responsable de communauté et créateur de contenu (2019–2021), ayant formé plus de 120 professionnels aux technologies MERN (Node.js, Express, MongoDB NoSQL, ReactJS), animé plus de 25 hackathons et activités technologiques, créé du contenu éducatif et des événements en direct sur les réseaux sociaux, tout en soutenant la croissance des communautés de développeurs à travers l’Amérique latine.",
          icon: "🧑‍🏫",
          imgUrl: "/assets/img/devf.jpg",
          link: "http://devf.la",
        },
        {
          name: "Tech Garage Innovation Park",
          description:
            "Responsable de l’Expérience (2016–2018) au premier parc de technologie et d’innovation de Cancún, pilotant la communauté de coworking, promouvant les technologies full-stack, organisant plus de 150 événements pour plus de 3 000 participants, accompagnant des startups et renforçant l’écosystème régional de l’innovation.",
          icon: "🚀",
          imgUrl: "/assets/img/techgarage.jpg",
          link: "https://www.facebook.com/techgaragemx",
        },
        {
          name: "Microsoft Innovation Center",
          description:
            "Responsable de communauté à Cancún (2015–2016), organisant des programmes, ateliers et événements technologiques afin de favoriser l’innovation locale, l’entrepreneuriat et le développement des compétences numériques.",
          icon: "🪟",
          imgUrl: "/assets/img/mic.jpg",
          link: "https://www.microsoft.com/en-us/hub",
        },
        {
          name: "Internet Society",
          description:
            "Représentant du chapitre Mexique et coordinateur du programme Internet des Objets (2018), contribuant à des initiatives nationales et internationales axées sur la gouvernance d’internet, la connectivité et les technologies émergentes.",
          icon: "🌐",
          imgUrl: "/assets/img/iot.jpg",
          link: "https://www.internetsociety.org",
        },
        {
          name: "Cerebro Digital",
          description:
            "Responsable de communauté et créateur de contenu (2015–2019), produisant du contenu éducatif, couvrant des événements en direct et organisant des activités axées sur la culture numérique, la science, la technologie et l’apprentissage créatif.",
          icon: "🧠",
          imgUrl: "/assets/img/cerebrodigital.png",
          link: "https://facebook.com/tucerebrodigital",
        },
        {
          name: "University of Guelph",
          description:
            "Formateur en développement web Full-Stack et évaluateur de projets, enseignant les stacks PERN et Ruby on Rails et évaluant des projets étudiants dans un cadre académique.",
          icon: "🎓",
          imgUrl: "/assets/img/uog.jpg",
          link: "http://uoguelph.ca",
        },
      ],

      // Question 2 : Parle-moi d’un projet dont tu es le plus fier
      [
        {
          name: "Robot Mobile IoT avec DJI Osmo",
          description:
            "Projet de robotique mobile connecté à l’IoT, développé avec Raspberry Pi et Python, présenté au Forum des Nations Unies sur la science, la technologie et l’innovation 2018 pour démontrer la robotique en temps réel et la capture multimédia.",
          icon: "🤖",
          imgUrl: "/assets/img/iotrobot.jpg",
          link: "https://youtu.be/TT2myChMV28",
        },
        {
          name: "Robot Raspberry Pi contrôlé via OSC",
          description:
            "Robot mobile interactif développé avec Raspberry Pi et Python, offrant un contrôle à distance en temps réel via OSC et TouchOSC, conçu pour la couverture d’événements en direct et l’engagement du public.",
          icon: "🤖",
          imgUrl: "/assets/img/rpi.jpg",
          link: "https://pedroagont.tumblr.com/post/137541587893#137541587893",
        },
        {
          name: "Robot Arduino contrôlé avec p5",
          description:
            "Projet de robotique mobile utilisant Arduino et le langage C, contrôlé en temps réel via une interface p5, explorant l’interaction homme-machine et l’informatique physique à distance.",
          icon: "🤖",
          imgUrl: "/assets/img/arduino.jpg",
          link: "https://youtu.be/LvywwB-Fqxk",
        },
        {
          name: "Base de données cloud pour le transfert de compétences futures",
          description:
            "Système de recherche dédié à la capture et à la synchronisation de signaux de mouvement, musculaires et cérébraux à l’aide de capteurs et de microcontrôleurs ESP32 avec firmware embarqué personnalisé ; filtres notch, extraction de caractéristiques et classificateurs de ML synchronisés via un backend Node.js avec JWT, Socket.IO et OpenAI ; puis visualisés et exploités à travers une Progressive Web App en React déployée dans le cloud.",
          icon: "🧠",
          imgUrl: "/assets/img/mirai.png",
          link: "https://www.youtube.com/watch?v=OIXP0Al67ME",
        },
        {
          name: "Simulateur Multijoueur 3D – Plage de Cancún",
          description:
            "Environnement multijoueur 3D en temps réel construit avec Three.js, Node.js et Socket.IO, intégrant des interactions propulsées par OpenAI afin d’explorer la présence sociale et les espaces virtuels partagés.",
          icon: "🌴",
          imgUrl: "/assets/img/cancun-simulator.png",
          link: "https://cancun-beach-simulator.onrender.com",
        },
        {
          name: "Skydive Collector",
          description:
            "Jeu 3D contrôlé par le mouvement utilisant Three.js et l’API d’orientation de l’appareil, traduisant le mouvement physique en mécaniques de jeu pour une expérience interactive incarnée.",
          icon: "🪂",
          imgUrl: "/assets/img/skydive-collector.jpg",
          link: "https://skydive-collector.onrender.com",
        },
        {
          name: "Hand Rush",
          description:
            "Jeu 3D basé sur les gestes, développé avec Three.js et ml5.js Hand Pose, utilisant la vision par ordinateur pour permettre le suivi des mains en temps réel et une interaction intuitive sans contact.",
          icon: "✋",
          imgUrl: "/assets/img/hand-rush.png",
          link: "https://hand-rush-3d-game.onrender.com",
        },
        {
          name: "d3stinations",
          description:
            "Plateforme immersive de réservation de voyages sur un globe 3D, développée avec Three.js, la géolocalisation et l’API Travelpayouts, visualisant des destinations mondiales et des données spatiales à travers une interface exploratoire génératrice de revenus.",
          icon: "🌍",
          imgUrl: "/assets/img/d3stinations.png",
          link: "https://d3stinations.world",
        },
        {
          name: "Ligne de classification des couleurs",
          description:
            "Expérience de robotique utilisant LEGO Mindstorms pour classifier et trier des objets par couleur, explorant les capteurs, l’automatisation et les systèmes de rétroaction physique.",
          icon: "🎨",
          imgUrl: "/assets/img/classifier.png",
          link: "https://youtu.be/1no7NbHiN4E",
        },
        {
          name: "Solveur de Rubik’s Cube",
          description:
            "Projet de robotique algorithmique utilisant LEGO EV3 pour résoudre mécaniquement un Rubik’s Cube, combinant raisonnement logique et exécution physique.",
          icon: "🧩",
          imgUrl: "/assets/img/rubik.png",
          link: "https://www.youtube.com/watch?v=TyOzVxzmnO8",
        },
      ],

      // Question 3 : Comment transformez-vous des idées en produits numériques fonctionnels et créatifs pour vos clients ?
      [
        {
          name: "Multiple Assessment Projects",
          description:
            "Développement frontend pour une entreprise de drones LiDAR, avec la livraison d’une interface claire et accessible utilisant HTML, BootstrapCSS et JavaScript afin de présenter des cas de projets en construction et en urbanisme.",
          icon: "🚁",
          imgUrl: "/assets/img/map.png",
          link: "https://mxmap.org",
        },
        {
          name: "Ticket Flyers",
          description:
            "Branding de bout en bout et développement frontend pour une plateforme de réservation de vols et d’hôtels, intégrant l’API Travelpayouts pour permettre des transactions réelles et la monétisation.",
          icon: "✈️",
          imgUrl: "/assets/img/ticketflyers.jpg",
          link: "https://ticketflyers.com",
        },
        {
          name: "Coquelicot",
          description:
            "Site e-commerce de coques de téléphone au design élégant, développé avec Shopify et Webflow, axé sur l’expression de la marque, l’optimisation des conversions et une expérience d’achat fluide.",
          icon: "🛍️",
          imgUrl: "/assets/img/coquelicot.png",
          link: "https://coquelicot.online",
        },
        {
          name: "Centro Evaluador",
          description:
            "Branding et développement frontend basé sur WordPress pour un centre d’évaluation éducatif, alignant l’identité institutionnelle avec une présence numérique claire et fiable.",
          icon: "🏛️",
          imgUrl: "/assets/img/centroevaluador.png",
          link: "https://centroevaluador.mx",
        },
        {
          name: "MyDoctorAway",
          description:
            "Branding et développement frontend pour une plateforme médicale à la demande, axés sur la clarté, la confiance et la facilité d’accès pour les utilisateurs locaux et internationaux.",
          icon: "🩺",
          imgUrl: "/assets/img/mydoctoraway.png",
          link: "https://mydoctoraway.com",
        },
        {
          name: "Sax Palacios",
          description:
            "Développement frontend pour le site web d’un musicien professionnel, intégrant les paiements Stripe afin de permettre les réservations directes et la vente de services numériques.",
          icon: "🎷",
          imgUrl: "/assets/img/sax-palacios.png",
          link: "https://palaciossax.com",
        },
        {
          name: "BIM Central",
          description:
            "Développement de site WordPress pour une plateforme de services professionnels, intégrant les paiements PayPal afin de soutenir la vente de produits numériques et l’intégration des clients.",
          icon: "🏗️",
          imgUrl: "/assets/img/bim.png",
          link: "https://bimcentral.com.mx",
        },
        {
          name: "Shapers Academy",
          description:
            "Développement full-stack d’une plateforme d’apprentissage en ligne utilisant Node.js et des technologies web natives, conçue pour soutenir une éducation évolutive et un apprentissage porté par la communauté.",
          icon: "🎓",
          imgUrl: "/assets/img/shapers-academy.png",
          link: "https://shapers.academy",
        },
        {
          name: "AMMC Estudio Creativo",
          description:
            "Site frontend développé avec Tailwind CSS, traduisant l’identité visuelle d’un studio créatif en une expérience numérique rapide, responsive et moderne.",
          icon: "🎨",
          imgUrl: "/assets/img/ammc.png",
          link: "https://ammcestudiocreativo.com",
        },
        {
          name: "Quinta Balam",
          description:
            "Développement frontend pour un lieu d’hôtellerie et d’événements, mettant l’accent sur la narration visuelle, l’utilisabilité et un design orienté conversion.",
          icon: "🏡",
          imgUrl: "/assets/img/quinta-balam.png",
          link: "https://quintabalam.com",
        },
        {
          name: "Yun Tu Asesora",
          description:
            "Site frontend pour une marque personnelle offrant des services d’assurance et d’épargne, proposant une structure claire et une présence professionnelle grâce à des technologies web légères et maintenables.",
          icon: "💼",
          imgUrl: "/assets/img/yuntuasesora.png",
          link: "https://yuntuasesora.com",
        },
        {
          name: "Mis Dulces Momentos",
          description:
            "Branding et développement frontend pour une entreprise de fêtes et de pâtisseries, créant une identité numérique chaleureuse et expressive alignée sur le ton émotionnel de la marque.",
          icon: "🍰",
          imgUrl: "/assets/img/misdulcesmomentos.png",
          link: "https://misdulcesmomentos.com",
        },
        {
          name: "Hoteles Zhilak",
          description:
            "Développement frontend pour le site d’un groupe d’agences touristiques, axé sur la clarté, la performance et un parcours utilisateur fluide pour les voyageurs potentiels.",
          icon: "🏨",
          imgUrl: "/assets/img/zhilak.png",
          link: "https://hoteleszhilak.com",
        },
        {
          name: "Lumina Glass",
          description:
            "Site frontend pour une entreprise de fabrication et de matériaux, traduisant des offres techniques en une interface claire, accessible et orientée business.",
          icon: "🪟",
          imgUrl: "/assets/img/lumina.png",
          link: "https://luminaglass.mx",
        },
        {
          name: "Twin Tigers",
          description:
            "Branding et développement frontend pour une marque sportive, unifiant l’identité visuelle et la présence web en une expérience numérique cohérente et moderne.",
          icon: "🐯",
          imgUrl: "/assets/img/twin-tigers.png",
          link: "https://twintigers.mx",
        },
      ],

      // Question 4 : Comment réfléchis-tu à l’impact réel et à la collaboration mondiale ?
      [
        {
          name: "Kaanbal",
          description:
            "Président, cofondateur et CTO d’une organisation à but non lucratif axée sur la connectivité communautaire et l’éducation numérique. Depuis 2016, Kaanbal a connecté 30 communautés rurales à travers le Mexique, permettant l’accès à Internet, le développement d’infrastructures locales et le renforcement durable des capacités techniques.",
          icon: "🌱",
          imgUrl: "/assets/img/kaanbal.jpg",
          link: "https://kaanbal.org",
        },
        {
          name: "United Nations",
          description:
            "Intervenant et contributeur mettant en avant le rôle de la connectivité et des technologies dans l’autonomisation des communautés autochtones, en cohérence avec les Objectifs de développement durable des Nations Unies.",
          icon: "🎯",
          imgUrl: "/assets/img/un.jpg",
          link: "https://www.un.org/sustainabledevelopment/blog/2016/12/video-pedro-gonzalez-on-indigenous-communities-and-the-internet/",
        },
        {
          name: "MIT Media Lab",
          description:
            "Intervenant Ignite Talk lors du Connected Learning Summit du MIT Media Lab, partageant des expériences autour des technologies portées par les communautés, de l’apprentissage et de l’inclusion numérique.",
          icon: "💡",
          imgUrl: "/assets/img/mit.jpg",
          link: "https://vimeo.com/284947875",
        },
        {
          name: "World Economic Forum",
          description:
            "Participant au World Economic Forum Plan México (CDMX, 2025), apportant la perspective des jeunes sur la technologie, l’innovation et les stratégies de développement national.",
          icon: "🤝",
          imgUrl: "/assets/img/wef.jpg",
          link: "https://www.facebook.com/GlobalShapers/posts/from-7-8-october-the-world-economic-forum-and-the-government-of-mexico-came-toge/1205407984944373/",
        },
        {
          name: "Global Shapers Community",
          description:
            "Membre fondateur, ancien vice-curateur, curateur et alumni. A dirigé et développé des initiatives portées par la jeunesse autour de l’inclusion numérique, de l’éducation et de l’innovation civique, tout en reliant l’action locale à Cancún à la collaboration mondiale via le réseau du World Economic Forum.",
          icon: "🌍",
          imgUrl: "/assets/img/gs.jpg",
          link: "https://globalshaperscancun.org",
        },
        {
          name: "Internet Society",
          description:
            "Contributeur au programme Connecting the Unconnected et lauréat du Beyond the Net Grant (2016), soutenant des initiatives durables d’inclusion numérique pour des écoles et communautés rurales grâce à des infrastructures gérées localement.",
          icon: "📡",
          imgUrl: "/assets/img/isoc.jpg",
          link: "https://www.internetsociety.org/blog/2016/07/connecting-the-unconnected-the-story-of-a-visit-to-a-school-in-agua-azul-mexico/",
        },
        {
          name: "Government of Mexico",
          description:
            "Reconnu par le gouvernement du Mexique pour des initiatives visant à réduire la fracture numérique et à élargir l’accès aux technologies dans les régions sous-desservies.",
          icon: "🏛️",
          imgUrl: "/assets/img/gobmx.jpg",
          link: "http://www.dgest.gob.mx/ciencia-y-tecnologia/pedro-gonzalez-busca-disminuir-la-brecha-digital-de-mexico-al-mundo",
        },
        {
          name: "Secretaría de Relaciones Exteriores",
          description:
            "Participant invité à des forums internationaux sur l’innovation et la technologie, représentant le Mexique dans des discussions mondiales sur la connectivité et l’inclusion numérique.",
          icon: "🇲🇽",
          imgUrl: "/assets/img/sre.jpg",
          link: "https://mision.sre.gob.mx/onu/index.php/intervenciones/746-innovadores",
        },
        {
          name: "Government of Quintana Roo",
          description:
            "Reconnaissance publique et couverture médiatique pour des contributions à des initiatives de science, de technologie et de développement social dans l’État du Quintana Roo.",
          icon: "🏝️",
          imgUrl: "/assets/img/gobqroo.png",
          link: "https://youtu.be/7qFzDJ4nM9A",
        },
        {
          name: "Salzburg Global Fellowship",
          description:
            "Fellow (Autriche, 2024) du programme Connecting Technologies, collaborant avec des leaders mondiaux pour explorer des approches éthiques, inclusives et tournées vers l’avenir dans l’écosystème des talents et de l’innovation.",
          icon: "🎓",
          imgUrl: "/assets/img/salzburg.jpg",
          link: "https://www.salzburgglobal.org/newsroom/latest-news/uncertain-futures-and-connections-reimagined-connecting-technologies",
        },
        {
          name: "TV Azteca",
          description:
            "Interview mise en avant abordant la technologie, l’innovation et des initiatives à impact social axées sur la connectivité et l’éducation au Mexique.",
          icon: "📺",
          imgUrl: "/assets/img/tvazteca.png",
          link: "https://www.youtube.com/watch?v=W6bhcRPkdLQ",
        },
        {
          name: "Novedades Quintana Roo",
          description:
            "Couverture médiatique mettant en lumière des projets à impact régional centrés sur l’inclusion numérique et l’innovation portée par la jeunesse.",
          icon: "📰",
          imgUrl: "/assets/img/novedades.png",
          link: "https://www.youtube.com/watch?v=TSK7pnEjTZQ",
        },
      ],

      // Question 6 : À quoi ressemble la vie en dehors de la technologie pour toi ?
      [
        {
          name: "21K Cancún",
          description:
            "Finisher du semi-marathon (2024). Mon premier défi d’endurance.",
          icon: "🏃‍♂️",
          imgUrl: "/assets/img/21kcancun.jpg",
          link: "https://asdeporte.com/evento/medio-marato-n-cancu-n-2024-yf2/resultados?resultado=fddeb919-41a7-4467-b778-db6ab3624048",
        },
        {
          name: "Triathlon Sprint - Xel-Há",
          description:
            "Finisher du triathlon sprint (2024). Natation, vélo et course à pied.",
          icon: "🏊‍♂️",
          imgUrl: "/assets/img/tri.jpg",
          link: "https://asdeporte.com/evento/triatlo-n-sprint-y-oli-mpico-xel-ha-2024-70n/resultados?resultado=f7c1cc04-5e47-48c9-8de0-d1f160723856",
        },
        {
          name: "Parachutisme – Certification AFF",
          description:
            "Formation Accelerated Freefall (AFF) complétée. 7ᵉ saut marquant à Puerto Escondido, Oaxaca (2022).",
          icon: "🪂",
          imgUrl: "/assets/img/aff.jpg",
          link: "https://www.facebook.com/reel/5121765457920609",
        },
        {
          name: "Chess.com",
          description:
            "Joue aux échecs avec moi et explore la stratégie, la reconnaissance de schémas et l’apprentissage tout au long de la vie.",
          icon: "♟️",
          imgUrl: "/assets/img/chess.png",
          link: "https://www.chess.com/member/pedroagont",
        },
        {
          name: "21K Madrid",
          description:
            "Finisher du semi-marathon (2024). Ma première expérience de course internationale.",
          icon: "🏃‍♂️",
          imgUrl: "/assets/img/21kmadrid.jpg",
          link: "https://results.sporthive.com/events/7180618688493574912/races/489023/bib/30038",
        },
        {
          name: "21K Tulum",
          description: "Finisher du semi-marathon (2024).",
          icon: "🏃‍♂️",
          imgUrl: "/assets/img/21ktulum.jpg",
          link: "https://asdeporte.com/evento/medio-marato-n-tulum-2024-c9x/resultados?resultado=95460178-5547-4511-8f17-4c9b4de8546e",
        },
        {
          name: "21K El Salvador",
          description: "Finisher du semi-marathon (2025).",
          icon: "🏃‍♂️",
          imgUrl: "/assets/img/21ksalvador.jpg",
          link: "https://results.sporthive.com/events/7322247047332331776/races/493297/bib/2171",
        },
        {
          name: "Parachutisme – 25ᵉ saut",
          description: "Saut marquant numéro 25 à Cuautla, Morelos (2024).",
          icon: "🪂",
          imgUrl: "/assets/img/25.png",
          link: "https://www.facebook.com/reel/2796281807249244",
        },
        {
          name: "Parachutisme – 50ᵉ saut",
          description: "50ᵉ saut marquant (Cuautla, 2025).",
          icon: "🪂",
          imgUrl: "/assets/img/50.png",
          link: "https://www.facebook.com/reel/2796281807249244",
        },
        {
          name: "Muay Thaï & Kickboxing",
          description:
            "Pratiquant actif de Muay Thaï avec expérience de sparring (2026).",
          icon: "🥊",
          imgUrl: "/assets/img/muaythai.png",
          link: "https://www.facebook.com/reel/1302450748305673",
        },
      ],
    ],
  },
  de: {
    title: "Verwandt",
    projectsByQuestion: [
      // Frage 1: Was treibt deine Arbeit in der Technologie an?
      [
        {
          name: "Gobierno Digital",
          description:
            "AI Tech Lead Consultant des GovTech Analytics Teams (2025–2026), mit Fokus auf Full-Stack-Entwicklung, KI und kollaborative Arbeitsweisen zur Visualisierung und Analyse urbaner und öffentlicher Daten. Einsatz von Node.js, React, JWT-Authentifizierung, Leaflet, Recharts, OpenAI sowie Datenanalysetools wie Power BI und Looker Studio zur Unterstützung datenbasierter Entscheidungen für Smart-City-Initiativen.",
          icon: "🏙️",
          imgUrl: "/assets/img/cancun-inteligente.png",
          link: "http://cancun-inteligente.onrender.com",
        },
        {
          name: "Lighthouse Labs Inc",
          description:
            "Full-Stack-Development-Mentor, Dozent und technischer Interviewer (2021–2025). Durchführung von über 5.000 Trainingsstunden für Fachkräfte in Kanada im Rahmen von KI-gestützten Full-Stack-Bootcamps mit PERN (Node.js, Express, PostgreSQL, ReactJS) sowie Ruby on Rails. Fokus auf praxisnahe Projekte, Mentoring, Code-Reviews und 1:1-Sessions.",
          icon: "💡",
          imgUrl: "/assets/img/lhl.jpg",
          link: "https://enterprise.lighthouselabs.ca",
        },
        {
          name: "DEVF",
          description:
            "Full-Stack-Development-Instructor, Community Lead und Content Creator (2019–2021). Ausbildung von mehr als 120 Fachkräften in MERN-Technologien (Node.js, Express, NoSQL MongoDB, ReactJS), Leitung von über 25 Hackathons und Tech-Aktivitäten sowie Erstellung von Bildungsinhalten, Live-Social-Media-Aktivitäten und Unterstützung beim Aufbau von Entwickler-Communities in ganz Lateinamerika.",
          icon: "🧑‍🏫",
          imgUrl: "/assets/img/devf.jpg",
          link: "http://devf.la",
        },
        {
          name: "Tech Garage Innovation Park",
          description:
            "Experience Manager (2016–2018) im ersten Technologie- und Innovationspark von Cancún, Leitung der Coworking-Community, Förderung von Full-Stack-Technologien, Organisation von über 150 Events für mehr als 3.000 Teilnehmende, Startup-Mentoring und Stärkung des regionalen Innovationsökosystems.",
          icon: "🚀",
          imgUrl: "/assets/img/techgarage.jpg",
          link: "https://www.facebook.com/techgaragemx",
        },
        {
          name: "Microsoft Innovation Center",
          description:
            "Community Lead Cancún (2015–2016), Organisation von Technologieprogrammen, Workshops und Events zur Förderung lokaler Innovation, Unternehmertum und digitaler Kompetenzen.",
          icon: "🪟",
          imgUrl: "/assets/img/mic.jpg",
          link: "https://www.microsoft.com/en-us/hub",
        },
        {
          name: "Internet Society",
          description:
            "Vertreter des Mexico Chapters und Koordinator des Internet-of-Things-Programms (2018), Mitarbeit an nationalen und internationalen Initiativen zu Internet-Governance, Konnektivität und Zukunftstechnologien.",
          icon: "🌐",
          imgUrl: "/assets/img/iot.jpg",
          link: "https://www.internetsociety.org",
        },
        {
          name: "Cerebro Digital",
          description:
            "Community Lead und Content Creator (2015–2019), Produktion von Bildungsinhalten, Live-Berichterstattung von Events sowie Organisation von Aktivitäten zu digitaler Kompetenz, Wissenschaft, Technologie und kreativem Lernen.",
          icon: "🧠",
          imgUrl: "/assets/img/cerebrodigital.png",
          link: "https://facebook.com/tucerebrodigital",
        },
        {
          name: "University of Guelph",
          description:
            "Dozent für Full-Stack-Webentwicklung und Projektbewerter, Unterricht in PERN- und Ruby-on-Rails-Stacks sowie Bewertung studentischer Projekte im akademischen Umfeld.",
          icon: "🎓",
          imgUrl: "/assets/img/uog.jpg",
          link: "http://uoguelph.ca",
        },
      ],

      // Frage 2: Erzähle mir von einem Projekt, auf das du besonders stolz bist
      [
        {
          name: "IoT Mobile Robot with DJI Osmo",
          description:
            "IoT-fähiges mobiles Robotikprojekt mit Raspberry Pi und Python, vorgestellt auf dem United Nations Science, Technology and Innovation Forum 2018 zur Demonstration von Echtzeit-Robotik und Medienaufzeichnung.",
          icon: "🤖",
          imgUrl: "/assets/img/iotrobot.jpg",
          link: "https://youtu.be/TT2myChMV28",
        },
        {
          name: "Raspberry Pi Robot Controlled via OSC",
          description:
            "Interaktiver mobiler Roboter mit Raspberry Pi und Python, mit Echtzeit-Fernsteuerung über OSC und TouchOSC, entwickelt für Live-Event-Berichterstattung und Publikumsinteraktion.",
          icon: "🤖",
          imgUrl: "/assets/img/rpi.jpg",
          link: "https://pedroagont.tumblr.com/post/137541587893#137541587893",
        },
        {
          name: "Arduino Robot Controlled with p5",
          description:
            "Mobiles Robotikprojekt mit Arduino und C, in Echtzeit über eine p5-Oberfläche gesteuert, zur Erforschung von Mensch-Maschine-Interaktion und Remote Physical Computing.",
          icon: "🤖",
          imgUrl: "/assets/img/arduino.jpg",
          link: "https://youtu.be/LvywwB-Fqxk",
        },
        {
          name: "Cloud Database for Future Skills Transfer",
          description:
            "Forschungsgetriebenes System zur Erfassung und Synchronisierung von Bewegungs-, Muskel- und Gehirnwellen-Signalen mithilfe von Sensoren und ESP32-Mikrocontrollern mit benutzerdefinierter Embedded-Firmware; Notch-Filter, Feature-Extraktion und ML-Klassifikatoren wurden über ein JWT-basiertes Node.js-Backend mit Socket.IO und OpenAI synchronisiert und anschließend über eine React-basierte Progressive Web App aus der Cloud abgerufen, visualisiert und interaktiv genutzt.",
          icon: "🧠",
          imgUrl: "/assets/img/mirai.png",
          link: "https://www.youtube.com/watch?v=OIXP0Al67ME",
        },
        {
          name: "Cancun Beach 3D Multiplayer Simulator",
          description:
            "Echtzeit-3D-Multiplayer-Umgebung mit Three.js, Node.js und Socket.IO, integriert mit OpenAI-gestützten Interaktionen zur Erforschung sozialer Präsenz und geteilter virtueller Räume.",
          icon: "🌴",
          imgUrl: "/assets/img/cancun-simulator.png",
          link: "https://cancun-beach-simulator.onrender.com",
        },
        {
          name: "Skydive Collector",
          description:
            "Bewegungsgesteuertes 3D-Spiel mit Three.js und der Device Orientation API, das physische Bewegung in Spielmechaniken übersetzt und ein verkörpertes interaktives Erlebnis schafft.",
          icon: "🪂",
          imgUrl: "/assets/img/skydive-collector.jpg",
          link: "https://skydive-collector.onrender.com",
        },
        {
          name: "Hand Rush",
          description:
            "Gestenbasiertes 3D-Spiel mit Three.js und ml5.js Hand Pose, das Computer Vision für Echtzeit-Handtracking und intuitive, berührungslose Interaktion nutzt.",
          icon: "✋",
          imgUrl: "/assets/img/hand-rush.png",
          link: "https://hand-rush-3d-game.onrender.com",
        },
        {
          name: "d3stinations",
          description:
            "Interaktive 3D-Globus-Reisebuchungsplattform mit Three.js, Geolokalisierung und der Travelpayouts API, die globale Reiseziele und räumliche Daten in einer immersiven, explorativen Oberfläche visualisiert und Einnahmen generiert.",
          icon: "🌍",
          imgUrl: "/assets/img/d3stinations.png",
          link: "https://d3stinations.world",
        },
        {
          name: "Color Classifier Line",
          description:
            "Robotik-Experiment mit LEGO Mindstorms zur Klassifizierung und Sortierung von Objekten nach Farbe, zur Erforschung von Sensorik, Automatisierung und physischem Feedback.",
          icon: "🎨",
          imgUrl: "/assets/img/classifier.png",
          link: "https://youtu.be/1no7NbHiN4E",
        },
        {
          name: "Rubik’s Cube Solver",
          description:
            "Algorithmisches Robotikprojekt mit LEGO EV3 zur mechanischen Lösung eines Rubik-Würfels, das logisches Problemlösen mit physischer Ausführung kombiniert.",
          icon: "🧩",
          imgUrl: "/assets/img/rubik.png",
          link: "https://www.youtube.com/watch?v=TyOzVxzmnO8",
        },
      ],

      // Frage 3: Wie verwandelst du Ideen in funktionale, kreative digitale Produkte für Kund:innen?
      [
        {
          name: "Multiple Assessment Projects",
          description:
            "Frontend-Entwicklung für ein Drohnen-LiDAR-Unternehmen, mit einer sauberen und barrierearmen Benutzeroberfläche auf Basis von HTML, BootstrapCSS und JavaScript zur Präsentation von Projektfällen aus Bauwesen und Stadtplanung.",
          icon: "🚁",
          imgUrl: "/assets/img/map.png",
          link: "https://mxmap.org",
        },
        {
          name: "Ticket Flyers",
          description:
            "End-to-End-Branding und Frontend-Entwicklung für eine Flug- und Hotelbuchungsplattform, inklusive Integration der Travelpayouts-API zur Ermöglichung realer Transaktionen und Monetarisierung.",
          icon: "✈️",
          imgUrl: "/assets/img/ticketflyers.jpg",
          link: "https://ticketflyers.com",
        },
        {
          name: "Coquelicot",
          description:
            "Stilvolle E-Commerce-Website für Handyhüllen, entwickelt mit Shopify und Webflow, mit Fokus auf Markenexpression, Conversion-Optimierung und ein reibungsloses Einkaufserlebnis.",
          icon: "🛍️",
          imgUrl: "/assets/img/coquelicot.png",
          link: "https://coquelicot.online",
        },
        {
          name: "Centro Evaluador",
          description:
            "Branding und WordPress-basierte Frontend-Entwicklung für ein Bildungs-Evaluationszentrum, das institutionelle Identität mit einer klaren und vertrauenswürdigen digitalen Präsenz verbindet.",
          icon: "🏛️",
          imgUrl: "/assets/img/centroevaluador.png",
          link: "https://centroevaluador.mx",
        },
        {
          name: "MyDoctorAway",
          description:
            "Branding und Frontend-Entwicklung für eine medizinische On-Demand-Plattform mit Fokus auf Klarheit, Vertrauen und einfachen Zugang für internationale und lokale Nutzer:innen.",
          icon: "🩺",
          imgUrl: "/assets/img/mydoctoraway.png",
          link: "https://mydoctoraway.com",
        },
        {
          name: "Sax Palacios",
          description:
            "Frontend-Entwicklung für die Website eines professionellen Musikers, inklusive Stripe-Integration zur direkten Buchung und zum Verkauf digitaler Dienstleistungen.",
          icon: "🎷",
          imgUrl: "/assets/img/sax-palacios.png",
          link: "https://palaciossax.com",
        },
        {
          name: "BIM Central",
          description:
            "WordPress-Website-Entwicklung für eine Plattform professioneller Dienstleistungen, mit integrierten PayPal-Zahlungen zur Unterstützung digitaler Produktverkäufe und des Kunden-Onboardings.",
          icon: "🏗️",
          imgUrl: "/assets/img/bim.png",
          link: "https://bimcentral.com.mx",
        },
        {
          name: "Shapers Academy",
          description:
            "Full-Stack-Entwicklung einer Online-Lernplattform mit Node.js und klassischen Webtechnologien, konzipiert für skalierbare Bildung und gemeinschaftsorientiertes Lernen.",
          icon: "🎓",
          imgUrl: "/assets/img/shapers-academy.png",
          link: "https://shapers.academy",
        },
        {
          name: "AMMC Estudio Creativo",
          description:
            "Frontend-Website mit Tailwind CSS, die die visuelle Identität eines Kreativstudios in ein schnelles, responsives und modernes digitales Erlebnis übersetzt.",
          icon: "🎨",
          imgUrl: "/assets/img/ammc.png",
          link: "https://ammcestudiocreativo.com",
        },
        {
          name: "Quinta Balam",
          description:
            "Frontend-Entwicklung für einen Veranstaltungs- und Hospitality-Ort mit Fokus auf visuelles Storytelling, Benutzerfreundlichkeit und conversion-orientiertes Design.",
          icon: "🏡",
          imgUrl: "/assets/img/quinta-balam.png",
          link: "https://quintabalam.com",
        },
        {
          name: "Yun Tu Asesora",
          description:
            "Frontend-Website für eine Personal Brand im Bereich Versicherungen und Sparprodukte, mit klarer Struktur und professioneller Präsenz auf Basis wartungsarmer Webtechnologien.",
          icon: "💼",
          imgUrl: "/assets/img/yuntuasesora.png",
          link: "https://yuntuasesora.com",
        },
        {
          name: "Mis Dulces Momentos",
          description:
            "Branding und Frontend-Entwicklung für ein Party- und Süßwarenunternehmen, mit einer warmen und ausdrucksstarken digitalen Identität im Einklang mit dem emotionalen Markenauftritt.",
          icon: "🍰",
          imgUrl: "/assets/img/misdulcesmomentos.png",
          link: "https://misdulcesmomentos.com",
        },
        {
          name: "Hoteles Zhilak",
          description:
            "Frontend-Entwicklung für die Website einer touristischen Unternehmensgruppe, mit Fokus auf Klarheit, Performance und eine reibungslose User Journey für potenzielle Reisende.",
          icon: "🏨",
          imgUrl: "/assets/img/zhilak.png",
          link: "https://hoteleszhilak.com",
        },
        {
          name: "Lumina Glass",
          description:
            "Frontend-Website für ein Unternehmen aus der Fertigungs- und Materialbranche, das technische Leistungen in eine klare, zugängliche und geschäftsorientierte Benutzeroberfläche übersetzt.",
          icon: "🪟",
          imgUrl: "/assets/img/lumina.png",
          link: "https://luminaglass.mx",
        },
        {
          name: "Twin Tigers",
          description:
            "Branding und Frontend-Entwicklung für eine Sportmarke, die visuelle Identität und Web-Präsenz zu einem konsistenten, modernen digitalen Auftritt vereint.",
          icon: "🐯",
          imgUrl: "/assets/img/twin-tigers.png",
          link: "https://twintigers.mx",
        },
      ],

      // Frage 4: Wie denkst du über reale Wirkung und globale Zusammenarbeit?
      [
        {
          name: "Kaanbal",
          description:
            "Präsident, Mitgründer und CTO einer gemeinnützigen Organisation mit Fokus auf gemeinschaftseigene Konnektivität und digitale Bildung. Seit 2016 hat Kaanbal 30 ländliche Gemeinden in ganz Mexiko vernetzt und damit Internetzugang, lokale Infrastruktur sowie langfristigen Aufbau technischer Kompetenzen ermöglicht.",
          icon: "🌱",
          imgUrl: "/assets/img/kaanbal.jpg",
          link: "https://kaanbal.org",
        },
        {
          name: "United Nations",
          description:
            "Redner und Mitwirkender, der die Rolle von Konnektivität und Technologie bei der Stärkung indigener Gemeinschaften hervorhebt, im Einklang mit den Zielen für nachhaltige Entwicklung der Vereinten Nationen.",
          icon: "🎯",
          imgUrl: "/assets/img/un.jpg",
          link: "https://www.un.org/sustainabledevelopment/blog/2016/12/video-pedro-gonzalez-on-indigenous-communities-and-the-internet/",
        },
        {
          name: "MIT Media Lab",
          description:
            "Ignite-Talk-Sprecher beim MIT Media Lab Connected Learning Summit, mit Beiträgen zu gemeinschaftsgetriebener Technologie, Lernen und digitaler Inklusion.",
          icon: "💡",
          imgUrl: "/assets/img/mit.jpg",
          link: "https://vimeo.com/284947875",
        },
        {
          name: "World Economic Forum",
          description:
            "Teilnehmer am World Economic Forum Plan México (CDMX, 2025), mit Beiträgen aus der Perspektive junger Menschen zu Technologie, Innovation und nationalen Entwicklungsstrategien.",
          icon: "🤝",
          imgUrl: "/assets/img/wef.jpg",
          link: "https://www.facebook.com/GlobalShapers/posts/from-7-8-october-the-world-economic-forum-and-the-government-of-mexico-came-toge/1205407984944373/",
        },
        {
          name: "Global Shapers Community",
          description:
            "Gründungsmitglied, ehemaliger Vice Curator, Curator und Alumni. Leitung und Skalierung jugendgetriebener Initiativen zu digitaler Inklusion, Bildung und zivilgesellschaftlicher Innovation sowie Verbindung lokaler Aktivitäten in Cancún mit globaler Zusammenarbeit über das Netzwerk des World Economic Forums.",
          icon: "🌍",
          imgUrl: "/assets/img/gs.jpg",
          link: "https://globalshaperscancun.org",
        },
        {
          name: "Internet Society",
          description:
            "Mitwirkender am Programm Connecting the Unconnected und Empfänger des Beyond the Net Grants (2016), zur Unterstützung nachhaltiger digitaler Inklusionsinitiativen für ländliche Schulen und Gemeinden durch lokal verwaltete Infrastruktur.",
          icon: "📡",
          imgUrl: "/assets/img/isoc.jpg",
          link: "https://www.internetsociety.org/blog/2016/07/connecting-the-unconnected-the-story-of-a-visit-to-a-school-in-agua-azul-mexico/",
        },
        {
          name: "Government of Mexico",
          description:
            "Anerkennung durch die Regierung Mexikos für Initiativen zur Verringerung der digitalen Kluft und zur Ausweitung des Zugangs zu Technologie in unterversorgten Regionen.",
          icon: "🏛️",
          imgUrl: "/assets/img/gobmx.jpg",
          link: "http://www.dgest.gob.mx/ciencia-y-tecnologia/pedro-gonzalez-busca-disminuir-la-brecha-digital-de-mexico-al-mundo",
        },
        {
          name: "Secretaría de Relaciones Exteriores",
          description:
            "Eingeladener Teilnehmer an internationalen Foren zu Innovation und Technologie, der Mexiko in globalen Diskussionen über Konnektivität und digitale Inklusion vertritt.",
          icon: "🇲🇽",
          imgUrl: "/assets/img/sre.jpg",
          link: "https://mision.sre.gob.mx/onu/index.php/intervenciones/746-innovadores",
        },
        {
          name: "Government of Quintana Roo",
          description:
            "Öffentliche Anerkennung und Medienberichte für Beiträge zu Initiativen in den Bereichen Wissenschaft, Technologie und soziale Entwicklung im Bundesstaat Quintana Roo.",
          icon: "🏝️",
          imgUrl: "/assets/img/gobqroo.png",
          link: "https://youtu.be/7qFzDJ4nM9A",
        },
        {
          name: "Salzburg Global Fellowship",
          description:
            "Fellow (Österreich, 2024) im Programm Connecting Technologies, Zusammenarbeit mit globalen Führungspersönlichkeiten zur Erforschung ethischer, inklusiver und zukunftsorientierter Ansätze im Talent- und Innovationsökosystem.",
          icon: "🎓",
          imgUrl: "/assets/img/salzburg.jpg",
          link: "https://www.salzburgglobal.org/newsroom/latest-news/uncertain-futures-and-connections-reimagined-connecting-technologies",
        },
        {
          name: "TV Azteca",
          description:
            "Interviewbeitrag zu Technologie-, Innovations- und Sozialwirkungsinitiativen mit Schwerpunkt auf Konnektivität und Bildung in Mexiko.",
          icon: "📺",
          imgUrl: "/assets/img/tvazteca.png",
          link: "https://www.youtube.com/watch?v=W6bhcRPkdLQ",
        },
        {
          name: "Novedades Quintana Roo",
          description:
            "Medienberichterstattung über regionale Wirkungsprojekte mit Fokus auf digitale Inklusion und von Jugendlichen getriebene Innovation.",
          icon: "📰",
          imgUrl: "/assets/img/novedades.png",
          link: "https://www.youtube.com/watch?v=TSK7pnEjTZQ",
        },
      ],
      // Frage 6: Wie sieht dein Leben außerhalb der Technologie aus?
      [
        {
          name: "21K Cancún",
          description:
            "Halbmarathon-Finisher (2024). Meine erste Ausdauer-Herausforderung.",
          icon: "🏃‍♂️",
          imgUrl: "/assets/img/21kcancun.jpg",
          link: "https://asdeporte.com/evento/medio-marato-n-cancu-n-2024-yf2/resultados?resultado=fddeb919-41a7-4467-b778-db6ab3624048",
        },
        {
          name: "Triathlon Sprint – Xel-Há",
          description:
            "Sprint-Triathlon-Finisher (2024). Schwimmen, Radfahren und Laufen.",
          icon: "🏊‍♂️",
          imgUrl: "/assets/img/tri.jpg",
          link: "https://asdeporte.com/evento/triatlo-n-sprint-y-oli-mpico-xel-ha-2024-70n/resultados?resultado=f7c1cc04-5e47-48c9-8de0-d1f160723856",
        },
        {
          name: "Fallschirmspringen – AFF-Zertifizierung",
          description:
            "Abgeschlossene Accelerated Freefall (AFF) Ausbildung. Meilenstein: 7. Sprung in Puerto Escondido, Oaxaca (2022).",
          icon: "🪂",
          imgUrl: "/assets/img/aff.jpg",
          link: "https://www.facebook.com/reel/5121765457920609",
        },
        {
          name: "Chess.com",
          description:
            "Spiele Schach mit mir und entdecke Strategie, Mustererkennung und lebenslanges Lernen.",
          icon: "♟️",
          imgUrl: "/assets/img/chess.png",
          link: "https://www.chess.com/member/pedroagont",
        },
        {
          name: "21K Madrid",
          description:
            "Halbmarathon-Finisher (2024). Meine erste internationale Lauferfahrung.",
          icon: "🏃‍♂️",
          imgUrl: "/assets/img/21kmadrid.jpg",
          link: "https://results.sporthive.com/events/7180618688493574912/races/489023/bib/30038",
        },
        {
          name: "21K Tulum",
          description: "Halbmarathon-Finisher (2024).",
          icon: "🏃‍♂️",
          imgUrl: "/assets/img/21ktulum.jpg",
          link: "https://asdeporte.com/evento/medio-marato-n-tulum-2024-c9x/resultados?resultado=95460178-5547-4511-8f17-4c9b4de8546e",
        },
        {
          name: "21K El Salvador",
          description: "Halbmarathon-Finisher (2025).",
          icon: "🏃‍♂️",
          imgUrl: "/assets/img/21ksalvador.jpg",
          link: "https://results.sporthive.com/events/7322247047332331776/races/493297/bib/2171",
        },
        {
          name: "Fallschirmspringen – 25. Sprung",
          description: "Meilenstein-Sprung in Cuautla, Morelos (2024).",
          icon: "🪂",
          imgUrl: "/assets/img/25.png",
          link: "https://www.facebook.com/reel/2796281807249244",
        },
        {
          name: "Fallschirmspringen – 50. Sprung",
          description: "50. Fallschirmsprung-Meilenstein (Cuautla, 2025).",
          icon: "🪂",
          imgUrl: "/assets/img/50.png",
          link: "https://www.facebook.com/reel/2796281807249244",
        },
        {
          name: "Muay Thai & Kickboxen",
          description:
            "Aktiver Muay-Thai-Praktizierender mit Sparring-Erfahrung (2026).",
          icon: "🥊",
          imgUrl: "/assets/img/muaythai.png",
          link: "https://www.facebook.com/reel/1302450748305673",
        },
      ],
    ],
  },
};

const content = {
  en: {
    greeting: "Hello. What would you like to know?",
    exploreMore: "Would you like to explore something else?",
    questions: [
      {
        q: "What drives your work in technology, AI and innovation?",
        a: "The best innovation extends freedom and possibility, not dependency. I see technology and AI as tools to expand how people think, create, and experience the world. My work sits at the intersection of software engineering, physical computing, talent development, and community-driven innovation, with the goal of going beyond functional solutions to genuinely improve people’s lives. This perspective has been shaped by leading coworking spaces like Tech Garage and Microsoft Innovation Center in Cancún, where I contributed organizing 150+ events for over 3,000 participants of the regional ecosystem. During my experience at DEVF and Lighthouse Labs, I had the opportunity to train more than 50 cohorts, working with hundreds of early-career developers across Canada and Latin America, through over 5,000 cumulative hours of full-stack training, dozens of real-world projects, technical interviews, and 1:1 mentoring. I’ve also led and contributed to AI GovTech data-driven projects to support smarter public decision-making. Whether I’m building software, training engineers, or developing social impact initiatives across Latin America and globally, I’m always asking: <em>how does this deepen agency, understanding, and possibility?</em>",
      },
      {
        q: "Tell me about a project you're most proud of.",
        a: "One of the most formative chapters of my career was my research work on future technologies in Osaka, Japan, where I explored data sciences and neurotech, how human motion, muscle activity, and brainwave signals can be captured, processed, and shared digitally. The project combined physical computing with software engineering: real-time data was collected using sensors and ESP32 microcontrollers with custom C++ embedded firmware; notch filters, feature extraction and ML tensorflow classifiers were synchronized through a JWT Node.js backend with Socket.IO and OpenAI; for then to be fetched, visualized and interacted through a React-based Progressive Web App interface, all deployed in the cloud. I have broader experience in software architecture and systems design, implementing data analysis, robotics, 3D games, full-stack applications, and coding with AI-powered agents (OpenAI, Claude, Replit, Lovable, Base44, MCP), all focused on creating meaningful, human-centered technology.",
      },
      {
        q: "How do you turn ideas into functional, creative digital products for clients?",
        a: "I treat every client project as a collaborative creative process, blending design and branding with development to build cohesive experiences and solve business needs across websites, games, e-commerce platforms, blogs, and interactive applications. I’ve led and worked with fully remote teams across borders, time zones, and languages, contributing across UI/UX design, naming and branding, mobile, frontend and backend development, content strategy, social media assets, and audio/video production. For me, the most important aspect is to shape a working process where ideas move quickly from concept to execution, where clients and stakeholders feel trusted and engaged, allowing innovation and impactful products to emerge organically.",
      },
      {
        q: "How do you think about real-world impact and global collaboration?",
        a: "I think in terms of connecting global knowledge to local realities. Through projects like Kaanbal, we built community-owned connectivity and enabled digital education in more than 30 rural schools across Mexico with no prior internet access. That experience reinforced my belief that lasting impact comes from adapting global technologies with local ownership and long-term capacity building. This work led to international collaboration and grants from organizations such as Internet Society, United Nations, and Salzburg Global, as well as to feature during events in institutions like MIT Media Lab, Harvard Business School and TU Berlin. Through Global Shapers and the World Economic Forum, we've created pathways to execute impactful local initiatives and contribute young people to participate in international conversations and collaborations, translating global dialogue into sustained local action.",
      },
      {
        q: "What does life outside of technology look like for you?",
        a: "I see creativity, movement, and exploration as extensions of my technical work and human experience. I like to play chess, work with pottery, and to experiment with electronics. Music plays an important role in my life, I play guitar and bass, exploring from classical music, bossa nova, jazz, tango and flamenco. I also travel frequently and embrace a digital nomad lifestyle across cultures and environments as a way to stay curious and challenge my assumptions. Athletically, I run, practice Muay Thai, skydive, and train for endurance challenges like marathons and triathlons. These practices keep me humble and focused, cultivating resilience and long-term discipline.",
      },
    ],
  },
  es: {
    greeting: "Hola. ¿Qué te gustaría saber?",
    exploreMore: "¿Te gustaría explorar algo más?",
    questions: [
      {
        q: "¿Qué impulsa tu trabajo en tecnología, IA e innovación?",
        a: "La mejor innovación amplía la libertad y las posibilidades, no la dependencia. Veo la tecnología y la inteligencia artificial como herramientas para expandir la forma en que las personas piensan, crean y experimentan el mundo. Mi trabajo se sitúa en la intersección entre la ingeniería de software, la computación física, el desarrollo de talento y la innovación impulsada por comunidades, con el objetivo de ir más allá de soluciones meramente funcionales para mejorar genuinamente la vida de las personas. Esta perspectiva se ha formado a través de espacios de coworking líderes como Tech Garage y Microsoft Innovation Center en Cancún, donde contribuí a la organización de más de 150 eventos para más de 3,000 participantes del ecosistema regional. Durante mi experiencia en DEVF y Lighthouse Labs, tuve la oportunidad de formar a más de 50 cohortes, trabajando con cientos de desarrolladores en etapa temprana en Canadá y América Latina, a lo largo de más de 5,000 horas acumuladas de formación full-stack, decenas de proyectos del mundo real, entrevistas técnicas y mentorías 1:1. También he liderado y colaborado en proyectos de IA y GovTech basados en datos para apoyar una toma de decisiones públicas más inteligente. Ya sea desarrollando software, formando ingenieros o impulsando iniciativas de impacto social en América Latina y a nivel global, siempre me hago la misma pregunta: <em>¿cómo profundiza esto la agencia, la comprensión y las posibilidades?</em>",
      },
      {
        q: "Cuéntame sobre el proyecto del que te sientes más orgulloso.",
        a: "Uno de los capítulos más formativos de mi carrera fue mi trabajo de investigación en tecnologías del futuro en Osaka, Japón, donde exploré ciencia de datos y neurotecnología, analizando cómo el movimiento humano, la actividad muscular y las señales cerebrales pueden capturarse, procesarse y compartirse digitalmente. El proyecto combinó computación física con ingeniería de software: los datos en tiempo real se recolectaban mediante sensores y microcontroladores ESP32 con firmware embebido en C++ desarrollado a medida; filtros notch, extracción de características y clasificadores de machine learning con TensorFlow se sincronizaban a través de un backend en Node.js con JWT, Socket.IO y OpenAI; para luego ser consumidos, visualizados e interactuados mediante una Progressive Web App basada en React, todo desplegado en la nube. Tengo además una experiencia amplia en arquitectura de software y diseño de sistemas, implementando análisis de datos, robótica, videojuegos 3D, aplicaciones full-stack y programación con agentes impulsados por IA (OpenAI, Claude, Replit, Lovable, Base44, MCP), siempre enfocado en crear tecnología significativa y centrada en las personas.",
      },
      {
        q: "¿Cómo conviertes ideas en productos digitales funcionales y creativos para clientes?",
        a: "Trato cada proyecto con clientes como un proceso creativo colaborativo, combinando diseño y branding con desarrollo para construir experiencias coherentes y resolver necesidades de negocio en sitios web, juegos, plataformas de comercio electrónico, blogs y aplicaciones interactivas. He liderado y colaborado con equipos completamente remotos a través de fronteras, zonas horarias e idiomas, contribuyendo en áreas como diseño UI/UX, naming y branding, desarrollo móvil, frontend y backend, estrategia de contenidos, activos para redes sociales y producción de audio y video. Para mí, lo más importante es diseñar un proceso de trabajo donde las ideas se muevan rápidamente del concepto a la ejecución, donde clientes y stakeholders se sientan confiados y comprometidos, permitiendo que la innovación y los productos de alto impacto emerjan de forma orgánica.",
      },
      {
        q: "¿Cómo piensas el impacto en el mundo real y la colaboración global?",
        a: "Pienso en términos de conectar el conocimiento global con las realidades locales. A través de proyectos como Kaanbal, construimos conectividad comunitaria y habilitamos educación digital en más de 30 escuelas rurales en México que no contaban previamente con acceso a internet. Esa experiencia reforzó mi convicción de que el impacto duradero proviene de adaptar tecnologías globales con apropiación local y desarrollo de capacidades a largo plazo. Este trabajo derivó en colaboraciones internacionales y financiamiento de organizaciones como Internet Society, Naciones Unidas y Salzburg Global, así como en presentaciones en instituciones como MIT Media Lab, Harvard Business School y TU Berlin. A través de Global Shapers y el World Economic Forum, hemos creado caminos para ejecutar iniciativas locales de impacto y para que jóvenes participen en conversaciones y colaboraciones internacionales, traduciendo el diálogo global en acción local sostenida.",
      },
      {
        q: "¿Cómo es tu vida fuera de la tecnología?",
        a: "Veo la creatividad, el movimiento y la exploración como extensiones de mi trabajo técnico y de la experiencia humana. Me gusta jugar ajedrez, trabajar con cerámica y experimentar con electrónica. La música ocupa un lugar importante en mi vida: toco guitarra y bajo, explorando desde música clásica, bossa nova y jazz, hasta tango y flamenco. También viajo con frecuencia y adopto un estilo de vida de nómada digital entre distintas culturas y entornos como una forma de mantener la curiosidad y cuestionar mis propias suposiciones. En lo deportivo, corro, practico Muay Thai, hago paracaidismo y entreno para retos de resistencia como maratones y triatlones. Estas prácticas me mantienen humilde y enfocado, cultivando resiliencia y disciplina a largo plazo.",
      },
    ],
  },
  fr: {
    greeting: "Bonjour. Que souhaitez-vous savoir ?",
    exploreMore: "Souhaitez-vous explorer autre chose ?",
    questions: [
      {
        q: "Qu’est-ce qui motive votre travail dans la technologie, l’IA et l’innovation ?",
        a: "La meilleure innovation élargit la liberté et les possibilités, et non la dépendance. Je considère la technologie et l’IA comme des outils permettant d’élargir la manière dont les personnes pensent, créent et font l’expérience du monde. Mon travail se situe à l’intersection de l’ingénierie logicielle, de l’informatique physique, du développement des talents et de l’innovation portée par les communautés, avec pour objectif d’aller au-delà de solutions purement fonctionnelles afin d’améliorer réellement la vie des personnes. Cette perspective a été façonnée par mon implication dans des espaces de coworking de référence tels que Tech Garage et le Microsoft Innovation Center à Cancún, où j’ai contribué à l’organisation de plus de 150 événements pour plus de 3,000 participants de l’écosystème régional. Lors de mon expérience chez DEVF et Lighthouse Labs, j’ai eu l’opportunité de former plus de 50 cohortes, en accompagnant des centaines de développeurs en début de carrière à travers le Canada et l’Amérique latine, grâce à plus de 5,000 heures cumulées de formation full-stack, des dizaines de projets concrets, des entretiens techniques et du mentorat individuel. J’ai également dirigé et contribué à des projets GovTech basés sur l’IA et les données afin de soutenir une prise de décision publique plus éclairée. Que je développe des logiciels, que je forme des ingénieurs ou que je mène des initiatives à impact social en Amérique latine et à l’échelle mondiale, je me pose toujours la question : <em>comment cela renforce-t-il l’autonomie, la compréhension et les possibilités ?</em>",
      },
      {
        q: "Parlez-moi du projet dont vous êtes le plus fier.",
        a: "L’un des chapitres les plus marquants de ma carrière a été mon travail de recherche sur les technologies du futur à Osaka, au Japon, où j’ai exploré la science des données et la neurotechnologie, en étudiant comment les mouvements humains, l’activité musculaire et les signaux cérébraux peuvent être captés, traités et partagés numériquement. Le projet combinait l’informatique physique et l’ingénierie logicielle : des données en temps réel étaient collectées à l’aide de capteurs et de microcontrôleurs ESP32 avec un firmware embarqué personnalisé en C++ ; des filtres notch, l’extraction de caractéristiques et des classificateurs de machine learning avec TensorFlow étaient synchronisés via un backend Node.js utilisant JWT, Socket.IO et OpenAI ; puis récupérés, visualisés et explorés à travers une Progressive Web App basée sur React, le tout déployé dans le cloud. Je dispose également d’une solide expérience en architecture logicielle et en conception de systèmes, avec la mise en œuvre d’analyses de données, de robotique, de jeux 3D, d’applications full-stack et de programmation avec des agents propulsés par l’IA (OpenAI, Claude, Replit, Lovable, Base44, MCP), toujours orientée vers la création de technologies significatives et centrées sur l’humain.",
      },
      {
        q: "Comment transformez-vous des idées en produits numériques fonctionnels et créatifs pour vos clients ?",
        a: "Je considère chaque projet client comme un processus créatif collaboratif, en combinant design et branding avec le développement afin de construire des expériences cohérentes et de répondre aux besoins métiers à travers des sites web, des jeux, des plateformes e-commerce, des blogs et des applications interactives. J’ai dirigé et collaboré avec des équipes entièrement à distance, au-delà des frontières, des fuseaux horaires et des langues, en contribuant au design UI/UX, au naming et au branding, au développement mobile, frontend et backend, à la stratégie de contenu, aux supports pour les réseaux sociaux ainsi qu’à la production audio et vidéo. Pour moi, l’aspect le plus important est de mettre en place un processus de travail où les idées passent rapidement du concept à l’exécution, où les clients et parties prenantes se sentent en confiance et impliqués, permettant à l’innovation et aux produits à fort impact d’émerger de manière organique.",
      },
      {
        q: "Comment abordez-vous l’impact dans le monde réel et la collaboration globale ?",
        a: "Je réfléchis en termes de connexion entre le savoir global et les réalités locales. À travers des projets comme Kaanbal, nous avons construit une connectivité communautaire et permis l’éducation numérique dans plus de 30 écoles rurales au Mexique qui n’avaient auparavant aucun accès à Internet. Cette expérience a renforcé ma conviction que l’impact durable repose sur l’adaptation des technologies globales avec une appropriation locale et un développement des capacités sur le long terme. Ce travail a conduit à des collaborations internationales et à des financements de la part d’organisations telles que l’Internet Society, les Nations Unies et Salzburg Global, ainsi qu’à des présentations lors d’événements dans des institutions comme le MIT Media Lab, la Harvard Business School et la TU Berlin. À travers Global Shapers et le World Economic Forum, nous avons créé des passerelles pour mettre en œuvre des initiatives locales à fort impact et permettre aux jeunes de participer à des conversations et collaborations internationales, en traduisant le dialogue global en action locale durable.",
      },
      {
        q: "À quoi ressemble votre vie en dehors de la technologie ?",
        a: "Je considère la créativité, le mouvement et l’exploration comme des prolongements de mon travail technique et de l’expérience humaine. J’aime jouer aux échecs, travailler la céramique et expérimenter avec l’électronique. La musique occupe une place importante dans ma vie : je joue de la guitare et de la basse, en explorant aussi bien la musique classique que la bossa nova, le jazz, le tango et le flamenco. Je voyage également fréquemment et adopte un mode de vie de nomade numérique à travers différentes cultures et environnements, comme une manière de rester curieux et de remettre en question mes propres hypothèses. Sur le plan sportif, je cours, je pratique le muay thaï, le parachutisme et je m’entraîne pour des défis d’endurance tels que les marathons et les triathlons. Ces pratiques me permettent de rester humble et concentré, tout en cultivant la résilience et la discipline sur le long terme.",
      },
    ],
  },
  de: {
    greeting: "Hallo. Was möchten Sie wissen?",
    exploreMore: "Möchten Sie noch etwas anderes entdecken?",
    questions: [
      {
        q: "Was treibt Ihre Arbeit in Technologie, KI und Innovation an?",
        a: "Die beste Innovation erweitert Freiheit und Möglichkeiten – nicht Abhängigkeit. Ich sehe Technologie und KI als Werkzeuge, um zu erweitern, wie Menschen denken, schaffen und die Welt erleben. Meine Arbeit bewegt sich an der Schnittstelle von Softwareentwicklung, Physical Computing, Talententwicklung und gemeinschaftsgetriebener Innovation, mit dem Ziel, über rein funktionale Lösungen hinauszugehen und das Leben von Menschen wirklich zu verbessern. Diese Perspektive wurde durch führende Coworking-Spaces wie Tech Garage und das Microsoft Innovation Center in Cancún geprägt, wo ich an der Organisation von über 150 Veranstaltungen für mehr als 3.000 Teilnehmende des regionalen Ökosystems mitgewirkt habe. Während meiner Tätigkeit bei DEVF und Lighthouse Labs hatte ich die Möglichkeit, mehr als 50 Cohorts zu betreuen und mit Hunderten von Entwickler:innen am Anfang ihrer Karriere in Kanada und Lateinamerika zu arbeiten – durch über 5.000 kumulative Stunden Full-Stack-Training, Dutzende praxisnaher Projekte, technische Interviews und 1:1-Mentoring. Zudem habe ich KI-gestützte, datengetriebene GovTech-Projekte geleitet und daran mitgewirkt, um eine intelligentere öffentliche Entscheidungsfindung zu unterstützen. Ob ich Software entwickle, Ingenieur:innen ausbilde oder Social-Impact-Initiativen in Lateinamerika und weltweit vorantreibe – ich stelle mir stets die Frage: <em>Wie vertieft dies Handlungsfähigkeit, Verständnis und Möglichkeiten?</em>",
      },
      {
        q: "Erzählen Sie mir von dem Projekt, auf das Sie am meisten stolz sind.",
        a: "Eines der prägendsten Kapitel meiner Karriere war meine Forschungsarbeit zu Zukunftstechnologien in Osaka, Japan, bei der ich mich mit Data Science und Neurotechnologie beschäftigt habe – insbesondere damit, wie menschliche Bewegung, Muskelaktivität und Gehirnwellensignale erfasst, verarbeitet und digital geteilt werden können. Das Projekt verband Physical Computing mit Software Engineering: Echtzeitdaten wurden über Sensoren und ESP32-Mikrocontroller mit maßgeschneiderter eingebetteter C++-Firmware erfasst; Notch-Filter, Feature-Extraktion und Machine-Learning-Klassifikatoren mit TensorFlow wurden über ein Node.js-Backend mit JWT, Socket.IO und OpenAI synchronisiert; anschließend wurden die Daten über eine React-basierte Progressive Web App abgerufen, visualisiert und interaktiv genutzt – alles in der Cloud bereitgestellt. Darüber hinaus verfüge ich über umfassende Erfahrung in Softwarearchitektur und Systemdesign, einschließlich Datenanalyse, Robotik, 3D-Spielen, Full-Stack-Anwendungen und der Arbeit mit KI-gestützten Agenten (OpenAI, Claude, Replit, Lovable, Base44, MCP), stets mit dem Fokus auf die Entwicklung sinnvoller, menschenzentrierter Technologie.",
      },
      {
        q: "Wie verwandeln Sie Ideen in funktionale, kreative digitale Produkte für Kund:innen?",
        a: "Ich betrachte jedes Kundenprojekt als einen kollaborativen kreativen Prozess und verbinde Design und Branding mit Entwicklung, um stimmige Erlebnisse zu schaffen und geschäftliche Anforderungen über Websites, Spiele, E-Commerce-Plattformen, Blogs und interaktive Anwendungen hinweg zu lösen. Ich habe vollständig remote arbeitende Teams über Länder-, Zeit- und Sprachgrenzen hinweg geleitet und mit ihnen zusammengearbeitet und dabei Beiträge in UI/UX-Design, Naming und Branding, mobiler Entwicklung, Frontend und Backend, Content-Strategie sowie Social-Media-Assets und Audio-/Videoproduktion geleistet. Für mich ist der wichtigste Aspekt, einen Arbeitsprozess zu gestalten, in dem Ideen schnell vom Konzept zur Umsetzung gelangen und Kund:innen sowie Stakeholder sich eingebunden und vertrauensvoll fühlen – sodass Innovation und wirkungsvolle Produkte organisch entstehen können.",
      },
      {
        q: "Wie denken Sie über realen Impact und globale Zusammenarbeit?",
        a: "Ich denke in Kategorien der Verbindung von globalem Wissen mit lokalen Realitäten. Durch Projekte wie Kaanbal haben wir gemeinschaftseigene Konnektivität aufgebaut und digitale Bildung in mehr als 30 ländlichen Schulen in Mexiko ermöglicht, die zuvor keinen Internetzugang hatten. Diese Erfahrung hat meine Überzeugung gestärkt, dass nachhaltige Wirkung aus der Anpassung globaler Technologien mit lokaler Verantwortung und langfristigem Kapazitätsaufbau entsteht. Diese Arbeit führte zu internationaler Zusammenarbeit und Förderungen durch Organisationen wie die Internet Society, die Vereinten Nationen und Salzburg Global sowie zu Präsentationen bei Institutionen wie dem MIT Media Lab, der Harvard Business School und der TU Berlin. Über Global Shapers und das World Economic Forum haben wir Wege geschaffen, lokale Initiativen mit großer Wirkung umzusetzen und jungen Menschen die Teilnahme an internationalen Gesprächen und Kooperationen zu ermöglichen, indem globaler Dialog in nachhaltiges lokales Handeln übersetzt wird.",
      },
      {
        q: "Wie sieht Ihr Leben außerhalb der Technologie aus?",
        a: "Ich betrachte Kreativität, Bewegung und Entdeckung als Erweiterungen meiner technischen Arbeit und der menschlichen Erfahrung. Ich spiele gerne Schach, arbeite mit Keramik und experimentiere mit Elektronik. Musik spielt eine wichtige Rolle in meinem Leben: Ich spiele Gitarre und Bass und bewege mich dabei von klassischer Musik über Bossa Nova und Jazz bis hin zu Tango und Flamenco. Außerdem reise ich häufig und lebe einen digitalen Nomadenstil über verschiedene Kulturen und Umgebungen hinweg, um neugierig zu bleiben und meine eigenen Annahmen zu hinterfragen. Sportlich laufe ich, praktiziere Muay Thai, gehe Fallschirmspringen und trainiere für Ausdauerherausforderungen wie Marathons und Triathlons. Diese Praktiken halten mich bodenständig und fokussiert und fördern Resilienz sowie langfristige Disziplin.",
      },
    ],
  },
};
