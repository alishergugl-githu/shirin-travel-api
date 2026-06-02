import { useParams } from "react-router-dom";
import { translations } from "../translations";

function TourDetail({ language }) {
  const { slug } = useParams();

  const t = translations[language];

  const images = {
    dubai: "/images/dubai.png",
    turkey: "/images/turkey.png",
    maldives: "/images/maldives.png",
    thailand: "/images/thailand.png",
  };

  const prices = {
    dubai: "$799",
    turkey: "$699",
    maldives: "$1299",
    thailand: "$899",
  };

  const tour = t.tourDetails[slug];

  if (!tour) {
    return (
      <div className="max-w-7xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold">{t.tourNotFound}</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      <img
        src={images[slug]}
        alt={tour.title}
        className="w-full h-[500px] object-cover rounded-3xl"
      />

      <div className="mt-10">
        <h1 className="text-5xl font-bold">{tour.title}</h1>

        <p className="mt-4 text-blue-600 font-semibold">
          {tour.duration}
        </p>

        <p className="mt-6 text-gray-600 text-lg leading-8">
          {tour.description}
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-10">
          <div className="bg-slate-50 p-6 rounded-2xl">
            <h3 className="font-bold">{t.hotel}</h3>
            <p className="text-gray-600 mt-2">{t.hotelValue}</p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl">
            <h3 className="font-bold">{t.transfer}</h3>
            <p className="text-gray-600 mt-2">{t.included}</p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl">
            <h3 className="font-bold">{t.excursions}</h3>
            <p className="text-gray-600 mt-2">{t.included}</p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl">
            <h3 className="font-bold">{t.support}</h3>
            <p className="text-gray-600 mt-2">24/7</p>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between flex-wrap gap-5">
          <div className="text-4xl font-bold text-orange-500">
            {prices[slug]}
          </div>

          <a
            href="/booking"
            className="bg-orange-500 text-white px-8 py-4 rounded-xl hover:bg-orange-600"
          >
            {t.bookNow}
          </a>
        </div>
      </div>
    </div>
  );
}

export default TourDetail;