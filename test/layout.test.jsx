import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, test, vi } from "vitest";
import RootLayout from "@/app/layout";

// Mock de next/font/google
vi.mock("next/font/google", () => ({
  __esModule: true,
  Castoro: () => ({
    style: { fontFamily: "mocked-castoro" },
    className: "mocked-castoro",
  }),
  Inter: () => ({
    style: { fontFamily: "mocked-inter" },
    className: "mocked-inter",
  }),
}));

// Mock de next/image
vi.mock("next/image", () => ({
  __esModule: true,
  default: (props) => <img {...props} alt={props.alt || ""} />,
}));

// Mock de Navbar
vi.mock("../components/Navbar", () => ({
  __esModule: true,
  default: () => <nav>Navbar</nav>,
}));

describe("Verificar informacion de pie de pagina", () => {
  test("el texto del footer se carga correctamente", () => {
    render(
      <RootLayout>
        <div>Contenido</div>
      </RootLayout>
    );

    expect(
      screen.getByText(/Alumnos: Raul Olguin, Cristopher Osses/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Profesor: Javier Sanchez/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Curso: Ingenieria Informatica Vespertino/i)
    ).toBeInTheDocument();

    expect(screen.getByText(/2025 - Duoc UC/i)).toBeInTheDocument();
  });

  test("el logo de duoc uc se renderiza", () => {
    render(
      <RootLayout>
        <div>Contenido</div>
      </RootLayout>
    );

    const logo = screen.getByAltText(/logo duoc uc/i);
    expect(logo).toBeInTheDocument();
  });

  test("el navbar se renderiza correctamente", () => {
    render(
      <RootLayout>
        <div>Contenido</div>
      </RootLayout>
    );

    expect(screen.getByText(/navbar/i)).toBeInTheDocument();
  });
});
