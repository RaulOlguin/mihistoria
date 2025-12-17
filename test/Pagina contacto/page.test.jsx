import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, test, beforeEach, vi } from "vitest";
import ContactoPage from "../../app/Contacto/page";

// Evita errores con next/image (si lo usas)
vi.mock("next/image", () => ({
  __esModule: true,
  default: (props) => <img {...props} alt={props.alt || ""} />,
}));

describe("Página Contacto - ContactoPage", () => {
  beforeEach(() => {
    render(<ContactoPage />);
  });

  test("renderiza los títulos principales", () => {
    expect(
      screen.getByRole("heading", { name: /Mi Historia\.cl/i })
    ).toBeInTheDocument();

    const h2s = screen.getAllByRole("heading", { level: 2 });
    const contactoH2 = h2s.find((h2) => /Contacto/i.test(h2.textContent));
    expect(contactoH2).toBeInTheDocument();
  });

  test("muestra el formulario de contacto con sus campos", () => {
    const form = document.querySelector("form");
    expect(form).toBeInTheDocument();

    expect(screen.getByPlaceholderText(/Nombre/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Correo electrónico/i)
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Escribe tu mensaje/i)
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /Enviar/i })
    ).toBeInTheDocument();
  });
});
