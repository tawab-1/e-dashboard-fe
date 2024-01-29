import React, {useRef, useState} from 'react';
import AliceCarousel, {EventObject} from 'react-alice-carousel';
import {CommonCard} from '../../../common-components/card';
import {Button} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {observer} from 'mobx-react-lite';
import { gentsKurta } from '../../../utils/constants';

const responsive = {
  0: {items: 1},
  430: {items: 1},
  768: {items: 3},
  1024: {items: 3.69},
  1440: {items: 4},
};

export const ProductsCarousel = observer(() => {
  const carouselRef = useRef<AliceCarousel>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };
  const items = gentsKurta.map((item, index) => (<CommonCard key={index} img={item.image} title={item.title} description={item.description} />));
  return (
      <div className='relative p-5'>
        <Button
          variant='contained'
          onClick={handlePrev}
          className='z-50'
          sx={{
            position: 'absolute',
            top: '40%',
            left: '0rem',
            backgroundColor: '#fff',
            transform: 'translateX(-50%)',
            display: activeIndex === 0 ? 'none' : 'block',
          }}
          aria-label='prev'
        >
          <ChevronLeftIcon htmlColor='black' />
        </Button>
        <AliceCarousel
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          ref={carouselRef}
          activeIndex={activeIndex}
          onSlideChanged={(e: EventObject) => setActiveIndex(e.item)}
        />
        <Button
          variant='contained'
          onClick={handleNext}
          className='z-50'
          sx={{
            position: 'absolute',
            top: '40%',
            right: '0rem',
            backgroundColor: '#fff',
            transform: 'translateX(50%)',
            display: activeIndex === 5 ? 'none' : 'block',
          }}
          aria-label='next'
        >
          <ChevronRightIcon htmlColor='black' />
        </Button>
      </div>
  );
});
