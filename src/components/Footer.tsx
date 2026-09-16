export const Footer = () => {
  return (
    <footer className="bg-black flex flex-col px-15 py-10 gap-4">
      <div className="flex flex-row justify-between items-center">
        <img src="/logo.svg" alt="logo" />
        <div className="social-icons flex flex-row justify-between items-center gap-4">
          <img src="/icon-facebook.svg" alt="facebook-icon" />
          <img src="/icon-twitter.svg" alt="twitter-icon" />
          <img src="/icon-pinterest.svg" alt="pinterest-icon" />
          <img src="/icon-instagram.svg" alt="instagram-icon" />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="navLinks text-white">
          <ul className="flex flex-row justify-between items-center gap-4">
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
        </div>
        <p className="text-gray-200">
          &copy; 2021 Loopstudios. All right reserved.
        </p>
      </div>
    </footer>
  );
};
