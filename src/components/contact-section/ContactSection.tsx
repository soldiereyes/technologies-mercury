import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './ContactSection.css';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        tel: '',
        message: ''
    });
    const [emailError, setEmailError] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });

        if (id === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                setEmailError('Please enter a valid email address.');
                setIsValid(false);
            } else {
                setEmailError('');
                setIsValid(true);
            }
        }
    };

    const handleCaptcha = (value) => {
        setCaptchaVerified(!!value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isValid || !captchaVerified) {
            setResponseMessage('Please complete all required fields and verify the captcha.');
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('https://christophercaylor.com/api/mail/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    tel: formData.tel || null,
                    message: formData.message
                })
            });

            const result: any = await response.json();

            if (result.succcess) {
                alert(result.message);
                setFormData({ name: '', email: '', tel: '', message: '' });
            } else {
                alert(result.message);
            }
        } catch (error) {
            alert(error.message);
        }

        setLoading(false);
    };

    return (
        <section className="contact-section py-5">
            <div className="container">
                <h2 className="text-center mb-5 contact-title">CONTACT US</h2>

                <div className="row justify-content-center">
                    {/* Form Box */}
                    <div className="col-md-6">
                        <div className="contact-box">
                            <h3 className="text-center contact-subtitle">Drop us a line!</h3>
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group mb-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group mb-4">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Email*"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    {emailError && <small className="error-text">{emailError}</small>}
                                </div>

                                <div className="form-group mb-4">
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="tel"
                                        placeholder="Phone (Optional)"
                                        value={formData.tel}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group mb-4">
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        rows={4}
                                        placeholder="Mensagem"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                {/* Google reCAPTCHA */}
                                <div className="text-center mb-4">
                                    <ReCAPTCHA
                                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                        onChange={handleCaptcha}
                                    />
                                </div>

                                <div className="text-center">
                                    <button type="submit" className="btn-contact" disabled={!isValid || !captchaVerified || loading}>
                                        {loading ? 'Sending...' : 'ENVIAR'}
                                    </button>
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
