'use client';

import { useState } from "react";
import { use } from "react";
import Image from "next/image";

export default function Page({ params }) {
  const { zona } = use(params);
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [1, 2, 3].map(
    (num) => `/img/${zona}/${num}.jpg`
  );

  return (
    <div className="contenido px-4 md:px-10 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center capitalize">
        {zona.replace(/_/g, " ")}
      </h2>

      {/* Miniaturas */}
      <div className="Galeria grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {images.map((src, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => setSelectedImg(src)}
          >
            <Image
              src={src}
              alt={`Foto ${index + 1} de ${zona}`}
              width={400} // ajusta miniatura
              height={300}
              className="object-cover w-full h-auto"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-6 text-white text-3xl font-bold hover:text-gray-300 z-50"
              onClick={() => setSelectedImg(null)}
            >
              ✕
            </button>

            <Image
              src={selectedImg}
              alt="Foto ampliada"
              width={1200}    // tamaño máximo aproximado
              height={900}
              className="rounded-lg shadow-2xl object-contain max-h-[90vh] max-w-[90vw]"
              sizes="(max-width: 768px) 90vw, 80vw"
            />
          </div>
        </div>
      )}
    </div>
  );
}
