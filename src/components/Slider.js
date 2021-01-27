import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1510582029005-689cfc56b48c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    altText: 'Slide 1',
    caption: 'Education',
    text: 'Education'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1500649297466-74794c70acfc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    altText: 'Slide 2',
    caption: 'Mechatronics',
    text: 'Mechatronics'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1461248481170-e44894b0909c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80',
    altText: 'Slide 3',
    caption: 'Software',
    text: 'Software'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1461248481170-e44894b0909c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80',
    altText: 'Slide 3',
    caption: 'Innovation',
    text: 'Innovation'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1461248481170-e44894b0909c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80',
    altText: 'Slide 3',
    caption: 'Entrepreneurship',
    text: 'Entrepreneurship'
  }
];

const Slider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
      >
        <img className="w-100" src={item.src} alt={item.altText} />
        <CarouselCaption captionHeader={item.caption} captionText={item.text}/>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Slider;
