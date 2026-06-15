import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

const LandingPage = lazy(() => import('./components/LandingPage'));
const CareersPage = lazy(() => import('./components/CareersPage'));
const ApplyPage = lazy(() => import('./components/ApplyPage'));
const PrivacyPage = lazy(() => import('./components/PrivacyPage'));
const TermsPage = lazy(() => import('./components/TermsPage'));

function RouteFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950">
      <div
        className="h-8 w-8 animate-spin rounded-full border-2 border-cyan-500/30 border-t-cyan-400"
        aria-hidden
      />
    </div>
  );
}

function ExternalRedirect({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return <RouteFallback />;
}

function App() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/signup"
          element={<ExternalRedirect to="https://krowehub.com/signup" />}
        />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/careers/apply" element={<ApplyPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
