import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';
import Nav from './Nav.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WalkingPage from './components/task-2/WalkingPage.tsx';
import ColorConverter from './components/task-1/ColorConverter.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/task1" index element={<ColorConverter />} />
        <Route path="/task2" element={<WalkingPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
