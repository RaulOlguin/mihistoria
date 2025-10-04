import Navbar from "../components/Navbar";
import Image from "next/image";

export const metadata = {
  title: "miHistoria.cl",
  description: "fotos historicas de valparaiso, turismo, educacion",
  keyword: "fotos antiguas, historia, turismo, educacion"

}

import "./globals.css"

import {Castoro} from 'next/font/google'
const castoro = Castoro(
  { 
    weight: ['400' ], 
    subsets: ['latin'], 
    display: 'swap'
}
)


export default function RootLayout({ children }) {
  return (
    <html lang="es" className={castoro.className}>
      <body>
        <Navbar/>
        {children}
        <footer>
          <div className="datos">
            <p>Alumnos: Raul Olguin, Cristopher Osses</p>
            <p>Profesor: Javier Sanchez</p>
            <p>Curso: Ingenieria Informatica Vespertino</p>
            <p>2025 - Duoc UC</p>
          </div>
          <div className="logo">
            <Image
              src={"/img/duocuc.jpg"}
              width={200}
              height={50}
              alt="logo duoc uc"
            />
          </div>
        </footer>
      </body>
    </html>
  );
}
