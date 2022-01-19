import "./main.css";

const Newsletter = () => {
    return (
        <section className="container-fluid text-center pb-5 newsletter">
            <div className="container rounded-1 py-5 newsletter-content">
                <form className="row mx-3 newsletter-form">
                    <h2 className="col fs-4 text-white">Subscribe to Newsletter</h2>
                    <input type="email" required className="col form-control newsletter-input" placeholder="Enter your email" />
                    <button className="col btn btn-primary fs-6 btn-sm newsletter-btn">Subscribe</button>
                </form>
            </div>
        </section>
    )
}

export default Newsletter