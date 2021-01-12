import React from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';

const Main = (props) => {
  return (
    <div>
      <Jumbotron className="text-center bg-transparent">
        <Container>
          <h1 className="display-3">Bio</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent. This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
        <Container className="mt-5">
          <Row>
            <Col>
              <h3 className="display-2 text-muted">12+</h3>
              <p className="lead">Awards & Fellowships</p>
              <p className="small">This is a modified jumbotron that occupies the entire horizontal space of its parent. This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </Col>
            <Col>
              <h3 className="display-2 text-muted">200+</h3>
              <p className="lead">Mentorships</p>
              <p className="small">This is a modified jumbotron that occupies the entire horizontal space of its parent. This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </Col>
            <Col>
              <h3 className="display-2 text-muted">200+</h3>
              <p className="lead">Events participation</p>
              <p className="small">This is a modified jumbotron that occupies the entire horizontal space of its parent. This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </Col>
          </Row>
          <div style={{ height: '3em' }} />
          <Button color="dark" size="lg">wujuu</Button>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Main;
