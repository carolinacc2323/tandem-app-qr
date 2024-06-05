import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import qr1 from './images/qr1.jpg'
import qr2 from './images/qr2.jpg'
// import qr3 from './images/qr3.jpg'
import qr4 from './images/qr4.jpg'
// import qr5 from './images/ruta.jpg'

const items = [
  {
    src: qr1,
    altText: 'Slide 1',
    caption: 'Identificar productos para controlar stock',
    key: 1,
  },
  {
    src: qr2,
    altText: 'Slide 2',
    caption: 'Realizar fichaje diario',
    key: 2,
  },
  {
    src: qr3,
    altText: 'Slide 3',
    caption: 'Aplicación disponible para disferentes formatos de pantallas',
    key: 3,
  },
  {
    src: qr4,
    altText: 'Slide 4',
    caption: 'Compartir archivos rápidamente entre usuarios',
    key: 4,
  },
  {
    src: qr5,
    altText: 'Slide 5',
    caption: 'Acceso a rutas turísticas',
    key: 5,
  },
];

function CarruselButtonTandem(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
        className="text-danger bg-light"
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default CarruselButtonTandem;