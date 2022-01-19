import emergency from "../images/emergencies.png"
import vaccines from "../images/vaccines.png"
import x from "../images/x.png"
import "./main.css"

const Services = () => {
    return (
        <section className="container-fluid services px-4 py-5" id="services">
            <h2 className="display-5 text-white text-center py-4">Services</h2>
            <div className="row row-cols-1 row-cols-lg-3 row-colds-md-3 g-3">
                <div className="col">
                    <div className="card">
                        <div className="card-body text-center">
                            <img src={emergency} alt="" className="img-fluid" />
                            <h5 className="card-title py-2">Emergencies</h5>
                            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, impedit.</p>
                            <a href="#" className="btn btn-primary services-btn">More information</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-body text-center">
                            <img src={vaccines} alt="" className="img-fluid" />
                            <h5 className="card-title py-2">Vaccines</h5>
                            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, impedit.</p>
                            <a href="#" className="btn btn-primary services-btn">More information</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-body text-center">
                            <img src={x} alt="" className="img-fluid" />
                            <h5 className="card-title py-2">X-rays</h5>
                            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, impedit.</p>
                            <a href="#" className="btn btn-primary services-btn">More information</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services