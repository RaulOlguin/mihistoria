// src/components/BotonAgregar.js
"use client"; // Esto permite interactividad

import { useCarrito } from "@/context/CarritoContext";

export default function BotonAgregar({ producto }) {
  const { agregarAlCarrito } = useCarrito();

  return (
    <button 
      onClick={() => agregarAlCarrito(producto)}
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors w-full"
    >
      Agregar al Carrito
    </button>
  );
}