import React from "react";
import { cn } from "@/lib/utils";
import Link from 'next/link'
import { Cross } from 'lucide-react';

export const PulsatingButton = React.forwardRef((
  {
    className,
    children,
    pulseColor = "#eb0808ef", // Rojo semi-transparente, personalizable
    duration = "1.5s",         // Puedes cambiar el tiempo de pulsado
    ...props
  },
  ref
) => {
  return (

    <Link href="/Farmacias">
    <button
      ref={ref}
      className={cn(
        "text-white relative flex cursor-pointer items-center justify-center rounded-lg px-4 py-2 text-center pulse-custom",
        className
      )}
      style={{
        "--pulse-color": pulseColor,
        "--duration": duration
      }}
      {...props}
    >
      <div className="relative z-10"><Cross className="inline w-4 h-4 mr-1" /> {children}</div>
    </button>
    </Link>
  );
});

PulsatingButton.displayName = "PulsatingButton";


//http://localhost:3000/Farmacias