import { Link } from "react-router-dom";
import { translations } from "../translations";

function Destinations({ language }) {
  const t = translations[language];

  const tours = [
    {
      title: "Dubai",
      slug: "dubai",
      image: "/images/dubai.png",
      price: "$799",
      days: 7,
    },
    {
      title: "Turkey",
      slug: "turkey",
      image: "/images/turkey.png",
      price: "$699",
      days: 6,
    },
    {
      title: "Maldives",
      slug: "maldives",
      image: "/images/maldives.png",
      price: "$1299",
      days: 5,
    },
    {
      title: "Thailand",
      slug: "thailand",
      image: "/images/thailand.png",
      price: "$899",
      days: 7,
    },
  ];

  return (
    <section id="tours" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800">
            {t.destinationsTitle}
          </h2>

          <p className="mt-3 text-gray-600">
            {t.destinationsSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {tours.map((tour) => (
            <div
              key={tour.slug}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-slate-800">
                    {tour.title}
                  </h3>

                  <span className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                    {tour.days} {t.days}
                  </span>
                </div>

                <p className="text-gray-500 mt-2">
                  {t.premiumPackage}
                </p>

                <div className="mt-4 flex justify-between items-center">
                  <span className="text-orange-500 font-bold text-xl">
                    {tour.price}
                  </span>

                  <Link
                    to={`/tours/${tour.slug}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
                  >
                    {t.details}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Destinations;