import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, test, beforeEach, vi } from "vitest";
import ContactoPage from "../../app/Contacto/page"; // Ajusta la ruta según tu estructura

vi.mock("next/image", () => (props) => <img {...props} alt={props.alt || ""} />);

describe("Página Contacto - ContactoPage", () => {
  beforeEach(() => {
    render(<ContactoPage />);
  });

  test("renderiza los títulos principales", () => {
    expect(screen.getByRole("heading", { name: /Mi Historia\.cl/i })).toBeInTheDocument();

    // Hay dos <h2> con "Contacto", usamos getAllByRole y verificamos al menos uno
    const h2s = screen.getAllByRole("heading", { level: 2 });
    const contactoH2 = h2s.find(h2 => h2.textContent.match(/Contacto/i));
    expect(contactoH2).toBeInTheDocument();
  });

  test("muestra el formulario de contacto", () => {
    // Ahora sí podemos buscarlo por rol y nombre accesible
    const form = screen.getByRole("form", { name: /Formulario de contacto/i });
    expect(form).toBeInTheDocument();

    // Verificamos los campos principales
    expect(screen.getByPlaceholderText(/Nombre/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Correo electrónico/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Escribe tu mensaje/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Enviar/i })).toBeInTheDocument();
  });
});
