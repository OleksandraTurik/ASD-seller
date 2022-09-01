import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import AdvertPage from 'pages/Advert';
import AddAdsPage from 'pages/AddAdsPage';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/adverts" element={<h1>Advert list</h1>} />
    <Route path="/adverts/:id" element={<AdvertPage />} />
    <Route path="/profiles/:id" element={<h1>Profile page</h1>} />
    <Route path="/add" element={<AddAdsPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegistrationPage />} />
    <Route path="*" element={<h1>404 Not Found</h1>} />
  </Routes>
);
export default MainRoutes;
