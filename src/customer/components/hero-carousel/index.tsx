import { observer } from 'mobx-react-lite';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {carouselData} from '../../../utils/constants';


export const Carousel = observer(() => {
    const items = carouselData.map((item, index) => <img key={index} className='cursor-pointer' src={item.image} role='presentation' alt=''/>)
    
    return (<AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        infinite
        autoPlayInterval={2000}
        animationDuration={1500}
        animationEasingFunction='ease'
    />)
});