import React from 'react';
import { Container } from 'reactstrap';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaTwitch } from "react-icons/fa";

const Example = (props) => {
  return (
    <footer className="footer mt-auto py-3">
      <hr className="w-75 mt-5" />
      <Container className="text-center">
        <a href="https://instagram.com/pedroagont" className="text-dark px-3"><FaInstagram /></a>
        <a href="https://github.com/pedroagont" className="text-dark px-3"><FaGithub /></a>
        <a href="https://facebook.com/pedroagont" className="text-dark px-3"><FaFacebook /></a>
        <a href="https://twitter.com/pedroagont" className="text-dark px-3"><FaTwitter /></a>
        <a href="https://twitch.com/pedroagont" className="text-dark px-3"><FaTwitch /></a>
        <div style={{ height: '1.5em' }} />
        <span className="text-dark">Pedro A. González © { new Date().getFullYear() }. All Rights Reserved</span>
      </Container>
    </footer>
  );
};

export default Example;
