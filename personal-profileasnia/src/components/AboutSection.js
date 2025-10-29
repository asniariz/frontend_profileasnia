import React from "react";
import { FaUserAlt, FaCheck } from "react-icons/fa";

function AboutSection() {
  return (
    <section className="bg-gray-50 py-20 px-6 font-poppins">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col md:flex-row items-center md:items-start gap-8 mb-20">
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-white text-4xl shadow-md">
            <FaUserAlt />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Tentang Saya
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Saya adalah seorang mahasiswa yang tertarik dibidang <b>UI/UX Designer & Web Developer dan Management</b> berdomisili
              di Surabaya dengan pengalaman lebih dari 4 tahun di industri kreatif.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mb-8 text-center">
              <span className="flex items-center gap-2">
                <FaCheck className="text-blue-500" /> Problem Solver
              </span>
              <span className="flex items-center gap-2">
                <FaCheck className="text-blue-500" /> Team Player
              </span>
              <span className="flex items-center gap-2">
                <FaCheck className="text-blue-500" /> Fast Learner
              </span>
              <span className="flex items-center gap-2">
                <FaCheck className="text-blue-500" /> Kreatif & Adaptif
              </span>
            </div>

            <button className="flex items-center justify-center gap-3 w-full mx-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:opacity-90 transition-all duration-300">
            <span className="text-lg">💬</span>
            Konsultasi Gratis
            </button>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Keahlian
          </h2>
          <p className="text-gray-600 mb-10">
            Saya menguasai berbagai tools dan teknologi untuk membangun produk digital yang modern.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition-all">
              <span className="text-3xl text-blue-500 mb-3">🎨</span>
              <h3 className="font-semibold text-gray-800">Figma</h3>
              <p className="text-gray-500 text-sm">UI Design, Prototyping</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition-all">
              <span className="text-3xl text-yellow-400 mb-3">💻</span>
              <h3 className="font-semibold text-gray-800">JavaScript</h3>
              <p className="text-gray-500 text-sm">Front-End Development</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition-all">
              <span className="text-3xl text-purple-500 mb-3">⚛️</span>
              <h3 className="font-semibold text-gray-800">React</h3>
              <p className="text-gray-500 text-sm">Web Apps & SPA</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition-all">
              <span className="text-3xl text-pink-500 mb-3">🌐</span>
              <h3 className="font-semibold text-gray-800">HTML & CSS</h3>
              <p className="text-gray-500 text-sm">Responsive Design</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;