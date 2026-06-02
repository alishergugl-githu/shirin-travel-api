import { translations } from "../translations";

function Footer({ language }) {
  const t = translations[language];

  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-orange-400">
              Shirin Travel
            </h3>

            <p className="mt-4 text-gray-400">
              {t.footerText}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">
              {t.menuTitle}
            </h4>

            <ul className="space-y-2 text-gray-400">
              <li>{t.home}</li>
              <li>{t.tours}</li>
              <li>{t.destinations}</li>
              <li>{t.blog}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">
              {t.contact}
            </h4>

            <ul className="space-y-2 text-gray-400">
              <li>📞 +998 95 229 13 11</li>
              <li>📧 info@shirintravel.uz</li>
              <li>📍 Toshkent, O‘zbekiston</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">
              {t.followUs}
            </h4>

            <div className="flex gap-4">
              <button className="bg-slate-800 px-4 py-2 rounded-xl hover:bg-orange-500 transition">
                Telegram
              </button>

              <button className="bg-slate-800 px-4 py-2 rounded-xl hover:bg-orange-500 transition">
                Instagram
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-gray-400">
          © 2026 Shirin Travel. {t.rights}
        </div>
      </div>
    </footer>
  );
}

export default Footer;