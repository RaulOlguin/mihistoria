import Link from 'next/link'
import "@/components/NavbarGaleria.css"

export default function NavbarGaleria(){
    return(
    <ul className="NavbarGaleria">
        <li><Link href="/Galeria/Calle_Blanco">Calle_Blanco</Link></li>
        <li><Link href="/Galeria/Pza_Victoria">Pza_Victoria</Link></li>
        <li><Link href="/Galeria/Pza_Soto_Mayor">Pza_Soto_Mayor</Link></li>
        <li><Link href="/Galeria/Aduana">Aduana</Link></li>
    </ul>
    );


}