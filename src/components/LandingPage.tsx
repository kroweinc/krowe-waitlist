import Navbar from './Navbar';
import { Hero } from './Hero';
import Features from './How it works';
import Benfits from './Benfits';
import Footer from './footer';
import KroweHelpdeskFAQ from './faq';

export default function LandingPage() {
  return (
    <div className="min-h-screen page-surface overflow-x-hidden w-full">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="why-krowe">
        <Benfits />
      </section>
      <section id="faq">
        <KroweHelpdeskFAQ />
      </section>
      <Footer />
    </div>
  );
}
