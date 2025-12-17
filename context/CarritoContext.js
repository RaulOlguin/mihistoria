// src/context/CarritoContext.js
"use client"; // ¡Importante! Esto usa hooks de React

import { createContext, useContext, useState } from "react";

const CarritoContext = createContext();

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  // Función para agregar un producto
  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      // Verificamos si ya existe para aumentar cantidad
      const existe = prev.find((item) => item.id === producto.id);
      if (existe) {
        return prev.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      // Si no existe, lo agregamos con cantidad 1
      return [...prev, { ...producto, cantidad: 1 }];
    });
    
    // Opcional: Una alerta visual simple
    alert(`Agregaste ${producto.nombre} al carrito 🛒`);
  };

  // --- Eliminar del Carrito ---
  const eliminarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  };
  

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
}

// Hook personalizado para usar el carrito fácil
export const useCarrito = () => useContext(CarritoContext);