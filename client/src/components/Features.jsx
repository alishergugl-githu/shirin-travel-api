import { translations } from "../translations";

function Features({ language }) {
  const t = translations[language];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6">
        {t.features.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-blue-50 border border-blue-100"
          >
            <h3 className="text-lg font-bold text-blue-700">
              {item.title}
            </h3>

            <p className="mt-2 text-gray-600">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;