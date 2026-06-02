import { translations } from "../translations";

function Hero({ language }) {
  const t = translations[language];

  return (
    <section
      className="relative min-h-[700px] flex items-center"
      style={{
        backgroundImage: "url('/images/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            {t.heroTitle}
          </h1>

          <p className="mt-6 text-xl text-gray-200">
            {t.heroText}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold">
              {t.viewTours}
            </button>

            <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold">
              {t.contact}
            </button>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-3xl shadow-2xl p-6 max-w-5xl">
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm text-gray-500">
                {t.where}
              </label>

              <input
                type="text"
                placeholder={t.exampleDubai}
                className="w-full mt-2 border rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">
                {t.when}
              </label>

              <input
                type="date"
                className="w-full mt-2 border rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">
                {t.people}
              </label>

              <input
                type="number"
                placeholder="2"
                className="w-full mt-2 border rounded-xl px-4 py-3"
              />
            </div>

            <div className="flex items-end">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold">
                {t.search}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;