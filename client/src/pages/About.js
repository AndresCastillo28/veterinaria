import about from "../images/about.png"
import "./main.css"

const About = () => {
    return (
        <section className="container-fluid col-xxl-8 about text-white px-4 py-5" id="about">
            <div className="row flex-lg-row-reverse align-items-center g-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={about} alt="About" className="d-block mx-lg-auto img-fluid" />
                </div>
                <div className="col-lg-6">
                <h2 className="display-5 text-center">About</h2>
                <p className="lead m-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem sapiente nemo deserunt magni praesentium et corrupti labore repudiandae alias unde? Sunt eius suscipit in dolore, a ut facere incidunt doloribus iusto culpa.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem sapiente nemo deserunt magni praesentium et corrupti labore repudiandae alias unde? Sunt eius suscipit in dolore, a ut facere incidunt doloribus iusto culpa? Dolor exercitationem et alias ex eveniet.</p>
                </div>
            </div>
        </section>
    )
}

export default About