import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, test, beforeEach, vi } from "vitest";
import Navbar from "@/components/Navbar";

// Mock de next/link
vi.mock("next/link", () => ({
  __esModule: true,
  default: (props) => <a {...props} />,
}));

describe("Navbar funciona completamente", () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  test("renderiza los enlaces principales", () => {
    expect(screen.getByText(/Portada/i)).toBeInTheDocument();
    expect(screen.getByText(/Galeria/i)).toBeInTheDocument();
    expect(screen.getByText(/Contacto/i)).toBeInTheDocument();
    expect(screen.getByText(/Somos/i)).toBeInTheDocument();
  });

  test("cada enlace tiene su ícono correspondiente", () => {
    const portadaLink = screen.getByRole("link", { name: /portada/i });
    expect(portadaLink.querySelector("svg")).not.toBeNull();

    const galeriaLink = screen.getByRole("link", { name: /galeria/i });
    expect(galeriaLink.querySelector("svg")).not.toBeNull();

    const contactoLink = screen.getByRole("link", { name: /contacto/i });
    expect(contactoLink.querySelector("svg")).not.toBeNull();

    const somosLink = screen.getByRole("link", { name: /somos/i });
    expect(somosLink.querySelector("svg")).not.toBeNull();
  });
});
