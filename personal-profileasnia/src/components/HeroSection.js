import React from 'react';
import profile from '../assets/images/images.jpg';

function HeroSection() {
  return (
    <section className="relative w-full h-[600px] bg-hero-gradient flex items-center justify-center font-poppins overflow-hidden">
      <div className="absolute w-[240px] h-[240px] -left-16 top-[80px] rounded-full bg-circle-blue opacity-20 z-0"></div>
      <div className="absolute w-[320px] h-[320px] right-[80px] bottom-[40px] rounded-full bg-circle-pink opacity-20 z-0"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto px-10 lg:pl-[220px] gap-12">
        <div className="text-center lg:text-left max-w-xl">
          <p className="text-gray-400 text-sm tracking-[2.4px] uppercase">Hi, I'm</p>
          <h1 className="text-5xl font-bold text-gray-800 mt-2">
            Asnia Rizki Maghfiroh
          </h1>

          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-md w-fit px-6 py-2 mt-4 mx-auto lg:mx-0">
            <p className="text-white font-medium text-[16px]">
              UI/UX Designer & Web Developer
            </p>
          </div>

          <p className="text-gray-600 mt-5 leading-relaxed">
            Membantu brand dan bisnis membangun produk digital yang impactful lewat desain yang kreatif, modern, dan user-centric.
          </p>

          <div className="flex justify-center lg:justify-start gap-4 mt-8">
            <button className="bg-primary text-white px-6 py-2 rounded-xl shadow hover:bg-blue-600 transition duration-300">
              Lihat Karya
            </button>
            <button className="border-2 border-primary text-primary px-6 py-2 rounded-xl hover:bg-blue-50 transition duration-300">
              Hubungi Saya
            </button>
          </div>
        </div>

        <div className="relative flex-shrink-0">
          <img
            src={profile}
            alt="Profile"
            className="w-[288px] h-[288px] object-cover rounded-2xl border-8 border-white shadow-xl"
          />
          <span className="absolute -top-6 -left-6 bg-white shadow-md rounded-xl p-3">
            <i className="text-blue-500 text-xl">📍</i>
          </span>
          <span className="absolute bottom-0 right-0 bg-gradient-to-r from-purple-500 to-pink-400 p-3 rounded-full shadow-lg">
            <i className="text-white text-lg">🚀</i>
          </span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;