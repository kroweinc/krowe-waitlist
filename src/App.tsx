import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CareersPage from './components/CareersPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/careers" element={<CareersPage />} />
    </Routes>
  );
}

export default App;
