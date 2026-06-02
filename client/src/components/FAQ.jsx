import { translations } from "../translations";

function FAQ({ language }) {
  const t = translations[language];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800">
            {t.faqTitle}
          </h2>

          <p className="mt-3 text-gray-600">
            {t.faqSubtitle}
          </p>
        </div>

        <div className="space-y-5">
          {t.faqQuestions.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-blue-700">
                {item.q}
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;