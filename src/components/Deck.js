import React from 'react';
import { CardDeck } from 'reactstrap';
import CardSingle from './CardSingle';

const Deck = (props) => {

  return (
    <CardDeck className="justify-content-center">
      { props.array.map(el => <CardSingle key={el.id} img={el.img} alt={el.alt} title={el.title} category={el.category} description={el.description} slug={el.slug}/>) }
    </CardDeck>
  );
};

export default Deck;
