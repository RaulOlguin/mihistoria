import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SomosPage from "../app/Somos/page";

// Mock del componente next/image (evita errores en Jest)
jest.mock("next/image", () => (props) => <img {...props} alt={props.alt || ""} />);

describe("Página Somos - Verificación de contenido", () => {
  
  beforeEach(() => {
    render(<SomosPage />);
  });

  //  Test 1: Títulos principales 
  test("renderiza los títulos principales", () => {
    expect(screen.getByRole("heading", { name: /Mi Historia\.cl/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Somos/i })).toBeInTheDocument();
  });

  //  Test 2: Párrafos de descripción del equipo 
  test("muestra los textos de presentación del equipo", () => {
    expect(screen.getByText(/Somos uno de los varios equipos formandose en Informatica Vespertino/i)).toBeInTheDocument();
    expect(screen.getByText(/Viajamos juntos a nuestros compañeros y profesores/i)).toBeInTheDocument();
    expect(screen.getByText(/buscamos adquirir nuevos conocimientos/i)).toBeInTheDocument();
    expect(screen.getByText(/Queremos que nuestro entorno sea beneficiado/i)).toBeInTheDocument();
  });

  //  Test 3: Datos de Cristopher Osses 
  test("muestra la información de Cristopher Osses", () => {
    expect(screen.getByRole("heading", { name: /Cristopher Osses/i })).toBeInTheDocument();
    expect(screen.getByText(/Estudiante de Ingenieria en informatica 4 semestre/i)).toBeInTheDocument();
    expect(screen.getByText(/Nuestro Scrum Master/i)).toBeInTheDocument();
    expect(screen.getByText(/Palabra clave: ESTE ES MI NUEVO POKEMON/i)).toBeInTheDocument();
    expect(screen.getByAltText(/imagen cristopher osses/i)).toBeInTheDocument();
  });

  //  Test 4: Datos de Raúl Olguín 
  test("muestra la información de Raúl Olguín", () => {
    expect(screen.getByRole("heading", { name: /Raul Olguin/i })).toBeInTheDocument();
    expect(screen.getByText(/Empedernado jugador/i)).toBeInTheDocument();
    expect(screen.getByText(/Palabra clave: Rauuuuuuuulll/i)).toBeInTheDocument();
    expect(screen.getByAltText(/imagen Raul Olguin/i)).toBeInTheDocument();
  });

  //  Test 5: Estructura básica de clases (verifica que existan las secciones principales) 
  test("usa las clases CSS principales en el layout", () => {
    expect(document.querySelector(".titulo")).toBeInTheDocument();
    expect(document.querySelector(".contenido")).toBeInTheDocument();
    expect(document.querySelector(".targeta2")).toBeInTheDocument();
    expect(document.querySelector(".targeta")).toBeInTheDocument();
  });

});
