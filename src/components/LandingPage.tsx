import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Navbar,
  Footer,
  Hero,
  FeaturePRD,
  FeatureQuote,
  FeatureContract,
  FeatureTasks,
  FeatureRepo,
  FeatureBuilder,
  CtaBand,
  useReveal,
} from './landing';

export default function LandingPage() {
  useReveal();
  const { hash } = useLocation();

  // Honor an incoming /#section hash (e.g. navbar link followed from another page).
  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 88;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 80);
    return () => clearTimeout(t);
  }, [hash]);

  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <main className="page-surface">
        <Hero />
        <FeaturePRD />
        <FeatureQuote />
        <FeatureContract />
        <FeatureTasks />
        <FeatureRepo />
        <FeatureBuilder />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
