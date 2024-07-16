import React from 'react';
import logo from '../images/logotipo.jpg';

const Nosotros = () => {
    return (
        <div className="nosotros-container">
            <div className="nosotros-header-content">
                <div className="nosotros-header">
                    <h1 className="nosotros-title">¿Quiénes somos?</h1>
                </div>
                <div className="nosotros-content">
                    <div className="nosotros-logo-section">
                        <img src={logo} alt="Logo de Temporarios New York" className="nosotros-logo" />
                    </div>
                    <div className="nosotros-text">
                        <p>Una empresa dedicada a la administración, asesoramiento y gestión de propiedades para alojamiento diario y temporal.</p>
                        <p>Temporarios New York fue creado el 1 de Julio de 2023 por Carla Parmigiani y en Marzo 2024 se suma Gastón Fagalde, para complementarnos, y así expandir nuestra red de Alquileres.</p>
                    </div>
                </div>
            </div>

            <div className="nosotros-section">
                <h2 className="nosotros-subtitle">Trayectoria</h2>
                <p>Carla Parmigiani, Técnica en Turismo y Hotelería, con 25 años de experiencia como Agente de viajes y 4 años de experiencia en Alquileres Temporarios y Hotelería.</p>
                <p>Gastón Fagalde, Gestor de propiedades.</p>
                <p>Se llama New York, ya que al momento de su creación cada uno de los que formamos parte de este Emprendimiento tenía una gran admiración por dicha ciudad, por Vivir o visitarla.</p>
            </div>

            <div className="nosotros-section">
                <h2 className="nosotros-subtitle">Nuestro Objetivo</h2>
                <p>Es Ofrecerle al Propietario la máxima Rentabilidad y todas las gestiones de administración, mantenimiento y limpieza de las mismas. Y a nuestros Huéspedes y clientes Corporativos, brindarle hospitalidad, asesoramiento y profesionalidad en un lugar confortable para habitar.</p>
            </div>
        </div>
    );
};

export default Nosotros;
