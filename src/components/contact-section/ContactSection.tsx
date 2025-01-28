import './ContactSection.css';

const ContactSection = () => {
    return (
        <section className="contact-section py-5">
            <div className="container">
                <h2 className="text-center mb-5 contact-title">CONTACT US</h2>

                <div className="row justify-content-center">
                    {/* Form Box */}
                    <div className="col-md-6">
                        <div className="contact-box">
                            <h3 className="text-center contact-subtitle">Drop us a line!</h3>
                            <form className="contact-form">
                                <div className="form-group mb-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Name"
                                    />
                                </div>

                                <div className="form-group mb-4">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Email*"
                                        required
                                    />
                                </div>

                                <div className="form-group mb-4">
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="phone"
                                        placeholder="Phone"
                                    />
                                </div>

                                <div className="form-group mb-4">
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        rows={4}
                                        placeholder="Mensagem"
                                    ></textarea>
                                </div>

                                <div className="text-center">
                                    <button type="submit" className="btn-contact">ENVIAR</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Hours Column */}
                    <div className="col-md-5 d-flex flex-column justify-content-center">
                        <div className="hours-info">
                            <h3 className="mb-4">We value our customers</h3>
                            <p className="mb-5">and would love to welcome you during our working hours.</p>

                            <div className="hours-list">
                                <h4>HOURS</h4>
                                <ul className="list-unstyled">
                                    <li>Mon 08:00 am - 04:00 pm</li>
                                    <li>Tue 08:00 am - 04:00 pm</li>
                                    <li>Wed 08:00 am - 04:00 pm</li>
                                    <li>Thu 08:00 am - 04:00 pm</li>
                                    <li>Fri 08:00 am - 04:00 pm</li>
                                    <li>Sat Closed</li>
                                    <li>Sun Closed</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
