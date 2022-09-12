import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from 'components/common/Loader';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const MainPage = lazy(() => import('pages/MainPage'));
const AdvertPage = lazy(() => import('pages/Advert'));
const AddAdsPage = lazy(() => import('pages/AddAdsPage'));
const MyAdverts = lazy(() => import('components/Profile/MyAdverts'));
const Profile = lazy(() => import('pages/Profile'));
const NotFound = lazy(() => import('pages/NotFound'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const SettingsPage = lazy(() => import('pages/SettingsPage'));

const MainRoutes = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="/adverts" element={<h1>Advert list</h1>} />
      <Route path="/adverts/:id" element={<AdvertPage />} />
      <Route path="/profiles/:id" element={<Profile />}>
        <Route path="adverts" element={<MyAdverts />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
      <Route
        path="/add"
        element={(
          <PrivateRoute>
            <AddAdsPage />
          </PrivateRoute>
)}
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);

export default MainRoutes;
