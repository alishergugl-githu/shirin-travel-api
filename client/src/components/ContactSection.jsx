import { translations } from "../translations";

function ContactSection({ language }) {
  const t = translations[language];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-800">
              {t.contactTitle}
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              {t.contactText}
            </p>

            <div className="mt-8 space-y-4 text-gray-700">
              <p>📞 +998 95 229 13 11</p>
              <p>📧 info@shirintravel.uz</p>
              <p>📍 Paxtachi, Samarqand, O‘zbekiston</p>
            </div>

            <div className="mt-8 flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
                {t.telegram}
              </button>

              <button className="bg-pink-500 text-white px-6 py-3 rounded-xl">
                {t.instagram}
              </button>
            </div>
          </div>

          <div className="bg-slate-100 rounded-3xl p-6 shadow-md">
            <div className="h-80 rounded-2xl bg-slate-300 flex items-center justify-center text-slate-600 font-semibold">
              {t.mapPlaceholder}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;