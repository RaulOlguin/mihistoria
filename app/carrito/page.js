"use client";

import { useCarrito } from "@/context/CarritoContext";
import { Trash2, ArrowLeft, CreditCard } from "lucide-react"; // Agregué CreditCard para que se vea más pro
import Link from "next/link";

export default function PaginaCarrito() {
  const { carrito, eliminarDelCarrito } = useCarrito();

  // Calcular el total
  const total = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

  // Función SIMULADA para la presentación
  const simularCompra = () => {
    alert("¡Gracias por tu compra! \n\nEsta es una versión de demostración. En la versión final, aquí se conectará la pasarela de pagos.");
  };

  if (carrito.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-4">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Tu carrito está vacío 😔</h2>
        <p className="text-gray-500 mb-8">Parece que no has agregado ningún recuerdo de Valparaíso aún.</p>
        <Link href="/tienda" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
          <ArrowLeft size={20} /> Volver a la Tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10">
      <h1 className="text-3xl font-bold mb-8 text-blue-900 border-b pb-4 pt-15">Tu Pedido</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* LISTA DE PRODUCTOS */}
        <div className="md:col-span-2 space-y-4">
          {carrito.map((item) => (
            <div key={item.id} className="flex gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100 items-center">
              
              {/* Imagen */}
              <div className="w-20 h-20 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
                 {/* Asegúrate de que las imágenes existan, si no, usa un placeholder */}
                 <img src={item.imagen} alt={item.nombre} className="w-full h-full object-cover" />
              </div>

              {/* Info */}
              <div className="flex-1">
                <h3 className="font-bold text-gray-800">{item.nombre}</h3>
                <p className="text-sm text-gray-500">${item.precio.toLocaleString('es-CL')} c/u</p>
                <div className="mt-1 text-sm font-medium text-blue-600">
                  Cantidad: {item.cantidad}
                </div>
              </div>

              {/* Subtotal y Borrar */}
              <div className="text-right">
                <p className="font-bold text-lg mb-2">
                    ${(item.precio * item.cantidad).toLocaleString('es-CL')}
                </p>
                <button 
                  onClick={() => eliminarDelCarrito(item.id)}
                  className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-full transition"
                  title="Eliminar producto"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* RESUMEN DE PAGO */}
        <div className="md:col-span-1">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 sticky top-24">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Resumen</h3>
            
            <div className="flex justify-between mb-2 text-gray-600">
              <span>Subtotal</span>
              <span>${total.toLocaleString('es-CL')}</span>
            </div>
            <div className="flex justify-between mb-6 text-gray-600">
              <span>Envío</span>
              <span className="text-green-600 font-medium">Gratis</span>
            </div>
            
            <div className="border-t pt-4 flex justify-between items-center mb-6">
              <span className="text-xl font-bold">Total</span>
              <span className="text-2xl font-bold text-blue-800">${total.toLocaleString('es-CL')}</span>
            </div>

            {/* BOTÓN GENÉRICO PARA DEMO */}
            <button 
                onClick={simularCompra}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition shadow-md flex justify-center items-center gap-2"
            >
                <CreditCard size={20} />
                Finalizar Compra
            </button>
            
          </div>
        </div>

      </div>
    </div>
  );
}