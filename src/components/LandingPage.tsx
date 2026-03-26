import { useState } from 'react';
import Navbar from './Navbar';
import { Hero } from './Hero';
import Features from './How it works';
import Benfits from './Benfits';
import Footer from './footer';
import KroweHelpdeskFAQ from './faq';
import { WaitlistModal } from './WaitlistModal';

export default function LandingPage() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const onJoinWaitlist = () => setWaitlistOpen(true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-x-hidden w-full">
      <WaitlistModal open={waitlistOpen} onOpenChange={setWaitlistOpen} />
      <Navbar onJoinWaitlist={onJoinWaitlist} />
      <section id="home">
        <Hero onJoinWaitlist={onJoinWaitlist} />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="why-krowe">
        <Benfits onJoinWaitlist={onJoinWaitlist} />
      </section>
      <section id="faq">
        <KroweHelpdeskFAQ />
      </section>
      <Footer onJoinWaitlist={onJoinWaitlist} />
    </div>
  );
}
