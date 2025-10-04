import Image from "next/image";


function SomosPage() {
    return (
        <>
        <div className="titulo">
            <h1>Mi Historia.cl</h1>
            <h2>Somos</h2>
        </div>

        <div className="contenido">
            <p>Somos uno de los varios equipos formandose en Informatica Vespertino de Duoc UC</p>
            <p>Viajamos juntos a nuestros compañeros y profesores en esta aventura por ser profesionales de excelencia</p>
            <p>buscamos adquirir nuevos conocimientos y entregar valor agregado a la sociedad que nos rodea</p>
            <p>Queremos que nuestro entorno sea beneficiado porque entendemos que en nuestro entorno tambien estan nuestros seres queridos</p>
        </div>
        
       

        <div className="targeta2">
                        
            <div className="descripcion">
                <h3>Cristopher Osses</h3>
                <p>Estudiante de Ingenieria en informatica 4 semestre</p>
                <p>Nuestro Scrum Master, perdoname por entregar atrasao, chiquillas esta soltero</p>
                <p>Palabra clave: ESTE ES MI NUEVO POKEMON</p>
            </div>

            <div>
                <Image 
                        src="/img/cristopher.jpg"
                        alt="imagen cristopher osses."
                        width={200}
                        height={100}
                    />
            </div>

        </div>

    <div className="targeta">
            <div>
                <Image 
                        src="/img/raul.jpg"
                        alt="imagen Raul Olguin."
                        width={200}
                        height={100}
                    />
            </div>
            
            <div className="descripcion">
                <h3>Raul Olguin</h3>
                <p>Estudiante de Ingenieria en informatica 4 semestre</p>
                <p>Empedernado jugador lleva 20 años jugando el mismo juego, todavia envida al niño que se dio buelta el tetris</p>
                <p>Palabra clave: Rauuuuuuuulll</p>
            </div>

    </div>








        </>

    );
}
export default SomosPage;