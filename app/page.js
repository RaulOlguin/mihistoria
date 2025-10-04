import Image from "next/image";
export default function Home() {
  return(
    <>
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
            <div className="imagen">
                <Image 
                  src="/img/comb_bustamante.jpg"
                  alt="comparacion de calle cochrane antes y hoy."
                  width={600}
                  height={400}
                />
            </div>
            <div className="texto">
                Unos de los problemas que tiene la ciudad de valparaiso frente a su patrimonio es
                el abandono.<br/>Hoy sus habitantes no conocen su historia, no existe una campaña 
                que permita transmitir los valores y conocer lo que fue.<br/>
                Nadie puede querer lo que no conoce.<br/>
                La idea de esta pagina es transmitir y promocionar el patrimonio por medio de material
                audiovisual recolpilado.
            </div>

        </div>
        
      </div>
    
  </>
  );
}
