import { translations } from "../translations";

function About({ language }) {
  const t = translations[language];

  return (
      <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-orange-500 font-semibold mb-2">
            Shirin Travel
          </p>

          <h2 className="text-4xl font-bold text-slate-800">
            {t.aboutTitle}
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-7">
            {t.aboutSubtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-slate-800">
              {t.aboutMainTitle}
            </h3>

            <p className="mt-5 text-gray-600 leading-8">
              {t.aboutText1}
            </p>

            <p className="mt-4 text-gray-600 leading-8">
              {t.aboutText2}
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <h4 className="text-2xl font-bold text-orange-500">4+</h4>
                <p className="text-gray-600 text-sm">
                  {t.aboutStat1}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <h4 className="text-2xl font-bold text-blue-600">24/7</h4>
                <p className="text-gray-600 text-sm">
                  {t.aboutStat2}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <h4 className="text-2xl font-bold text-green-600">100%</h4>
                <p className="text-gray-600 text-sm">
                  {t.aboutStat3}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h4 className="text-2xl font-bold text-slate-800 mb-4">
              {t.certificateTitle}
            </h4>

            <p className="text-gray-600 leading-7 mb-6">
              {t.certificateText}
            </p>

            <div className="bg-slate-50 border rounded-2xl p-6 text-center">
              <div className="text-5xl mb-4">📄</div>

              <h5 className="text-xl font-bold text-slate-800">
                {t.certificatePdf}
              </h5>

              <p className="text-gray-500 mt-2 text-sm">
                {t.certificateInfo}
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/guvohnoma.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition"
                >
                  {t.viewCertificate}
                </a>

                <a
                  href="/guvohnoma.pdf"
                  download
                  className="border border-slate-300 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition"
                >
                  {t.downloadCertificate}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-3xl shadow-sm p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              {t.servicesTitle}
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {t.services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-slate-50 rounded-xl p-4"
                >
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-sm p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              {t.advantagesTitle}
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {t.advantages.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-slate-50 rounded-xl p-4"
                >
                  <span className="text-orange-500 font-bold">★</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-slate-900 text-white rounded-3xl p-10 text-center">
          <h3 className="text-3xl font-bold">
            {t.goalTitle}
          </h3>

          <p className="mt-4 text-slate-300 max-w-4xl mx-auto leading-8">
            {t.goalText}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;