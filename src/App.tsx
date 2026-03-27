import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CareersPage from './components/CareersPage';
import ApplyPage from './components/ApplyPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/careers/apply" element={<ApplyPage />} />
    </Routes>
  );
}

export default App;
