import { obtenerRecuerdos } from '@/lib/dbRecuerdos';
import BotonAgregar from '@/components/BotonAgregar'; // Importamos el componente

export default async function PaginaTienda() {
  const recuerdos = await obtenerRecuerdos();

  return (
    <div className="p-8 max-w-6xl mx-auto pt-20">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-900">
        Recuerdos del Puerto
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recuerdos.map((producto) => (
          <div key={producto.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            
            {/* Imagen (simulada o real) */}
            <div className="h-48 w-full bg-gray-200 relative">
              {producto.imagen ? (
                <img 
                  src={producto.imagen} 
                  alt={producto.nombre}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">Sin Imagen</div>
              )}
            </div>
            
            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{producto.nombre}</h2>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{producto.descripcion}</p>
              
              <div className="flex justify-between items-center items-end mt-4 gap-4">
                <span className="text-2xl font-bold text-green-600">
                  ${producto.precio?.toLocaleString('es-CL')}
                </span>
                
                {/* AQUÍ ESTÁ LA MAGIA: Pasamos el producto completo al botón */}
                <div className="flex-1">
                    <BotonAgregar producto={producto} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}