import { FaSignInAlt } from "react-icons/fa"
import { Link } from "react-router-dom"
import "./main.css"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand navbar-logo text-white">
                    Animal World
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="btn btn-primary btn-login">
                                Login<FaSignInAlt className="ps-2 fs-4" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar