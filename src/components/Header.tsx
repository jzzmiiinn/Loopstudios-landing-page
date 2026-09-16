export const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center px-15">
      <img src="/logo.svg" alt="logo" />
      <div className="navLinks">
        {" "}
        <ul className="flex flex-row justify-between items-center gap-6 text-white font-bold text-sm">
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
    </header>
  );
};
