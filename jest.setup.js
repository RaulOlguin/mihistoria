import "@testing-library/jest-dom";

// Mocks de componentes de Next.js
jest.mock("next/image", () => (props) => <img {...props} />);
jest.mock("next/font/google", () => ({
  Inter: () => ({ className: "mocked-font-inter", variable: "--font-inter" }),
  Castoro: () => ({ className: "mocked-font-castoro" }),
}));