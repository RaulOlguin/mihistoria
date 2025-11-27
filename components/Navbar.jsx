import Link from 'next/link'
import { Home, Image, NotebookPen, CircleQuestionMark } from 'lucide-react';
export default function Navbar(){
    return(
                <nav className="navbar-global">
                        <div className="nav-container">
                            <ul className="navList-global">
                               <li className="navItem-global">
                                <Link href="/">
                                    <span className="navLink-global">
                                    <Home className="inline w-4 h-4 mr-1" /> Portada
                                    </span>
                                </Link>
                                </li>

                                <li className="navItem-global">
                                <Link href="/Galeria">
                                    <span className="navLink-global">
                                    <Image className="inline w-4 h-4 mr-1" /> Galeria
                                    </span>
                                </Link>
                                </li>

                                <li className="navItem-global">
                                <Link href="/Contacto">
                                    <span className="navLink-global">
                                    <NotebookPen className="inline w-4 h-4 mr-1" /> Contacto
                                    </span>
                                </Link>
                                </li>

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

