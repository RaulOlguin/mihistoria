import { render, screen } from "@testing-library/react";
import NavbarGaleria from "@/components/NavbarGaleria";
import { describe, test } from "vitest";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider"; // Opcional para simular Next.js Router

// Mock de next/link para tests
vi.mock("next/link", () => {
  return ({ href, children }) => <a href={href}>{children}</a>;
});

describe("NavbarGaleria componente", () => {
  test("muestra todos los enlaces con sus títulos y estilos de fondo", () => {
    render(
      <MemoryRouterProvider>
        <NavbarGaleria />
      </MemoryRouterProvider>
    );

    // Verificar que cada título esperado está presente
    const titles = ["Calle Blanco", "Pza Victoria", "Pza Soto Mayor", "Aduana"];
    titles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });

    // Opcional: verificar que se aplicó estilo de fondo a las divisiones con la clase banner-item-premium
    const links = screen.getAllByRole("link");
    expect(links.length).toBe(titles.length);
    links.forEach((link, i) => {
      expect(link).toHaveClass("banner-item-premium");
      // No se puede testear el backgroundImage directamente sin inspección avanzada en jest-dom
    });
  });
});
