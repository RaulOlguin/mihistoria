import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, test, beforeEach, vi } from "vitest";
import NavbarGaleria from "@/components/NavbarGaleria";

// Mock de next/link para tests
vi.mock("next/link", () => ({
  __esModule: true,
  default: (props) => <a {...props} />,
}));

describe("NavbarGaleria componente", () => {
  beforeEach(() => {
    render(<NavbarGaleria />);
  });

  test("muestra todos los enlaces con sus títulos", () => {
    const titles = ["Calle Blanco", "Pza Victoria", "Pza Soto Mayor", "Aduana"];
    titles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  test("cada tarjeta es un enlace clickeable", () => {
    const links = screen.getAllByRole("link");
    expect(links.length).toBe(4);
  });
});
