function ContactoPage() {
    return (
        <>
            <div className="titulo">
                <h1>Mi Historia.cl</h1>
                <h2>Contacto</h2>
            </div>
            <div className="contenido">
                <h2 style={{marginBottom: '1em', color: '#111'}}>Contacto</h2>
                <form className="contact-form" style={{color: '#111'}} aria-label="Formulario de contacto">
                    <div style={{marginBottom: '1.5em'}}>
                        <input type="text" name="nombre" placeholder="Nombre" required style={{width: '80%', padding: '0.7em', borderRadius: '6px', border: '1px solid #aaa', fontFamily: 'inherit', fontSize: '1em', color: '#111'}} />
                    </div>
                    <div style={{marginBottom: '1.5em'}}>
                        <input type="email" name="email" placeholder="Correo electrónico" required style={{width: '80%', padding: '0.7em', borderRadius: '6px', border: '1px solid #aaa', fontFamily: 'inherit', fontSize: '1em', color: '#111'}} />
                    </div>
                    <div style={{marginBottom: '1.5em'}}>
                        <textarea name="mensaje" placeholder="Escribe tu mensaje..." required rows={5} style={{width: '80%', padding: '0.7em', borderRadius: '6px', border: '1px solid #aaa', fontFamily: 'inherit', fontSize: '1em', color: '#111'}} />
                    </div>
                    <button type="submit" style={{background: '#555', color: 'white', padding: '0.8em 2em', border: 'none', borderRadius: '6px', fontSize: '1.1em', cursor: 'pointer', fontFamily: 'inherit', letterSpacing: '0.1em'}}>Enviar</button>
                </form>
            </div>
        </>

    );
}
export default ContactoPage;