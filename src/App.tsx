import React from 'react'
import './App.css'
import {CustomerNavigation} from './customer/components/navigation'
import { CustomerHomePage } from './customer/pages/home-page'
import { Footer } from './customer/components/footer'
export const App: React.FC = () => {
  return (
    <div>
      <CustomerNavigation/>
      <div>
      <CustomerHomePage/>
      </div>
      <Footer/>
    </div>
  )
}

