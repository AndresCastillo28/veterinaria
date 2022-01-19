import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa"
import "./main.css"

const Footer = () => {
    return (
        <footer className="page-footer font-small text-white pt-4">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="fs-6">©2021 Animal World. All rights reserved.</h5>
                    </div>
                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="fs-6">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#home" className="footer-link">Home</a>
                            </li>
                            <li>
                                <a href="#about" className="footer-link">About</a>
                            </li>
                            <li>
                                <a href="#services" className="footer-link">Services</a>
                            </li>
                            <li>
                                <a href="#contact" className="footer-link">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-md-0 mb-3 footer-icons">
                        <a className="footer-icon"><FaFacebookSquare /></a>
                        <a className="footer-icon"><FaWhatsapp /></a>
                        <a className="footer-icon"><FaInstagram /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer