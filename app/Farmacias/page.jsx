"use client";

import { useEffect, useState } from "react";

export default function Farmacia() {
  const [farmacias, setFarmacias] = useState([]);
  const [comunas, setComunas] = useState([]);
  const [filtroComuna, setFiltroComuna] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://midas.minsal.cl/farmacia_v2/WS/getLocalesTurnos.php", {
      method: "GET",
      cache: "no-store",
    })
      .then((res) => res.text())
      .then((text) => {
        try {
          const json = JSON.parse(text);

          setFarmacias(json);

          // Obtener comunas únicas para el filtro
          const comunasUnicas = [...new Set(json.map((f) => f.comuna_nombre))].sort();
          setComunas(comunasUnicas);

        } catch (e) {
          setError("Error al parsear JSON del MINSAL");
        }
      })
      .catch((err) => setError(err.message));
  }, []);

  const farmaciasFiltradas = filtroComuna
    ? farmacias.filter((f) => f.comuna_nombre === filtroComuna)
    : farmacias;

  if (error) return <pre className="text-red-500">{error}</pre>;
  if (!farmacias.length) return <p className="p-4">Cargando farmacias…</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto pt-20">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Farmacias de Turno
      </h1>

      {/* FILTRO */}
      <div className="mb-6">
        <label className="block mb-2 text-gray-700 font-medium">
          Filtrar por comuna
        </label>

        <select
          className="border border-gray-300 rounded-lg p-2 w-full md:w-64 bg-white"
          onChange={(e) => setFiltroComuna(e.target.value)}
          value={filtroComuna}
        >
          <option value="">Todas las comunas</option>
          {comunas.map((comuna) => (
            <option key={comuna} value={comuna}>
              {comuna}
            </option>
          ))}
        </select>
      </div>

      {/* TABLA */}
      <div className="overflow-x-auto border rounded-lg shadow-sm">
        <table className="min-w-full bg-white">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Local</th>
              <th className="py-3 px-4 text-left">Comuna</th>
              <th className="py-3 px-4 text-left">Dirección</th>
              <th className="py-3 px-4 text-left">Teléfono</th>
              <th className="py-3 px-4 text-left">Horario</th>
            </tr>
          </thead>

          <tbody>
            {farmaciasFiltradas.map((f, i) => (
              <tr
                key={i}
                className="border-b hover:bg-gray-100 transition-colors"
              >
                <td className="py-2 px-4">{f.local_nombre}</td>
                <td className="py-2 px-4">{f.comuna_nombre}</td>
                <td className="py-2 px-4">{f.local_direccion}</td>
                <td className="py-2 px-4">{f.local_telefono || "—"}</td>
                <td className="py-2 px-4">
                  {f.funcionamiento_hora_apertura} — {f.funcionamiento_hora_cierre}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cantidad */}
      <p className="mt-4 text-gray-600">
        Mostrando {farmaciasFiltradas.length} farmacias
      </p>
    </div>
  );
}
