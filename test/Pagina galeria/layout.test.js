import { render, screen } from "@testing-library/react";
import GaleriaPageRoot from "@/app/Galeria/layout";

jest.mock("@/components/NavbarGaleria", () => () => <nav>NavbarGaleria</nav>);

describe("Layout Galería", () => {
  test("renderiza título, navbar y children", () => {
    render(
      <GaleriaPageRoot>
        <div>Contenido de prueba</div>
      </GaleriaPageRoot>
    );

    expect(screen.getByRole("heading", { name: /Mi Historia\.cl/i })).toBeInTheDocument();
    expect(screen.getByText(/NavbarGaleria/i)).toBeInTheDocument();
    expect(screen.getByText(/Contenido de prueba/i)).toBeInTheDocument();
  });
});
