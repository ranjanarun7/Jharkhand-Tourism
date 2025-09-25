import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import LandingPage from './pages/LandingPage';
import ItineraryPlanner from './pages/ItineraryPlanner';
import PlacesPage from './pages/PlacesPage';
import MarketplacePage from './pages/MarketplacePage';
import FeedbackPage from './pages/FeedbackPage';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/itinerary" element={<ItineraryPlanner />} />
        <Route path="/places" element={<PlacesPage />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
