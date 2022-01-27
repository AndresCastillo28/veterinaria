import { Fragment } from "react";
import { FaSignInAlt } from "react-icons/fa"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { logout } from "../actions/auth";
import "./main.css"


const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {

    const authLinks = (
        <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <Link to="/dashboard" className="fs-6 login-register">
                <i className="fas fa-user"></i>{' '}
                <span className="hide-sm">Dashboard</span>
                </Link>
            </li>
            <li className="nav-item">
                <a onClick={logout} className="nav-link active" href="#!">
                    <i className="fas fa-sign-out-alt"></i>{' '}
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
                    Login<FaSignInAlt className="ps-2 fs-4" />
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