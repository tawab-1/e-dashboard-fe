import {Carousel} from '../../hero-carousel';
import {SliderSection} from '../../products-slider-section';
import {productsArray} from '../../../../utils/constants';
import {Divider} from '@mui/material';
import { BrowseByDressStyle } from '../../Brows-by-dress-section';

export const CustomerHome = () => {
  return (
    <>
      <Carousel />
      <div className='max-w-full my-10 md:my-20 px-4 sm:px-6 lg:px-8'>
        <SliderSection
          productsArray={productsArray}
          sectionTitle={"Men's Collection"}
        />
        <Divider sx={{marginTop: 6, marginBottom: 6}} />
        <SliderSection
          productsArray={productsArray}
          sectionTitle={"Men's Collection"}
        />
        <BrowseByDressStyle/>
      </div>
    </>
  );
};
