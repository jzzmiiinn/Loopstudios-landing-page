import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between px-6 py-6 md:px-10 lg:px-15">
      <img src="/logo.svg" alt="Loopstudios" className="w-36 md:w-44" />

      <nav className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm font-bold text-white">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
      </nav>

      <button
        type="button"
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        <img
          src={isMenuOpen ? "/icon-close.svg" : "/icon-hamburger.svg"}
          alt=""
        />
      </button>

      {isMenuOpen && (
        <nav className="absolute left-0 top-full z-10 w-full bg-black px-6 py-10 md:hidden">
          <ul className="flex flex-col gap-6 text-2xl uppercase text-white">
            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)}>
                Careers
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)}>
                Events
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)}>
                Products
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)}>
                Support
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
