import { Link } from "react-router-dom";
import logo from "../assets/logoShirin.png";
import { translations } from "../translations";

function Navbar({ language, setLanguage }) {
  const t = translations[language];

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Shirin Travel"
            className="h-14"
          />
        </Link>

        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600">
            {t.home}
          </Link>

          <a href="/#tours" className="hover:text-blue-600">
            {t.tours}
          </a>

          <a href="/#tours" className="hover:text-blue-600">
            {t.destinations}
          </a>

          <a href="/#blog" className="hover:text-blue-600">
            {t.blog}
          </a>

          <Link to="/payment" className="hover:text-blue-600">
            {t.payment}
          </Link>

          <a href="/#about" className="hover:text-blue-600">
            {t.about}
          </a>

          <a href="/#contact" className="hover:text-blue-600">
            {t.contact}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border rounded-lg px-3 py-2"
          >
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
            <option value="en">EN</option>
          </select>

          <Link
            to="/booking"
            className="bg-orange-500 text-white px-5 py-2 rounded-xl hover:bg-orange-600"
          >
            {t.bookNow}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;