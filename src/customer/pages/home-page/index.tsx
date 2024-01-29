import {Carousel} from '../../components/hero-carousel'
import {observer} from 'mobx-react-lite'
import {ProductsCarousel} from '../../components/product-carousel'

export const CustomerHomePage = observer(() => {
  return (
    <div>
      <Carousel/>
      <div className='space-y-10 py-20 px-5 lg:px-10'>
        <ProductsCarousel/>
        <ProductsCarousel/>
        <ProductsCarousel/>
        <ProductsCarousel/>
        <ProductsCarousel/>
        <ProductsCarousel/>
      </div>
    </div>
  )
})
