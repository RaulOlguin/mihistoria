"use client"; // <--- 1. IMPORTANTE: Necesario para leer el estado del carrito

import Link from 'next/link';
// Agregamos ShoppingCart y Store a tus importaciones
import { Home, Image, NotebookPen, CircleQuestionMark, ShoppingCart, Store } from 'lucide-react'; 
import { useCarrito } from '@/context/CarritoContext'; // <--- 2. Importamos el contexto

export default function Navbar(){
    const { carrito } = useCarrito();

    // Calculamos la cantidad total de productos
    const cantidadTotal = carrito.reduce((total, item) => total + item.cantidad, 0);

    return(
        <nav className="navbar-global">
            <div className="nav-container">
                <ul className="navList-global">
                    
                    {/* Botón Portada */}
                    <li className="navItem-global">
                        <Link href="/">
                            <span className="navLink-global">
                                <Home className="inline w-4 h-4 mr-1" /> Portada
                            </span>
                        </Link>
                    </li>
                    
                    {/* Botón Galería */}
                    <li className="navItem-global">
                        <Link href="/Galeria">
                            <span className="navLink-global">
                                <Image className="inline w-4 h-4 mr-1" /> Galeria
                            </span>
                        </Link>
                    </li>

                    {/* Botón Tienda (NUEVO: Para ir a ver los productos) */}
                    <li className="navItem-global">
                        <Link href="/Tienda">
                            <span className="navLink-global">
                                <Store className="inline w-4 h-4 mr-1" /> Tienda
                            </span>
                        </Link>
                    </li>

                    

                    {/* Botón Carrito (NUEVO: Con contador) */}
                    <li className="navItem-global">
                        <Link href="/carrito">
                            {/* Agregamos clase 'relative' para posicionar la burbuja roja */}
                            <span className="navLink-global relative pr-3"> 
                                <ShoppingCart className="inline w-4 h-4 mr-1" /> 
                                {cantidadTotal > 0 && (
                                    <span className="cart-badge">
                                        {cantidadTotal}
                                    </span>
                                )}
                            </span>
                        </Link>
                    </li>

                    {/* Botón Contacto */}
                    <li className="navItem-global">
                        <Link href="/Contacto">
                            <span className="navLink-global">
                                <NotebookPen className="inline w-4 h-4 mr-1" /> Contacto
                            </span>
                        </Link>
                    </li>

                    {/* Botón Somos */}
                    <li className="navItem-global">
                        <Link href="/Somos">
                            <span className="navLink-global">
                                <CircleQuestionMark className="inline w-4 h-4 mr-1" /> Somos
                            </span>
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
}