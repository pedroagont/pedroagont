import React from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';
import { Link } from "react-router-dom";

const Main = (props) => {
  return (
    <div>
      <Jumbotron className="text-center bg-transparent" style={{ marginBottom: '0' }}>
        <Container>
          <h1 className="display-3">Bio</h1>
          <p className="lead">Pedro A. González is a Mexican educator and technology evangelist known for his contributions to Internet and software development, bridging the digital divide and applied social innovation.</p>
        </Container>
        <Container className="mt-5">
          <Row>
            <Col>
              <h3 className="display-2 text-muted">12+</h3>
              <p className="lead">Awards & Fellowships</p>
              <p className="small">Winner in different challenges, grants, and prizes being recognized as an innovator and youth talent of the academic, civil society, private industry, and government community at a local, regional, national and international level.</p>
            </Col>
            <Col>
              <h3 className="display-2 text-muted">80+</h3>
              <p className="lead">Mentorships</p>
              <p className="small">From individuals and startups, to private companies, involving topics related to Internet, science, technology, digital culture, social innovation, robotics, IoT, event production, project management, and content creation.</p>
            </Col>
            <Col>
              <h3 className="display-2 text-muted">250+</h3>
              <p className="lead">Events participation</p>
              <p className="small">As guest speaker and organizer of activities related to science, education, technology, research, innovation and entrepreneurship in Los Angeles, Boston, New York, Toronto, Argentina and all over México, including invitations to Harvard, MIT, and United Nations.</p>
            </Col>
          </Row>
          <div style={{ height: '3em' }} />
          <Button color="dark" size="lg">
            <Link to="/about" className="text-light px-3">See more</Link>
          </Button>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Main;
