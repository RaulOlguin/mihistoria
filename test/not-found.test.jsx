import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, test, beforeEach } from 'vitest'

import NotFoundPage from '@/app/not-found' // ajusta ruta si es necesario

describe('Página 404 - NotFoundPage', () => {
  beforeEach(() => {
    render(<NotFoundPage />)
  })

  test('muestra el título principal del sitio', () => {
    expect(screen.getByRole('heading', { name: /Mi Historia\.cl/i })).toBeInTheDocument()
  })

  test('muestra el mensaje de página no encontrada', () => {
    expect(screen.getByRole('heading', { name: /404 PAGINA NO ENCONTRADA/i })).toBeInTheDocument()
  })

  test("usa la clase CSS 'titulo' en el contenedor principal", () => {
    const contenedor = screen.getByText(/Mi Historia\.cl/i).closest('div')
    expect(contenedor).toHaveClass('titulo')
  })
})
