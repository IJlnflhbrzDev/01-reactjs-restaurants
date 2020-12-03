import React, { useState, Fragment } from 'react';
import carousel1 from '../Header/carousel-1.jpg'
import carousel2 from '../Header/carosel-2.jpg'
import carousel3 from '../Header/carousel-3.jpg'


import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button
} from 'reactstrap';

const items = [
  {
    src: carousel1,
    header: 'Delicious Restaurant  ',
    caption: 'Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati   alias dolorem mollitia ut. Similique ea  voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.'
  },
  {
    src: carousel2,
    header: 'Sequi ea ut et est quaerat ',
    caption: 'Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.'

  },
  {
    src: carousel3,
    header: 'Lorem Ipsum Dolor  ',
    caption: 'Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.'
  }
];

const Header = (props) => {
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
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img style={{ width: '100%', height: '100vh' }} src={item.src} alt="Slide Shop" />
        <CarouselCaption captionHeader={item.header} captionText={item.caption} />
        <div id="buttonCarousel">
          <Button>book a table</Button>
          <Button>our menu</Button>
        </div>
      </CarouselItem>
    );
  });

  return (
    <Fragment>
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
      <div id="mobile-caption">
        <h3> <span>Delicius</span> Restaurant</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, recusandae!</p>
      </div>
    </Fragment>
  );

}

export default Header;



