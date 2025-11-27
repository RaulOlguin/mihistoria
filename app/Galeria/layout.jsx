import NavbarGaleria from "@/components/NavbarGaleria";
export default function GaleriaPageRoot({children}){
    return(<>
          
          <div className="titulo">
            <h1>Mi Historia.cl</h1>
            
         </div>

          <NavbarGaleria/>
         
          {children}
                  
        </>);
    
}