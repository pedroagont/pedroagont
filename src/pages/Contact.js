import Header from '../components/Header';

function Contact() {
  return (
    <>
      <Header title="Contact" description="Let's collaborate" />
      <main className="container">
        <p>
          For work, conferences, lectures, workshops, event invitation, media
          inquiries, or any kind of collaboration, I'll be happy to answer from
          the following channels:
        </p>
        <ul className="contact-links-list">
          <li>
            <a
              href="mailto:pgonzalez@post.com"
              target="_blank"
              rel="noreferrer"
            >
              pgonzalez@post.com
            </a>
          </li>
          <li>
            <a
              href="https://github.com/pedroagont"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/pedroagont/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://facebook.com/pedroagont"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://reddit.com/user/pedroagont"
              target="_blank"
              rel="noreferrer"
            >
              Reddit
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/pedroagont"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/pedroagont"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </main>
    </>
  );
}

export default Contact;
