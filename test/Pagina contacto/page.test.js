import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactoPage from "../../app/Contacto/page";

// Evita errores con next/image (si lo usas)
jest.mock("next/image", () => (props) => <img {...props} alt={props.alt || ""} />);

describe("Página Contacto - ContactoPage", () => {
  beforeEach(() => {
    render(<ContactoPage />);
  });

  test("renderiza los títulos principales", () => {
    // Verifica el título principal
    expect(screen.getByRole("heading", { name: /Mi Historia\.cl/i })).toBeInTheDocument();

    // Verifica que haya un h2 con el texto "Contacto"
    const h2s = screen.getAllByRole("heading", { level: 2 });
    const contactoH2 = h2s.find((h2) => /Contacto/i.test(h2.textContent));
    expect(contactoH2).toBeInTheDocument();
  });

  test("muestra el formulario de contacto con sus campos", () => {
    // Busca el formulario por el elemento <form>
    const form = document.querySelector("form");
    expect(form).toBeInTheDocument();

    // Verifica los campos principales
    expect(screen.getByPlaceholderText(/Nombre/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Correo/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/mensaje/i)).toBeInTheDocument();

    // Verifica el botón de envío
    expect(screen.getByRole("button", { name: /Enviar/i })).toBeInTheDocument();
  });
});
