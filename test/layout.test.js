import {render, screen } from "@testing-library/react"
import RootLayout from "@/app/layout"

jest.mock("next/image", ()=> (props)=> {
    return<img{...props}/>;
}) ;

jest.mock("../components/Navbar", ()=>()=><nav>Navbar</nav>);

describe('Verificar informacion de pie de pagina', ()=> {

    test('el texto del footer se carga correctamente',()=>{

        render(<RootLayout><div>Contenido</div></RootLayout>);

        expect(
            screen.getByText(/Alumnos: Raul Olguin, Cristopher Osses/i)
        
        ).toBeInTheDocument();

        expect(
            screen.getByText(/Profesor: Javier Sanchez/i)
        
        ).toBeInTheDocument();

        expect(
            screen.getByText(/Curso: Ingenieria Informatica Vespertino/i)
        
        ).toBeInTheDocument();

        expect(
            screen.getByText(/2025 - Duoc UC/i)
        
        ).toBeInTheDocument();

        
    });//fin del test footer


    test("el logo de duoc uc se renderiza", () => {

    render(<RootLayout><div>Contenido</div></RootLayout>);

    //Buscamos la imagen por atributo alt
    const logo = screen.getByAltText(/logo duoc uc/i);
    
    expect(logo).toBeInTheDocument();
    
    });//Fin del test de logo


    test("el navbar se renderiza correctamente", () => {

    render(<RootLayout><div>Contenido</div></RootLayout>);

    expect(screen.getByText(/navbar/i)).toBeInTheDocument();

    });//Fin test navbar

    
});