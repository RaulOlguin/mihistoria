import './globals.css';

import "./globals.css"

import "../components/Navbar.css"

import Navbar from "../components/Navbar";
import Image from "next/image";

import { CarritoProvider } from "@/context/CarritoContext"; // Ajusta la ruta si es necesario
import "./globals.css";


export const metadata = {
  title: "miHistoria.cl",
  description: "fotos historicas de valparaiso, turismo, educacion",
  keyword: "fotos antiguas, historia, turismo, educacion"

}


import {Castoro, Inter} from 'next/font/google'
const castoro = Castoro({ 
    weight: ['400'], 
    subsets: ['latin'], 
    display: 'swap'
})

const inter = Inter({
    weight: ['400', '500', '600'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter'
})


export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${castoro.className} ${inter.variable}`}>
      <body>
        <CarritoProvider>
          <Navbar/>
          {children}
        </CarritoProvider>
          <footer>
          <div className="datos">
            <p>Alumnos: Raul Olguin, Cristopher Osses</p>
            <p>Profesor: Javier Sanchez</p>
            <p>Curso: Ingenieria Informatica Vespertino</p>
            <p>2025 - Duoc UC</p>
          </div>

          <div className="relative w-[200px] h-[50px]">
            <Image
              src="/img/duocuc.jpg"
              alt="logo duoc uc"
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 150px, 200px"
            />
          </div> 
       </footer>


      </body>
    </html>
  );
}
