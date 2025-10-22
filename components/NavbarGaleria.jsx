import Link from "next/link";
import "@/components/NavbarGaleria.css";

export default function NavbarGaleria() {
  const items = [
    { title: "Calle Blanco", href: "/Galeria/Calle_Blanco", img: "/img/Calle_Blanco/1.jpg" },
    { title: "Pza Victoria", href: "/Galeria/Pza_Victoria", img: "/img/Pza_Victoria/1.jpg" },
    { title: "Pza Soto Mayor", href: "/Galeria/Pza_Soto_Mayor", img: "/img/Pza_Soto_Mayor/1.jpg" },
    { title: "Aduana", href: "/Galeria/Aduana", img: "/img/Aduana/1.jpg" },
  ];

  return (
    <div className="navbar-galeria-container">
      {items.map((item, index) => (
        <Link key={index} href={item.href} className="banner-item-premium" style={{ backgroundImage: `url(${item.img})` }}>
          <div className="banner-overlay-premium">
            <span className="banner-title-premium">{item.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}