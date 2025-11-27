import Image from "next/image";
import { PulsatingButton } from "@/components/ui/pulsating-button";

export default function Home() {
  return(
    <>

      <PulsatingButton className="fixed top-20 right-4 z-40 bg-red-600 px-6 py-4">
        Farmacias
      </PulsatingButton>
    
      <div className="titulo">
        <h1>Mi Historia.cl</h1>
        <h2>Portada</h2>
      </div>
      
      <div>
        <div className="cuota">    
            <p>
              Yo no he sabido nunca de su historia, un dia naci alli sencillamente<br/>
              el viejo puerto vigilo mi infancia, con rostro de fria indiferencia...<br/><br/>
              <span>Gitano Rodriguez</span>
            </p>

        </div>
        <div className="contenido">
            <div className="subtitulo">
              <h2>La problematica</h2>
            </div>

            <div className="imagen">
                <Image 
                  src="/img/comb_bustamante.jpg"
                  alt="comparacion de calle cochrane antes y hoy."
                  width={600}
                  height={200}
                />
            </div>
            <div className="texto">
                Unos de los problemas que tiene la ciudad de valparaiso frente a su patrimonio es
                el abandono.<br/>Hoy sus habitantes no conocen su historia, no existe una campaña 
                que permita transmitir los valores y conocer lo que fue.<br/>
                Nadie puede querer lo que no conoce.<br/>
                
            </div>

            <div className="subtitulo">
                <h2>Propuesta</h2>
            </div>

            <div className="texto">
                No podemos disminuir la sensacion de vulnerabilidad de la poblacion, ni la cantidad de
                crimenes, pero nuestro granito de arena puede ser ocupar los conocimientos adquiridos para educar
                sobre el patrimonio de la ciudad y ayudar entregando conocimiento para que el habitante 
                pueda entender su herencia y dar un espacio a la comunidad que intenta mentener lo que es suyo.<br/>

                Por medio de codigos QR colocados en comercios asociados pretendemos dar acceso a imagenes
                e informacion del lugar para que los habitantes puedan acceder a su zona en aquellos años de
                esplendor.   
            </div>

            <div className="subtitulo">
                <h2>Noticias</h2>
            </div>
           
            <div className="px-8 py-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                  
                   <Image 
                  src="/img/mural.jpg"
                  alt="restauran mural."
                  width={600}
                  height={300}
                  style={{ objectFit: 'contain' }}
                />

                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Vecinos restauran mural histórico</h3>
                    <p>Un grupo de voluntarios del barrio Puerto se organizó para restaurar un mural patrimonial, promoviendo el cuidado y la identidad local.</p>
                  </div>
                </div>



                <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                   <Image 
                  src="/img/limpieza.jpg"
                  alt="voluntarios limpian plazas de la ciudad."
                  width={600}
                  height={300}
                  style={{ objectFit: 'contain' }}
                />

                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Jornada de limpieza comunitaria</h3>
                    <p>Más de 50 personas participaron en la limpieza de plazas y calles emblemáticas, demostrando el compromiso de la comunidad con el entorno urbano.</p>
                  </div>
                </div>



                <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                 <Image 
                  src="/img/turistas.jpg"
                  alt="turismo patrimonial."
                  width={600}
                  height={300}
                  style={{ objectFit: 'contain' }}
                />

                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Campaña educativa sobre patrimonio</h3>
                    <p>Escuelas locales lanzan talleres para niños y jóvenes, enseñando la importancia de preservar la historia y el patrimonio de Valparaíso.</p>
                  </div>
                </div>
              </div>
            </div>


        </div>
        
      </div>
    
  </>
  );
}
