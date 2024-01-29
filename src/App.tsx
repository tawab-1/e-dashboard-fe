import React from 'react'
import './App.css'
import {CustomerNavigation} from './customer/components/navigation'
import { CustomerHomePage } from './customer/pages/home-page'
export const App: React.FC = () => {
  return (
    <div>
      <CustomerNavigation/>
      <div>
      <CustomerHomePage/>
      </div>
    </div>
  )
}

