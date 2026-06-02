import { useEffect, useState } from "react";

function Admin() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = () => {
    fetch(`${import.meta.env.VITE_API_URL}/api/bookings`)
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch(() => alert("Bronlarni olishda xatolik"));
  };

  const updateStatus = async (id, newStatus) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/bookings/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: newStatus,
        }),
      });

      if (!res.ok) {
        throw new Error("Status yangilanmadi");
      }

      setBookings((prev) =>
        prev.map((booking) =>
          booking.id === id ? { ...booking, status: newStatus } : booking
        )
      );
    } catch (error) {
      alert("Statusni yangilashda xatolik");
    }
  };

  const getStatusStyle = (status) => {
    if (status === "confirmed") {
      return "bg-green-100 text-green-700 border-green-300";
    }

    if (status === "cancelled") {
      return "bg-red-100 text-red-700 border-red-300";
    }

    return "bg-yellow-100 text-yellow-700 border-yellow-300";
  };

  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-8">Admin panel</h1>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-900 text-white">
            <tr>
              <th className="p-4">Ism</th>
              <th className="p-4">Telefon</th>
              <th className="p-4">Yo‘nalish</th>
              <th className="p-4">Kishi</th>
              <th className="p-4">Status</th>
              <th className="p-4">Sana</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-4">{item.name}</td>
                <td className="p-4">{item.phone}</td>
                <td className="p-4">{item.destination}</td>
                <td className="p-4">{item.travelers}</td>

                <td className="p-4">
                  <select
                    value={item.status || "new"}
                    onChange={(e) => updateStatus(item.id, e.target.value)}
                    className={`border px-3 py-2 rounded-lg font-medium ${getStatusStyle(
                      item.status
                    )}`}
                  >
                    <option value="new">New</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </td>

                <td className="p-4">
                  {new Date(item.created_at).toLocaleString()}
                </td>
              </tr>
            ))}

            {bookings.length === 0 && (
              <tr>
                <td colSpan="6" className="p-6 text-center text-gray-500">
                  Hozircha bronlar yo‘q
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;