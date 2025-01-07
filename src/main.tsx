import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';
import Nav from './Nav.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Store from './components/task-2/Store.tsx';
import MovieRating from './components/task-1/MovieRating.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/task1" index element={<MovieRating />} />
        <Route path="/task2" element={<Store />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
