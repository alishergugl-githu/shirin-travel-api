function Payment() {
  const cardNumber = "9860 1701 0803 1213";

  function copyCard() {
    navigator.clipboard.writeText(cardNumber);
    alert("Karta raqami nusxalandi ✅");
  }

  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <h1 className="text-5xl font-bold text-slate-800">To‘lov qilish</h1>

      <p className="mt-4 text-gray-600">
        Bron tasdiqlangandan so‘ng quyidagi karta orqali to‘lov qilishingiz mumkin.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        <div className="bg-white rounded-3xl shadow-xl p-8 border">
          <h2 className="text-2xl font-bold text-slate-800">Karta orqali</h2>

          <p className="mt-4 text-gray-600">Karta raqami:</p>

          <div className="mt-3 bg-slate-100 rounded-2xl p-5 text-2xl font-bold text-slate-800">
            {cardNumber}
          </div>

          <p className="mt-4 text-gray-600">Karta egasi:</p>
          <p className="font-semibold text-slate-800">Shirin Travel</p>

          <button
            onClick={copyCard}
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"
          >
            Karta raqamini nusxalash
          </button>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 border">
          <h2 className="text-2xl font-bold text-slate-800">Payme</h2>

          <p className="mt-4 text-gray-600">
            Hozircha Payme havolasi test rejimida. Keyinchalik merchant ID orqali ulanadi.
          </p>

          <button className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-xl opacity-70">
            Tez orada
          </button>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 border">
          <h2 className="text-2xl font-bold text-slate-800">Click</h2>

          <p className="mt-4 text-gray-600">
            Click to‘lov tizimi keyingi bosqichda ulanadi.
          </p>

          <button className="mt-6 w-full bg-green-600 text-white py-3 rounded-xl opacity-70">
            Tez orada
          </button>
        </div>
      </div>

      <div className="mt-10 bg-orange-50 border border-orange-200 rounded-3xl p-6">
        <h3 className="text-xl font-bold text-orange-700">Muhim eslatma</h3>
        <p className="mt-2 text-gray-700">
          To‘lov qilgandan so‘ng chekni Telegram orqali operatorga yuboring.
        </p>
      </div>
    </div>
  );
}

export default Payment;