/* eslint-disable react/jsx-no-undef */

import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import HomePage from '../../pages/HomePage';
import NonFound from '../NonFound/NonFound';
import { lazy } from 'react';

const CatalogPage = lazy(() => import('../../pages/CatalogPage'));
const FavoritePage = lazy(() => import('../../pages/FavoritePage'));

export const App = () => {

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />|
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
      </Route>
      |
      <Route path="*" element={<NonFound />} />|
      |
    </Routes>
    </>
  
  );
};
