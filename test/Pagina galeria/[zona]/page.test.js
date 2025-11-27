import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

// Mock del componente Next.js Image
jest.mock("next/image", () => (props) => <img {...props} />);

// Importamos nuestro mock de la página
import Page from "test/mocks/PageZonaMocks";

// Describimos la suite de tests
describe("Página Galería - Zona", () => {
  const params = { zona: "playa" }; // simulamos la zona

  beforeEach(() => {
    render(<Page params={params} />);
  });

  test("renderiza el título con la zona correcta", () => {
    expect(
      screen.getByRole("heading", { name: /playa/i })
    ).toBeInTheDocument();
  });

  test("renderiza las miniaturas", () => {
    const miniaturas = screen.getAllByAltText(/Foto \d+ de playa/i);
    expect(miniaturas).toHaveLength(3);
  });

  test("abre el lightbox al hacer click en una miniatura", () => {
    const miniaturas = screen.getAllByAltText(/Foto \d+ de playa/i);

    // Simulamos click en la primera miniatura
    fireEvent.click(miniaturas[0]);

    // Verificamos que el lightbox se abrió
    const lightbox = screen.getByTestId("lightbox");
    expect(lightbox).toBeInTheDocument();

    // Verificamos que la imagen dentro del lightbox sea la misma que la miniatura
    const imgAmpliada = screen.getByAltText("Foto ampliada");
    expect(imgAmpliada).toHaveAttribute("src", "/img/playa/1.jpg");
  });

  test("cierra el lightbox al hacer click en el overlay", () => {
    const miniaturas = screen.getAllByAltText(/Foto \d+ de playa/i);
    fireEvent.click(miniaturas[0]);

    const lightbox = screen.getByTestId("lightbox");
    fireEvent.click(lightbox);

    // Verificamos que el lightbox ya no está en el DOM
    expect(screen.queryByTestId("lightbox")).not.toBeInTheDocument();
  });
});
