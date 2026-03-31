import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CareersPage from './components/CareersPage';
import ApplyPage from './components/ApplyPage';
import PrivacyPage from './components/PrivacyPage';
import TermsPage from './components/TermsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/careers/apply" element={<ApplyPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
    </Routes>
  );
}

export default App;
