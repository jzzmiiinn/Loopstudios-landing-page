export const Footer = () => {
  return (
    <footer className="flex flex-col gap-8 bg-black px-6 py-10 md:flex-row md:items-start md:justify-between md:px-15">
      <div className="flex flex-col items-center gap-6 md:items-start">
        <img src="/logo.svg" alt="Loopstudios" />

        <nav>
          <ul className="flex flex-col items-center gap-4 text-white md:flex-row">
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
      </div>

      <div className="flex flex-col items-center gap-4 md:items-end">
        <div className="flex items-center gap-4">
          <a href="#">
            <img src="/icon-facebook.svg" alt="Facebook" />
          </a>

          <a href="#">
            <img src="/icon-twitter.svg" alt="Twitter" />
          </a>

          <a href="#">
            <img src="/icon-pinterest.svg" alt="Pinterest" />
          </a>

          <a href="#">
            <img src="/icon-instagram.svg" alt="Instagram" />
          </a>
        </div>

        <p className="text-sm text-gray-400">
          &copy; 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
