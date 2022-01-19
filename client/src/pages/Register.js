import { Link } from "react-router-dom";
import "./main.css";

const Register = () => {
    return (
        <section className="container-fluid register py-4">
            <Link to="/" className="fs-5 ps-3 text-white register-logo">
                Animal World
            </Link>
            <div className="container rounded-1 p-5 register-form">
                <h2 className="fs-3 text-center">Register</h2>
                <form className="row g-5 register-inputs">
                    <div className="col-md-6">
                        <label className="form-label fs-5">Name</label>
                        <input type="text" className="form-control" required/>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label fs-5">Last Name</label>
                        <input type="text" className="form-control" required/>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label fs-5">Email</label>
                        <input type="email" className="form-control" required/>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label fs-5">Phone</label>
                        <input type="tel" className="form-control" required/>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label fs-5">Password</label>
                        <input type="password" className="form-control" required/>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label fs-5">Confirm Password</label>
                        <input type="password" className="form-control" required/>
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
}

export default Register