import { translations } from "../translations";

function BookingSection({ language }) {
  const t = translations[language];

  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center text-white mb-10">
          <h2 className="text-4xl font-bold">
            {t.bookingTitle}
          </h2>

          <p className="mt-3 text-blue-100">
            {t.bookingText}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder={t.yourName}
              className="border rounded-xl p-4"
            />

            <input
              type="tel"
              placeholder={t.yourPhone}
              className="border rounded-xl p-4"
            />

            <select className="border rounded-xl p-4">
              <option>{t.selectDestination}</option>
              <option>Dubai</option>
              <option>Turkey</option>
              <option>Maldives</option>
              <option>Thailand</option>
            </select>

            <input
              type="number"
              placeholder={t.travelersCount}
              className="border rounded-xl p-4"
            />
          </div>

          <button className="mt-6 w-full bg-orange-500 text-white py-4 rounded-xl text-lg font-semibold hover:bg-orange-600">
            {t.bookNow}
          </button>
        </div>
      </div>
    </section>
  );
}

export default BookingSection;