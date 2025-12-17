import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, test, beforeEach, vi } from "vitest";
import SomosPage from "@/app/Somos/page";

// Mock de next/image
vi.mock("next/image", () => ({
  __esModule: true,
  default: (props) => <img {...props} alt={props.alt || ""} />,
}));


describe("Página Somos - Verificación de contenido", () => {
  beforeEach(() => {
    render(<SomosPage />);
  });

  test("muestra la información de Cristopher Osses", () => {
    // Buscamos la tarjeta de Cristopher por el heading
    const cristopherSection = screen
      .getByRole("heading", { name: /Cristopher Osses/i })
      .closest(".descripcion");

    // Usamos 'within' para limitar la búsqueda dentro de esa sección
    const withinCristopher = within(cristopherSection);

    expect(
      withinCristopher.getByText(
        /Estudiante de Ingenieria en informatica 4 semestre/i
      )
    ).toBeInTheDocument();
    expect(
      withinCristopher.getByText(/Nuestro Scrum Master/i)
    ).toBeInTheDocument();
    expect(
      withinCristopher.getByText(
        /Palabra clave: ESTE ES MI NUEVO POKEMON/i
      )
    ).toBeInTheDocument();

    // La imagen de Cristopher
    const imagenCristopher = screen.getByAltText(/imagen cristopher osses/i);
    expect(imagenCristopher).toBeInTheDocument();
  });
});
