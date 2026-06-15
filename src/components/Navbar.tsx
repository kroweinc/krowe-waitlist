import { MouseEvent, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

const NAV_LINKS = [
 // { label: "Home", href: "#home" },
  { label: "How it Works", href: "#features" },
  { label: "Benefits", href: "#benefits" },
  { label: "FAQ", href: "#faq" },
];

const PORTAL_SIGNUP_URL = "https://krowehub.com/signup";
const PORTAL_LOGIN_URL = "https://krowehub.com/login";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToTarget = (href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      let offset = 100;
      if (targetId === 'benefits') {
        offset = 20;
      }
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToTarget(href);
  };

  const handleMobileLink = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    // Wait for the drawer to close so the layout is settled before scrolling.
    setTimeout(() => scrollToTarget(href), 150);
  };

  return (
    <header className="w-full py-4 fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <nav className="mx-auto max-w-5xl px-4 w-full pointer-events-auto">
        <div className="bg-surface-light backdrop-blur-md bg-opacity-80 border border-gray-200 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 shadow-soft flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="cursor-pointer">
              <img src="KroweLogo.png" alt="Krowe Logo" className="h-6 sm:h-8 w-auto" width={100} height={100} />
            </a>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-muted-light">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a
              href={PORTAL_LOGIN_URL}
              className="inline-flex items-center text-text-light px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
            >
              Log in
            </a>
            <a
              href={PORTAL_SIGNUP_URL}
              className="bg-text-light text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer"
            >
              Sign up
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="md:hidden flex items-center justify-center h-9 w-9 rounded-full text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
          </div>
        </div>
      </nav>

      <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm pointer-events-auto md:hidden" />
          <Dialog.Content className="fixed inset-x-4 top-4 z-[70] rounded-2xl border border-gray-200 bg-white p-5 shadow-xl pointer-events-auto md:hidden">
            <div className="flex items-center justify-between mb-4">
              <Dialog.Title className="text-base font-semibold text-gray-900">Menu</Dialog.Title>
              <Dialog.Close asChild>
                <button
                  type="button"
                  aria-label="Close menu"
                  className="flex items-center justify-center h-9 w-9 rounded-full text-gray-500 hover:bg-gray-100"
                >
                  <span className="material-symbols-outlined text-2xl">close</span>
                </button>
              </Dialog.Close>
            </div>
            <nav className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleMobileLink(e, link.href)}
                  className="py-3 text-base font-medium text-gray-800 border-b border-gray-100 last:border-0 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-5 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  window.location.href = PORTAL_LOGIN_URL;
                }}
                className="w-full border border-gray-300 text-text-light py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors"
              >
                Log in
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  window.location.href = PORTAL_SIGNUP_URL;
                }}
                className="w-full bg-text-light text-white py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Sign up
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </header>
  );
}
