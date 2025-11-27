import { useState } from "react";
import Image from "next/image";

export default function PageZonaMocks({ params }) {
  const { zona } = params; // simulamos la zona recibida por props
  const [selectedImg, setSelectedImg] = useState(null);

  // Creamos un array de imágenes de ejemplo
  const images = [1, 2, 3].map((num) => `/img/${zona}/${num}.jpg`);

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
              width={400}
              height={300}
              className="object-cover w-full h-auto"
            />
          </div>
        ))}
      </div>

      {/* Lightbox simulado */}
      {selectedImg && (
        <div
          data-testid="lightbox"
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
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
              width={1200}
              height={900}
              className="rounded-lg shadow-2xl object-contain max-h-[90vh] max-w-[90vw]"
            />
          </div>
        </div>
      )}
    </div>
  );
}
