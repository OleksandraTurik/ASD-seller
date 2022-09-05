import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';

const SharedLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

export default SharedLayout;
