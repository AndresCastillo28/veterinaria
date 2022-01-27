import PropTypes from 'prop-types';
import { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions/auth";
import "./main.css";


const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {

    const authLinks = (
        <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <a className="nav-link active" href="#!">Home</a>
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
                <Link to="/dashboard" className="nav-link active">
                        Dashboard
                </Link>
            </li>
            <li className="nav-item">
                <a onClick={logout} className="btn btn-primary btn-logout" href="#!">
                    <span className="hide-sm"> Logout</span></a>
            </li>
        </ul>
    );

    const guestLinks = (
        <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <a className="nav-link active" href="#!">Home</a>
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
                    Login
                </Link>
            </li>
        </ul>
    );

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand navbar-logo text-white">
                    Animal World
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
        </nav>
    )
};

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);