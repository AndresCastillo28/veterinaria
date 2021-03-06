import { Link, Redirect } from "react-router-dom";
import React, { useState } from 'react';
import { connect } from 'react-redux';
import "./main.css";
import { setAlert } from '../actions/alert';
import { register } from '../actions/auth';
import PropTypes from 'prop-types';


const Register = ({ setAlert, register, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        password: '',
        password2: ''
    });

    const { name, lastname, email, phone, password, password2 } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
            setAlert('Password do not match', 'danger');
        } else {
            register({ name, lastname, email, phone, password });
        }
    };

    if (isAuthenticated) {
        return <Redirect to='/dashboard' />;
    }


    return (
        <section className="container-fluid register py-4">
            <Link to="/" className="fs-5 ps-3 text-white register-logo">
                Animal World
            </Link>
            <div className="container rounded-1 p-5 register-form">
                <h2 className="fs-3 text-center">Register</h2>
                <form className="row g-5 register-inputs" onSubmit={e => onSubmit(e)}>
                    <div className="col-md-6">
                        <label className="form-label fs-5">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name='name'
                            value={name}
                            onChange={e => onChange(e)}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label fs-5">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="lastname"
                            value={lastname}
                            onChange={e => onChange(e)}
                            required />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label fs-5">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={email}
                            onChange={e => onChange(e)}
                            required />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label fs-5">Phone</label>
                        <input
                            type="tel"
                            className="form-control"
                            name="phone"
                            value={phone}
                            onChange={e => onChange(e)}
                            required />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label fs-5">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={password}
                            onChange={e => onChange(e)}
                            minlenght='6'
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label fs-5">Confirm Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password2"
                            value={password2}
                            onChange={e => onChange(e)}
                            minlenght='6'
                        />
                    </div>
                    <div className="form-check ps-5">
                        <input className="form-check-input" type="checkbox" value="" />
                        <label className="form-check-label fs-6 register-terms">
                            I agree to the terms and conditions of Privacy Policys
                        </label>
                    </div>
                    <div className="d-grid gap-2 col-4 mx-auto">
                        <button type="submit" className="btn btn-primary btn-lg fs-6 register-btn">Check in</button>
                    </div>
                </form>
            </div>
        </section>
    )
};

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps,
    { setAlert, register }
)(Register)