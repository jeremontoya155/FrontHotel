import React from 'react';
import { useNavigate } from 'react-router-dom';
import img_bsas from '../images/image-2@2x.png';
import img_cba from '../images/image-3@2x.png';
import img_ag from '../images/image-4@2x.png';

const Destinos = () => {
    const navigate = useNavigate();

    const handleLinkClick = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        <div>
            <section className="property-card">
                <div className="property-highlights">
                    <div className="destinos">
                        <h3 className="tu-destino">
                            TENEMOS TODOS ESTOS DESTINOS PARA VOS
                        </h3>
                    </div>
                </div>
                <div className='location'>

                    <h4 className='location-title'>ARGENTINA</h4>
                    <div className="location-preview">
                        <div className="location-images">
                            <div className="wrapper-image onClick" onClick={() => handleLinkClick('/hospedajes')}>
                                <img
                                    className="image-icon"
                                    loading="lazy"
                                    alt="Córdoba"
                                    src={img_cba}
                                />
                            </div>
                            <div className="location-names">
                                <div className="crdoba">Córdoba</div>
                            </div>
                        </div>
                        <div className="location-images">
                            <div className="wrapper-image">
                                <img
                                    className="image-icon"
                                    loading="lazy"
                                    alt="Buenos Aires"
                                    src={img_bsas}
                                />
                            </div>
                            <div className="location-names">
                                <div className="buenos-aires">Buenos Aires</div>
                            </div>
                        </div>
                        <div className="location-images">
                            <div className="wrapper-image">
                                <img
                                    className="image-icon"
                                    loading="lazy"
                                    alt="Alta Gracia"
                                    src={img_ag}
                                />
                            </div>
                            <div className="location-names">
                                <div className="alta-gracia">Alta Gracia</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='location'>

                    <h4 className='location-title'>BRASIL</h4>
                    <div className="location-preview">
                        <div className="location-images">
                            <div className="wrapper-image">
                                <img
                                    className="image-icon"
                                    loading="lazy"
                                    alt="Córdoba"
                                    src={img_cba}
                                />
                            </div>
                            <div className="location-names">
                                <div className="crdoba">Córdoba</div>
                            </div>
                        </div>
                        <div className="location-images">
                            <div className="wrapper-image">
                                <img
                                    className="image-icon"
                                    loading="lazy"
                                    alt="Buenos Aires"
                                    src={img_bsas}
                                />
                            </div>
                            <div className="location-names">
                                <div className="buenos-aires">Buenos Aires</div>
                            </div>
                        </div>
                        <div className="location-images">
                            <div className="wrapper-image">
                                <img
                                    className="image-icon"
                                    loading="lazy"
                                    alt="Alta Gracia"
                                    src={img_ag}
                                />
                            </div>
                            <div className="location-names">
                                <div className="alta-gracia">Alta Gracia</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='location'>

                    <h4 className='location-title'>ESTADOS UNIDOS</h4>
                    <div className="location-preview">
                        <div className="location-images">
                            <div className="wrapper-image">
                                <img
                                    className="image-icon"
                                    loading="lazy"
                                    alt="Córdoba"
                                    src={img_cba}
                                />
                            </div>
                            <div className="location-names">
                                <div className="crdoba">Córdoba</div>
                            </div>
                        </div>

                        <div className="location-images">
                            <div className="wrapper-image">
                                <img
                                    className="image-icon"
                                    loading="lazy"
                                    alt="Alta Gracia"
                                    src={img_ag}
                                />
                            </div>
                            <div className="location-names">
                                <div className="alta-gracia">Alta Gracia</div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </section>

            <div className="action">
                <span onClick={() => handleLinkClick('/hospedajes')}className="view-more-button">
                    <div className="view-more-button-child"></div>
                    <div className="ver-mas">Ver Más</div>
                </span>
            </div>
            <div className="quienes-somos">
                <h2 className="temporarios-nyc1-2">¿Quiénes somos?</h2>
                <p className='somos-la-opcin-container-2'>Una empresa dedicada a la administración, asesoramiento y gestión de propiedades para alojamiento diario y temporal. <br></br>
                Temporarios New York fue creado el 1 de Julio de 2023 por Carla Parmigiani y en Marzo 2024 se suma Gastón Fagalde, para complementarnos, y así expandir nuestra red de Alquileres.</p>
            </div>
        </div>
    );
};

export default Destinos;
