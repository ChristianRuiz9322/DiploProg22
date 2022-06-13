import React from "react";

const ContactoPage = (props) => {
    return (
        <main className="hoder contacto">
            <div>
                <h2>Contacto Rápido</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label for="nombre">nombre</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="nombre">Email</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="nombre">Teléfono</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="nombre">Mensaje</label>
                        <textarea name=""></textarea>
                    </p>
                    <p class="acciones">
                        <input type="submit" value="enviar" />
                    </p>
                </form>
            </div>
            <div class="datos">
                <h2>Otras vias de contacto</h2>
                <p>Tambien puede contacatarse con nosotros por las siguientes vias</p>
                <ul>
                    <li>Telefono 4353343</li>
                    <li>Email: contacto@transportes.com</li>
                    <li>Facebook:</li>
                    <li>Twitter</li>
                    <li>Skype</li>
                </ul>
            </div>
        </main>
    )
}

export default ContactoPage;