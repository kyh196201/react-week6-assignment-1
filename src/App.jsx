import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RestaurantDetailPage from './pages/RestaurantDetailPage';

export default function App() {
  return (
    <div>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/restaurants/:id" element={<RestaurantDetailPage />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}
