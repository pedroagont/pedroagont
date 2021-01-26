import React from 'react';
import { Container } from 'reactstrap';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaTwitch, FaWhatsapp, FaTelegram } from "react-icons/fa";

const Example = (props) => {
  return (
    <footer className="footer mt-auto py-3">
      <hr className="w-75 mt-5" />
      <Container className="text-center">
        <a href="https://instagram.com/pedroagont" className="text-dark px-3"><FaInstagram style={{ fontSize: '1.3em' }}/></a>
        <a href="https://github.com/pedroagont" className="text-dark px-3"><FaGithub style={{ fontSize: '1.3em' }}/></a>
        <a href="https://facebook.com/pedroagont" className="text-dark px-3"><FaFacebook style={{ fontSize: '1.3em' }}/></a>
        <a href="https://twitter.com/pedroagont" className="text-dark px-3"><FaTwitter style={{ fontSize: '1.3em' }}/></a>
        <a href="https://twitch.com/pedroagont" className="text-dark px-3"><FaTwitch style={{ fontSize: '1.3em' }}/></a>
        <a href="https://wa.me/529988458554" className="text-dark px-3"><FaWhatsapp style={{ fontSize: '1.3em' }}/></a>
        <a href="https://t.me/pedroagont" className="text-dark px-3"><FaTelegram style={{ fontSize: '1.3em' }}/></a>
        <div style={{ height: '1.3em' }} />
        <span className="text-dark">Pedro A. González © { new Date().getFullYear() }. All Rights Reserved</span>
      </Container>
    </footer>
  );
};

export default Example;
