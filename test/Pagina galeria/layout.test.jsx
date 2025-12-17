import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, test, vi } from "vitest";
import GaleriaPageRoot from "@/app/Galeria/layout";

vi.mock("@/components/NavbarGaleria", () => ({
  __esModule: true,
  default: () => <div>Mock NavbarGaleria</div>,
}));

describe("Layout Galería", () => {
  test("renderiza título, navbar y children", () => {
    render(
      <GaleriaPageRoot>
        <div>Contenido de prueba</div>
      </GaleriaPageRoot>
    );

    expect(
      screen.getByRole("heading", { name: /Mi Historia\.cl/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/NavbarGaleria/i)).toBeInTheDocument();
    expect(screen.getByText(/Contenido de prueba/i)).toBeInTheDocument();
  });
});
