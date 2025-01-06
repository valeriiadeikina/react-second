import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';
import Nav from './Nav.tsx';
import Portfolio from './components/Portfolio.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Store from './components/task-2/Store.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/task1" index element={<Portfolio />} />
        <Route path="/task2" element={<Store />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
