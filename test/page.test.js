import {render, screen} from "@testing-library/react"
import '@testing-library/jest-dom'
import Home from "../app/page"

jest.mock("next/image", ()=> (props)=> <img {...props} alt={props.alt || ""} />)

describe("Verificar información cargada en Home", () => {

  beforeEach(() => {
    render(<Home />);
  });

  test("renderiza los títulos principales", () => {
    expect(screen.getByRole("heading", { name: /Mi Historia\.cl/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Portada/i })).toBeInTheDocument();
  });

  test("muestra la cita de Gitano Rodríguez", () => {
    expect(screen.getByText(/Yo no he sabido nunca de su historia/i)).toBeInTheDocument();
    expect(screen.getByText(/Gitano Rodriguez/i)).toBeInTheDocument();
  });

  test("contiene las secciones principales", () => {
    expect(screen.getByText(/La problematica/i)).toBeInTheDocument();
    expect(screen.getByText(/Propuesta/i)).toBeInTheDocument();
    expect(screen.getByText(/Noticias/i)).toBeInTheDocument();
  });

  test("muestra imágenes con descripciones correctas", () => {
    expect(screen.getByAltText(/comparacion de calle cochrane antes y hoy/i)).toBeInTheDocument();
    expect(screen.getByAltText(/restauran mural/i)).toBeInTheDocument();
    expect(screen.getByAltText(/voluntarios limpian plazas/i)).toBeInTheDocument();
    expect(screen.getByAltText(/turismo patrimonial/i)).toBeInTheDocument();
  });

  test("muestra las tres noticias correctamente", () => {
    expect(screen.getByText(/Vecinos restauran mural histórico/i)).toBeInTheDocument();
    expect(screen.getByText(/Jornada de limpieza comunitaria/i)).toBeInTheDocument();
    expect(screen.getByText(/Campaña educativa sobre patrimonio/i)).toBeInTheDocument();
  });

});