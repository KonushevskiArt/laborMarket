import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { JobResearch } from './pages/JobResearch'; 
import { Favourites } from './pages/Favourites';
import { Vacancy } from './pages/Vacancy';
import { EmptyData } from './pages/EmptyData';
import { Layout } from './components/Layout';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<JobResearch />} />
        <Route path='/favourites' element={<Favourites />} />
        <Route path='/vacancy/:id' element={<Vacancy />} />
        <Route path='*' element={<EmptyData />} />
      </Route>
    </Routes>
  );
};

export { AppRouter };