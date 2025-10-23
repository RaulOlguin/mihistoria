import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "@/components/Navbar";

// Mock de next/link
jest.mock("next/link", () => {
  return ({ href, children }) => <a href={href}>{children}</a>;
});

// Mock de lucide-react usando ruta RELATIVA 
jest.mock("../test/mocks/lucide-react", () => ({
  Home: (props) => <svg {...props} data-testid="icon-home" />,
  Image: (props) => <svg {...props} data-testid="icon-image" />,
  NotebookPen: (props) => <svg {...props} data-testid="icon-notebook" />,
  CircleQuestionMark: (props) => <svg {...props} data-testid="icon-question" />,
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
    expect(screen.getByTestId("icon-home")).toBeInTheDocument();
    expect(screen.getByTestId("icon-image")).toBeInTheDocument();
    expect(screen.getByTestId("icon-notebook")).toBeInTheDocument();
    expect(screen.getByTestId("icon-question")).toBeInTheDocument();
  });
});
