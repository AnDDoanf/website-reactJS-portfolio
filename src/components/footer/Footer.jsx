import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container">
            <h1 className="footer__title">Doan Thuan An</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#testimonial" className="footer__link">Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.instagram.com/_a.d.241/" 
                    className="footer__social-icon" 
                    target = "_blank"
                    rel="noreferrer">
                    <i className="bx bxl-instagram"></i>
                </a>

                <a href="https://www.facebook.com/thuanan.doan/" 
                    className="footer__social-icon" 
                    target = "_blank"
                    rel="noreferrer">
                    <i className="uil uil-facebook-f"></i>
                </a>

                <a href="https://github.com/AnDDoanf" 
                    className="footer__social-icon" 
                    target = "_blank"
                    rel="noreferrer">
                    <i className="uil uil-github-alt"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; No copyrights </span>
        </div>
    </footer>
  )
}

export default Footer