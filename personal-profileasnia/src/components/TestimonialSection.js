import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Citra Nadya",
    role: "Product Manager, Fintech",
    photo: "/testimonials/citra.jpg",
    text:
      "Arie mampu memahami kebutuhan tim kami dan menerjemahkannya menjadi desain yang sangat user-friendly. Komunikasi dan delivery selalu on time!",
  },
  {
    id: 2,
    name: "Rama Putra",
    role: "CEO, Edustartup",
    photo: "/testimonials/rama.jpg",
    text:
      "Kreativitas & kecepatan kerja Arie luar biasa. Landing page yang dibuatkan sangat modern & efektif meningkatkan konversi produk kami.",
  },
];

function TestimonialSection() {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
          Testimoni Klien
        </h2>
        <p className="text-center text-gray-500 mt-2 mb-10">
          Apa kata mereka yang pernah bekerja sama dengan saya.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6"
            >
              {/* header */}
              <div className="flex items-center gap-4 mb-4">
                {/* Foto avatar */}
                <img
                  src={t.photo}
                  alt={t.name}
                  width={56}
                  height={56}
                  loading="lazy"
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-white shadow"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/112x112.png?text=👤";
                  }}
                />

                <div>
                  <h3 className="font-semibold text-gray-900 leading-tight">
                    {t.name}
                  </h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>

              <p className="relative text-gray-600 leading-relaxed pl-7">
                <FaQuoteLeft className="absolute left-0 top-1 text-blue-500/70" />
                {t.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;