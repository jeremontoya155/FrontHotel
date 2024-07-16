import React from 'react';
import { Link } from 'react-router-dom';
import img_bsas from '../images/image-2@2x.png';
import img_cba from '../images/image-3@2x.png';
import img_ag from '../images/image-4@2x.png';

const Destinos = () => {
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
                </div>
            </section>

           <div className="action">
                <Link to="/hospedajes" className="view-more-button">
                    <div className="view-more-button-child"></div>
                    <div className="ver-mas">Ver Más</div>
                </Link>
            </div>
            <div className="action">
                <Link to="/hotel-management" className="view-more-button">
                    <div className="view-more-button-child"></div>
                    <div className="ver-mas">Editar Hoteles</div>
                </Link>
            </div>
        </div>
    );
};

export default Destinos;
