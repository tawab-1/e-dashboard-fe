import {observer} from 'mobx-react-lite'
import { Carousel } from '../../components/hero-carousel'

export const CustomerHomePage = observer(() => {
  return (
    <div>
      <Carousel/>
    </div>
  )
})
