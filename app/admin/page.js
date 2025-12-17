// src/app/admin/page.js
"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { Trash2, Plus, Save } from "lucide-react";

export default function AdminPage() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Estado para el formulario
  const [form, setForm] = useState({
    nombre: "",
    precio: "",
    imagen: "", // Por ahora usaremos URL de imagen
    descripcion: ""
  });

  // 1. LEER DATOS EN TIEMPO REAL (Read)
  useEffect(() => {
    // Nos suscribimos a la colección: si algo cambia, esto se ejecuta solo
    const unsub = onSnapshot(collection(db, "recuerdos"), (snapshot) => {
      const lista = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProductos(lista);
      setLoading(false);
    });

    return () => unsub(); // Limpieza al salir
  }, []);

  // 2. CREAR PRODUCTO (Create)
  const handleCrear = async (e) => {
    e.preventDefault();
    
    // Validación simple
    if (!form.nombre || !form.precio) return alert("Falta nombre o precio");

    try {
      await addDoc(collection(db, "recuerdos"), {
        nombre: form.nombre,
        precio: Number(form.precio), // Importante: guardar como número
        imagen: form.imagen || "https://via.placeholder.com/150", // Imagen por defecto si no ponen nada
        descripcion: form.descripcion
      });
      
      // Limpiar formulario
      setForm({ nombre: "", precio: "", imagen: "", descripcion: "" });
      alert("✅ Producto agregado correctamente");
    } catch (error) {
      console.error(error);
      alert("Error al guardar");
    }
  };

  // 3. ELIMINAR PRODUCTO (Delete)
  const handleEliminar = async (id) => {
    if (confirm("¿Estás seguro de borrar este producto permanentemente?")) {
      await deleteDoc(doc(db, "recuerdos", id));
    }
  };

  // Manejador de inputs del formulario
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-6xl mx-auto p-8 pt-20">
      <h1 className="text-4xl font-bold text-slate-800 mb-8 border-b pb-4">
        Panel de Administración
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* === SECCIÓN IZQUIERDA: FORMULARIO === */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 sticky top-24">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-700">
              <Plus size={20} /> Nuevo Producto
            </h2>
            
            <form onSubmit={handleCrear} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <input 
                  type="text" name="nombre" value={form.nombre} onChange={handleChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Ej: Imán Ascensor"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Precio ($)</label>
                <input 
                  type="number" name="precio" value={form.precio} onChange={handleChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Ej: 3000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">URL Imagen</label>
                <input 
                  type="text" name="imagen" value={form.imagen} onChange={handleChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                  placeholder="https://..."
                />
                <p className="text-xs text-gray-400 mt-1">Copia y pega una URL de Google Imágenes por ahora.</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
                <textarea 
                  name="descripcion" value={form.descripcion} onChange={handleChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none h-24 resize-none"
                  placeholder="Detalles del producto..."
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition flex justify-center items-center gap-2"
              >
                <Save size={18} /> Guardar Producto
              </button>
            </form>
          </div>
        </div>

        {/* === SECCIÓN DERECHA: LISTA DE PRODUCTOS === */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold mb-4 text-gray-700">Inventario Actual ({productos.length})</h2>
          
          {loading ? (
            <p>Cargando inventario...</p>
          ) : (
            <div className="bg-white rounded-xl shadow overflow-hidden border border-gray-200">
              <table className="w-full text-left border-collapse">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="p-4 font-semibold text-gray-600">Img</th>
                    <th className="p-4 font-semibold text-gray-600">Producto</th>
                    <th className="p-4 font-semibold text-gray-600">Precio</th>
                    <th className="p-4 font-semibold text-gray-600 text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {productos.map((prod) => (
                    <tr key={prod.id} className="hover:bg-gray-50 transition">
                      <td className="p-4">
                        <img src={prod.imagen} alt="img" className="w-10 h-10 rounded object-cover bg-gray-200" />
                      </td>
                      <td className="p-4">
                        <div className="font-medium text-gray-800">{prod.nombre}</div>
                        <div className="text-xs text-gray-500 truncate max-w-[150px]">{prod.descripcion}</div>
                      </td>
                      <td className="p-4 font-mono text-blue-600">
                        ${prod.precio.toLocaleString('es-CL')}
                      </td>
                      <td className="p-4 text-right">
                        <button 
                          onClick={() => handleEliminar(prod.id)}
                          className="bg-red-50 text-red-600 p-2 rounded hover:bg-red-100 transition border border-red-200"
                          title="Eliminar"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                  
                  {productos.length === 0 && (
                    <tr>
                      <td colSpan="4" className="p-8 text-center text-gray-500">
                        No hay productos. ¡Agrega el primero desde el formulario!
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}