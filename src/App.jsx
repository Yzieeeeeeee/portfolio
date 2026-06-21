import { HashRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ReactGA from 'react-ga4';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import AnalyticsTracker from './components/AnalyticsTracker';

// Initialize Google Analytics with User's Measurement ID
ReactGA.initialize('G-1B1FB5VTJ5');

function App() {
  return (
    <HelmetProvider>
      <HashRouter>
        <AnalyticsTracker />
        <div className="bg-grid"></div>
        <div className="ambient-glow glow-1"></div>
        <div className="ambient-glow glow-2"></div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </HashRouter>
    </HelmetProvider>
  );
}

export default App;
