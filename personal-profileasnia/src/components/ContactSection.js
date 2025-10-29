import React from "react";
import { FiMail, FiMapPin, FiSend, FiPhone } from "react-icons/fi";

function ContactSection() {
  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-2xl shadow-md p-10 flex flex-col md:flex-row justify-between gap-10">

          <div className="md:w-1/3">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Tertarik Kolaborasi?
            </h3>
            <p className="text-gray-600 mb-6">
              Yuk, diskusikan project impianmu. Saya siap membantu mewujudkan
              produk digital yang impactful buat bisnismu.
            </p>

            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex items-center gap-2">
                <FiMail className="text-blue-600" /> asniarizki8@email.com
              </li>
              <li className="flex items-center gap-2">
                <FiPhone className="text-green-500" /> 0821-4105-9551
              </li>
              <li className="flex items-center gap-2">
                <FiMapPin className="text-pink-500" /> Surabaya, Indonesia
              </li>
            </ul>
          </div>

          <div className="md:w-2/3 bg-white rounded-2xl p-8 shadow-md">
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Nama"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
              <textarea
                placeholder="Pesan"
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-md hover:opacity-90 transition-all duration-300 flex justify-center items-center gap-2"
              >
                <FiSend /> Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;