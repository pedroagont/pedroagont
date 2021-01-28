import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

const CardSingle = (props) => {
  return (
    <div className="mb-4 col-sm-12 col-md-6 col-lg-4">
      <Card className="mx-auto h-100">
        <CardImg top width="100%" src={ props.img } alt={ props.alt } />
        <CardBody>
          <CardTitle tag="h5">{ props.title }</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{ props.category }</CardSubtitle>
          <CardText>{ props.description }</CardText>
          <Button color="dark">
            <Link className="text-light" to={ props.slug }>See more</Link>
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardSingle;
