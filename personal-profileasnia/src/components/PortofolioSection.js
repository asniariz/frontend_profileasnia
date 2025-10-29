import React from "react";
import { FiExternalLink } from "react-icons/fi";

function PortofolioSection() {
  const portfolios = [
    {
      id: 1,
      title: "GoFinance App",
      category: "Mobile App",
      description:
        "Aplikasi manajemen keuangan dengan desain yang clean, modern, dan mudah digunakan.",
      image: '/portofolio/porto1.jpg.png',
      link: "#",
      badgeColor: "text-blue-600",
    },
    {
      id: 2,
      title: "EduSmart Landing Page",
      category: "Website",
      description:
        "Landing page untuk platform pendidikan dengan fokus pada visual storytelling & UX.",
      image: '/portofolio/porto2.jpg.webp',
      link: "#",
      badgeColor: "text-pink-600",
    },
    {
      id: 3,
      title: "DataHub Dashboard",
      category: "Dashboard",
      description:
        "Dashboard analytics untuk SaaS dengan visual data yang interaktif & engaging.",
      image: '/portofolio/porto3.jpg.webp',
      link: "#",
      badgeColor: "text-purple-600",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="portfolio">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Portfolio Pilihan
        </h2>
        <p className="text-gray-500 mb-12">
          Beberapa project terbaik yang pernah saya kerjakan untuk klien lokal maupun internasional.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolios.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >

              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy'"
                  className="w-full h-56 md:h-60 object-cover transition-transform duration-300 will-change-transform hover:scale-[1.02]"
                />

                <span
                  className={`absolute top-4 left-4 bg-white ${item.badgeColor} text-sm font-medium px-3 py-1 rounded-full shadow-md flex items-center gap-1`}
                >
                    {item.category === "Mobile App" && <span>📱</span>}
                    {item.category === "Website" && <span>🌐</span>}
                    {item.category === "Dashboard" && <span>📊</span>}
                    {item.category}
                </span>
              </div>

              <div className="p-6 text-left">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  {item.description}
                </p>

                <a
                  href={item.link}
                  className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-md hover:opacity-90 transition-all duration-300"
                >
                  <FiExternalLink className="mr-2" /> Lihat Detail
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortofolioSection;