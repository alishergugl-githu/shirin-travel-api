import { useState } from "react";
import { translations } from "../translations";

function Booking({ language }) {
  const t = translations[language];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    destination: "",
    travelers: "",
    note: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.error || t.errorMessage);
        return;
      }

      setMessage(t.successMessage);

      setFormData({
        name: "",
        phone: "",
        destination: "",
        travelers: "",
        note: "",
      });
    } catch (error) {
      setMessage(t.serverError);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-5xl mx-auto py-20 px-6">
      <h1 className="text-5xl font-bold text-slate-800">
        {t.bookingPageTitle}
      </h1>

      <p className="mt-4 text-gray-600">
        {t.bookingPageText}
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 bg-white rounded-3xl shadow-xl p-8 grid md:grid-cols-2 gap-6"
      >
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border rounded-xl p-4"
          type="text"
          placeholder={t.yourName}
        />

        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="border rounded-xl p-4"
          type="tel"
          placeholder={t.yourPhone}
        />

        <select
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          className="border rounded-xl p-4"
        >
          <option value="">{t.selectDestination}</option>
          <option value="Dubai">Dubai</option>
          <option value="Turkey">Turkey</option>
          <option value="Maldives">Maldives</option>
          <option value="Thailand">Thailand</option>
        </select>

        <input
          name="travelers"
          value={formData.travelers}
          onChange={handleChange}
          className="border rounded-xl p-4"
          type="number"
          placeholder={t.travelersCount}
        />

        <textarea
          name="note"
          value={formData.note}
          onChange={handleChange}
          className="border rounded-xl p-4 md:col-span-2"
          rows="5"
          placeholder={t.notePlaceholder}
        />

        {message && (
          <div className="md:col-span-2 bg-blue-50 text-blue-700 p-4 rounded-xl">
            {message}
          </div>
        )}

        <button
          disabled={loading}
          className="md:col-span-2 bg-orange-500 text-white py-4 rounded-xl font-semibold hover:bg-orange-600 disabled:opacity-60"
        >
          {loading ? t.sending : t.sendBooking}
        </button>
      </form>
    </div>
  );
}

export default Booking;