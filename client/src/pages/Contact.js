import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhoneAlt } from "react-icons/fa";
import "./main.css";

const Contact = () => {
    return (
        <section className="container-fluid contact px-4 py-5" id="contact">
            <h2 className="display-5 text-white text-center py-4">Contact</h2>
            <div className="container">
                <div className="row text-white">
                    <div className="col-sm-4 d-flex justify-content-center">
                        <FaMapMarkerAlt className="contact-icon" />
                    </div>
                    <div className="col-sm-4 d-flex justify-content-center">
                        <FaEnvelope className="contact-icon" />
                    </div>
                    <div className="col-sm-4 d-flex justify-content-center">
                        <FaPhoneAlt className="contact-icon" />
                    </div>
                </div>
                <div className="row text-white ">
                    <div className="col-sm-4 d-flex justify-content-center">
                        <p className="fs-6 pt-2">Street 12 # 14 - 23</p>
                    </div>
                    <div className="col-sm-4 d-flex justify-content-center">
                        <p className="fs-6 pt-2">animalworld@gmail.com</p>
                    </div>
                    <div className="col-sm-4 d-flex justify-content-center">
                        <p className="fs-6 pt-2">+57 310 344 55 65</p>
                    </div>
                </div>
                <div className="container rounded-1 text-center p-5 contact-form">
                    <form>
                        <div className="mb-3">
                            <label className="form-label fs-5 contact-label">First Name</label>
                            <input type="text" required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fs-5 contact-label">Last Name</label>
                            <input type="text" required className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fs-5 contact-label">Email</label>
                            <input type="email" required className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fs-5 contact-label">Phone</label>
                            <input type="tel" required className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fs-5 contact-label">Message</label>
                            <textarea className="form-control" required placeholder="Write your message..." id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg fs-6 contact-btn">Send Message<FaPaperPlane className="ps-2 fs-4" /></button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact