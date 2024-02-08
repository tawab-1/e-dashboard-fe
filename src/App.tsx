import React from 'react';
import {CustomerNavigation} from './customer/components/navigation';
import {Footer} from './customer/components/footer';
import {CustomerHome} from './customer/components/pages/home-page';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { ProductDetail } from './customer/components/pages/product-detail-page';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <CustomerNavigation />
      <Routes>
        <Route path='/' element={<CustomerHome />} />
        <Route path='/:id' element={<ProductDetail/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
