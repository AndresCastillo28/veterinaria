import { useState } from "react"
import { FaArrowRight, FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa"
import { Link, Redirect } from "react-router-dom"
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/auth';
import loginimage from "../images/login.png"
import "./main.css"

const Login = ({ login, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        login(email, password);
    };

    if(isAuthenticated) {
        return <Redirect to="/dashboard" />
    }

    return (
        <section className="container-fluid login">
            <div className="row">
                <div className="col-6 p-5 login-form">
                    <div className="text-center">
                        <Link to="/" className="fs-3 login-logo">
                            Animal World
                        </Link>
                    </div>
                    <h2 className="fs-3">Login</h2>
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="mb-3 py-4">
                            <label className="form-label fs-5 contact-label">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                name="email"
                                value={email}
                                onChange={e => onChange(e)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fs-5 contact-label">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="form-control"
                                id="exampleInputPassword1"
                                name="password"
                                value={password}
                                onChange={e => onChange(e)}
                                required
                            />
                        </div>
                        <div className="text-end py-2">
                            <a href="#" className="fs-6 login-forget">Forget Password?</a>
                        </div>
                        <div className="text-center d-grid gap-2 col-6 mx-auto py-3">
                            <button type="submit" className="btn btn-primary text-white fs-6 login-btn">Sign In</button>
                        </div>
                    </form>
                    <div className="text-center py-3">
                        <h2 className="fs-6 login-subtitle">Or continue with</h2>
                    </div>
                    <div className="login-icons">
                        <a href="#" className="login-icon"><FaFacebookF /></a>
                        <a href="#" className="login-icon"><FaGoogle /></a>
                        <a href="#" className="login-icon"><FaTwitter /></a>
                    </div>
                    <div className="text-center d-grid gap-2 col-6 mx-auto py-4">
                        <Link to="/register" className="fs-6 login-register">
                            Create your Account<FaArrowRight className="ps-2 fs-4" />
                        </Link>
                    </div>
                </div>
                <div className="col-6 login-img">
                    <img src={loginimage} className="img-fluid d-sm-block" alt="Login" />
                </div>
            </div>
        </section>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps,
    { login }
)(Login);