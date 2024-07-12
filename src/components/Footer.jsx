import React from 'react'
import logo_byn from '../images/logotipo.jpg';

const Footer = () => {
    return (
        <div class="footer">
            <section class="footer-container">
                <div class="component-child">
                </div>
                <div class="inicio-todos-hospedajes-container4">
                    <span class="inicio-todos-hospedajes-container5">
                        <p class="footer-item">Inicio</p>
                        <p class="footer-item">Todos nuestros hospedajes</p>
                        <p class="footer-item">Publica tu departamento</p>
                        <p class="footer-item">Nosotros</p>
                        <p class="footer-item">Contacto</p>
                        <p class="footer-item">Preguntas frecuentes</p>
                        <p class="footer-item">Términos y condiciones</p>
                    </span>
                </div>
                <div class="logo-incial-frame">
                    <img
                        class="logo-incial-icon3"
                        loading="lazy"
                        alt=""
                        src={logo_byn}
                    />
                </div>

                
            </section>
        </div>
    )
}

export default Footer