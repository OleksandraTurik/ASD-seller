import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Pages
import AdvertPage from 'pages/AdvertPage';

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<h1>Main page</h1>} />
    <Route path="/adverts" element={<h1>Advert list</h1>} />
    <Route path="/adverts/:id" element={<AdvertPage />} />
    <Route path="/profiles/:id" element={<h1>Profile page</h1>} />
    <Route path="/add" element={<h1>Add new advert form</h1>} />
    <Route path="/login" element={<h1>Log in page</h1>} />
    <Route path="/register" element={<h1>Registration page</h1>} />
    <Route path="*" element={<h1>404 Not Found</h1>} />
  </Routes>
);

export default MainRoutes;
