import { translations } from "../translations";

function Testimonials({ language }) {
  const t = translations[language];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            {t.testimonialsTitle}
          </h2>

          <p className="text-gray-600 mt-3">
            {t.testimonialsSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.reviews.map((review, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-3xl p-8 shadow-md"
            >
              <div className="text-yellow-400 text-2xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-600 leading-7">
                "{review.text}"
              </p>

              <h4 className="mt-5 font-bold text-slate-800">
                {review.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;