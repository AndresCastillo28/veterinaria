import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import home from "../images/home.png"
import About from "./About"
import Contact from "./Contact"
import "./main.css"
import Newsletter from "./Newsletter"
import Services from "./Services"

const Home = () => {
    return (
        <div>
            <Navbar />
            <section className="container-fluid text-white home py-5" id="home">
                <div className="row">
                    <div className="col-sm-6 text-center justify-content-center align-self-center p-5">
                        <h1 className="home-title m-5">Welcome to Animal World!</h1>
                        <p className="m-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, tempora.</p>
                        <div className="icons">
                            <a className="icon"><FaFacebookSquare /></a>
                            <a className="icon"><FaWhatsapp /></a>
                            <a className="icon"><FaInstagram /></a>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <img src={home} className="img-fluid d-none d-sm-block home-img" alt="" />
                    </div>
                </div>
            </section>
            <About />
            <Services />
            <Contact />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Home