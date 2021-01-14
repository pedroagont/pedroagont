import React from 'react';
import { Card, CardImg, CardColumns } from 'reactstrap';

const Images = (props) => {
  return (
    <CardColumns>
      {
        props.array.map(el => {
          return <Card key={ el.id }>
                    <CardImg width="100%" src={ el.src } alt={ el.alt } />
                 </Card>
        })
      }
    </CardColumns>
  );
};

export default Images;
