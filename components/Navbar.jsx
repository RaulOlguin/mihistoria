import Link from 'next/link'
import "@/components/Navbar.css"

export default function Navbar(){
    return(
        <div className="navbar">
            <ul>
              <li><Link href="/">Portada</Link></li>
              <li><Link href="/Galeria">Galeria</Link></li>
              <li><Link href="/Contacto">Contacto</Link></li>
              <li><Link href="/Somos">Somos</Link></li>
            </ul>

        </div>
    );
}