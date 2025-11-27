import { render, screen } from '@testing-library/react'
import { describe, test, vi } from 'vitest'

import RootLayout from '@/app/layout'

vi.mock('next/image', () => (props) => null)
vi.mock('../components/Navbar', () => () => 'Navbar')

describe('Verificar informacion de pie de pagina', () => {
  test('el texto del footer se carga correctamente', () => {
    const Contenido = <RootLayout>{/* tu contenido aquí si necesario */}</RootLayout>
    render(Contenido)

    expect(screen.getByText(/Alumnos: Raul Olguin, Cristopher Osses/i)).toBeInTheDocument()
    expect(screen.getByText(/Profesor: Javier Sanchez/i)).toBeInTheDocument()
    expect(screen.getByText(/Curso: Ingenieria Informatica Vespertino/i)).toBeInTheDocument()
    expect(screen.getByText(/2025 - Duoc UC/i)).toBeInTheDocument()
  })

  test('el logo de duoc uc se renderiza', () => {
    const Contenido = <RootLayout>{/* tu contenido aquí si necesario */}</RootLayout>
    render(Contenido)

    const logo = screen.getByAltText(/logo duoc uc/i)
    expect(logo).toBeInTheDocument()
  })

  test('el navbar se renderiza correctamente', () => {
    const Contenido = <RootLayout>{/* tu contenido aquí si necesario */}</RootLayout>
    render(Contenido)

    expect(screen.getByText(/navbar/i)).toBeInTheDocument()
  })
})
