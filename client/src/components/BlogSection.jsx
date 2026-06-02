import { translations } from "../translations";

function BlogSection({ language }) {
  const t = translations[language];

  const images = [
    "/images/dubai.png",
    "/images/turkey.png",
    "/images/maldives.png",
  ];

  return (
    <section id="blog" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-slate-800">
              {t.blogTitle}
            </h2>

            <p className="mt-3 text-gray-600">
              {t.blogSubtitle}
            </p>
          </div>

          <button className="hidden md:block bg-orange-500 text-white px-6 py-3 rounded-xl">
            {t.viewAllBlogs}
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition"
            >
              <img
                src={images[index]}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800">
                  {blog.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  {blog.text}
                </p>

                <button className="mt-5 text-blue-600 font-semibold">
                  {t.readMore}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;