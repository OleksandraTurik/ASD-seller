import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import AdvertPage from 'pages/Advert';
import MyAdverts from 'components/Profile/MyAdverts';
import Profile from 'pages/Profile';
import NotFound from 'pages/NotFound';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/adverts" element={<h1>Advert list</h1>} />
    <Route path="/adverts/:id" element={<AdvertPage />} />
    <Route path="/profiles/:id" element={<Profile />}>
      <Route path="adverts" element={<MyAdverts />} />
      <Route path="settings" element={<h1>P settings</h1>} />
    </Route>
    <Route path="/add" element={<h1>Add new advert form</h1>} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegistrationPage />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
export default MainRoutes;
