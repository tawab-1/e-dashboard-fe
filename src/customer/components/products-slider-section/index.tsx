import AliceCarousel from 'react-alice-carousel';
import {CommonCard} from '../../../common-components/card';
import {Button, Grid, Typography} from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import {ReactNode, useState} from 'react';
interface SliderSectionProps {
  productsArray: {
    title: string;
    color: string;
    img: string;
  }[];
  sectionTitle: ReactNode | string;
}
export const SliderSection = ({
  productsArray,
  sectionTitle,
}: SliderSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: {
      items: 1,
    },
    568: {
      items: 2,
    },
    1024: {
      items: 4,
      itemsFit: 'contain',
    },
  };

  const items = productsArray.map((item, index) => {
    return (
      <CommonCard
        style={{margin: 4, height: '480px'}}
        key={index}
        img={item.img}
        imgHeight='400px'
        hoverShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px;'
        cardContent={
          <div>
            <Typography
              variant='body1'
              component={'div'}
              color={'GrayText'}
              fontWeight={700}
            >
              {item.title}
            </Typography>
            <Typography
              variant='body1'
              component={'div'}
              color={'black'}
              fontWeight={500}
            >
              {item.color}
            </Typography>
          </div>
        }
      />
    );
  });

  const previousButton = () => (
    <p className='absolute left-2 top-52'>
      {activeIndex !== 0 && (
        <ArrowCircleLeftIcon className='text-white cursor-pointer' />
      )}
    </p>
  );
  const nextButton = () => {
    const maxIndex =
      productsArray.length - Math.ceil(window.innerWidth / (400 + 4 * 2)); // 360 is the width of each card, 4 is the margin
    return (
      <p className='absolute right-2 top-52'>
        {activeIndex < maxIndex && (
          <ArrowCircleRightIcon className='text-white cursor-pointer' />
        )}
      </p>
    );
  };

  return (
    <Grid className='relative'>
      <Typography
        variant='h4'
        className='pb-5 text-center'
        fontWeight={900}
        fontFamily={'Inter'}
        component={'div'}
      >
        {sectionTitle}
      </Typography>
      <AliceCarousel
        disableDotsControls
        responsive={responsive}
        items={items}
        keyboardNavigation
        activeIndex={activeIndex}
        mouseTracking={false}
        onSlideChanged={(e) => setActiveIndex(e.item)}
        renderPrevButton={previousButton}
        renderNextButton={nextButton}
      />
      <div className='flex items-center justify-center'>
        <Button
          style={{
            color: 'black',
            outline: '2px solid black',
            fontFamily: 'Inter',
            fontWeight: 500,
            borderRadius: '26px',
            padding: '10px 40px',
            transition: 'all .4s ease',
          }}
          sx={{
            ':hover': {
              backgroundColor: '#2ca9bc',
              color: 'white !important',
              outline: '2px solid #2ca9bc !important',
            },
          }}
          type='button'
        >
          View All
        </Button>
      </div>
    </Grid>
  );
};
