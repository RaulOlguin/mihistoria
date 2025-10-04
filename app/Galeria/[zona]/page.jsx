'use client'
import * as React from 'react'
import Image from "next/image";

function Page({ params }) {
    const zonaParams = React.use(params);
    return (
        <>
            <div className="contenido">
                <h2>{zonaParams.zona.replace("_", " ")}</h2>      
                <div className="Galeria">
                    <Image 
                        src={`/img/${zonaParams.zona}/1.jpg`}
                        alt=""
                        width={800}
                        height={600}
                    />
                    <Image 
                        src={`/img/${zonaParams.zona}/2.jpg`}
                        alt=""
                        width={800}
                        height={600}
                    />
                    <Image 
                        src={`/img/${zonaParams.zona}/3.jpg`}
                        alt=""
                        width={800}
                        height={600}
                    />
                </div> 
            </div>
        </>
    );
}

export default Page;