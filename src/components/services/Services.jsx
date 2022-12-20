import React, { useState } from 'react'
import './services.css'

const Services = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="services section" id="services" style={{"padding-top": "80px"}}>
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I offer</span>

        <div className="services__container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-browser services__icon">
                        <h3 className="services__title">Work 1</h3>
                    </i>

                    <span className="services__button" 
                        onClick={() => toggleTab(1)}>View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close"
                                onClick={() => toggleTab(0)}></i>
                            <h3 className="services__modal-title">Work1</h3>
                            <p className="services__modal-description">Working on for more than a year. Providing quality work to clients and companies</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Web page developement</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Machine learning researching</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Data analyzing</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-robot services__icon">
                        <h3 className="services__title">Work 2</h3>
                    </i>

                    <span className="services__button"
                        onClick={() => toggleTab(2)}>View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close"
                                onClick={() => toggleTab(0)}></i>
                            <h3 className="services__modal-title">Work2</h3>
                            <p className="services__modal-description">Working on for more than a year. Providing quality work to clients and companies</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Web page developement</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Machine learning researching</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Data analyzing</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-notes services__icon">
                        <h3 className="services__title">Work 3</h3>
                    </i>

                    <span className="services__button"
                        onClick={() => toggleTab(3)}>View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close"
                                onClick={() => toggleTab(0)}></i>
                            <h3 className="services__modal-title">Work3</h3>
                            <p className="services__modal-description">Working on for more than a year. Providing quality work to clients and companies</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Web page developement</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Machine learning researching</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Data analyzing</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services