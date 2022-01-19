import { FaArrowRight, FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"
import login from "../images/login.png"
import "./main.css"

const Login = () => {
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
                    <form>
                        <div className="mb-3 py-4">
                            <label className="form-label fs-5 contact-label">Email</label>
                            <input type="email" placeholder="Enter your email" required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fs-5 contact-label">Password</label>
                            <input type="password" placeholder="Enter your password" required className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="text-end py-2">
                            <a className="fs-6 login-forget">Forget Password?</a>
                        </div>
                        <div className="text-center d-grid gap-2 col-6 mx-auto py-3">
                            <button type="submit" className="btn btn-primary text-white fs-6 login-btn">Sign In</button>
                        </div>
                    </form>
                    <div className="text-center py-3">
                        <h2 className="fs-6 login-subtitle">Or continue with</h2>
                    </div>
                    <div className="login-icons">
                        <a className="login-icon"><FaFacebookF /></a>
                        <a className="login-icon"><FaGoogle /></a>
                        <a className="login-icon"><FaTwitter /></a>
                    </div>
                    <div className="text-center d-grid gap-2 col-6 mx-auto py-4">
                        <Link to="/register" className="fs-6 login-register">
                            Create your Account<FaArrowRight className="ps-2 fs-4" />
                        </Link>
                    </div>
                </div>
                <div className="col-6 login-img">
                    <img src={login} className="img-fluid d-sm-block" alt="Login" />
                </div>
            </div>
        </section>
    )
}

export default Login