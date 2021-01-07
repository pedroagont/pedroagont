import React from 'react';
import { Container } from 'reactstrap';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaTwitch } from "react-icons/fa";

const Example = (props) => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <Container className="text-center">
        <a href="#" className="text-muted px-2"><FaInstagram /></a>
        <a href="#" className="text-muted px-2"><FaGithub /></a>
        <a href="#" className="text-muted px-2"><FaFacebook /></a>
        <a href="#" className="text-muted px-2"><FaTwitter /></a>
        <a href="#" className="text-muted px-2"><FaTwitch /></a>
        <br />
        <br />
        <span className="text-muted">Pedro A. González © { new Date().getFullYear() }. All Rights Reserved</span>
      </Container>
    </footer>
  );
};

export default Example;
