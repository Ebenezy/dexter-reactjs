import React from 'react'
import './contact.css'
import { Col, Container, Row, Carousel } from 'react-bootstrap'
import Footer from '../../shared/components/footer/Footer'
import Header from '../../shared/components/Navigation/Header'
import signature from '../../images/signature.svg'
import email from '../../images/icons/email.svg'
import email2 from '../../images/icons/email2.svg'
import email3 from '../../images/icons/email3.svg'
import map from '../../images/icons/map.svg'
import call from '../../images/icons/call.svg'
import emailjs from 'emailjs-com'

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
            // service_id 
            'service_0xwv008',
            // template_id 
            'template_jv10cxn',
            e.target,
            // user_id 
            'Y25PUOnAi1njRPyHX',
        ).then(response => {
            console.log('Message sent successfully', response.status, response.text);
        })
            .catch((err) => {
                console.log('Failed', err)
            })
        // name('');
        // email('');
        // subject('');
        // message('');
    }
    return (
        <div>
            <Header />
            <div className="our-products">
                <Container className="container">
                    <div className="text-center">
                        <h1 className="our-products-title">get <span>in touch with us</span></h1>
                    </div>
                    <Row className=" g-0">
                        <Col md={4} >
                            <div class="contact-left">
                                <div class="contact-info-slide">
                                    <div class="">
                                        <p class="message-from-title">Message from the
                                            CEO</p>
                                        <p class="message-from-text"><span>Promise and Quality Experience</span><br />
                                            Since dexter's inception in 2021, dexter and the force have kept evolving in positive ways - learning new skills, developing new ideas, and adapting to change. One year after, we are proud of the dexter journey to deliver lasting value through digital product, and we are optimistic about the future with you.
                                        </p>
                                        <p class="message-from-text">
                                            Here at dexter, we think of ourselves as your partner, focused on value creation, but more importantly, your experience, because for us, creating the best experience for you is an exciting priority.
                                        </p>
                                    </div>
                                    <img src={signature} width="120px" className="d-block" alt="signature" />
                                </div>
                            </div>
                        </Col>
                        <Col md={8} >
                            <div className="contact-right"></div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* let's talk section */}
            <div className="lets-talk-section">
                <Container className="container">
                    <Row >
                        <Col md={6} className="me-auto mb-3">
                            <div className="lets-talk-left">
                                <h2 className="lets-talk-title">let’s talk.<br />
                                    tell us about <span>your ideas, <br />and projects.</span></h2>
                                <p className="lets-talk-text">Let’s build great products together.</p>
                                <div className="mail-us-at">
                                    <div className="mail-us">
                                        <img src={email2} alt="mail" />
                                    </div>
                                    <div className="ms-3">
                                        <p className="mailus">Mail us at</p>
                                        <a href="mailto:contact@dxtnigeria.io" className="mailus2">contact@dxtnigeria.io</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={5} className=" mb-3">
                            <div className="lets-talk-left">
                                <h2 className="lets-talk-title">get <span>in touch</span></h2>
                                <div className="d-flex mb-4">
                                    <img src={map} alt="map" />
                                    <div className="ms-4">
                                        <p className="office-address">office <span>address:</span></p>
                                        <a className="office-address2">371 Borno Way, Alagomeji 101212, Yaba</a>
                                    </div>
                                </div>
                                <div className="d-flex mb-4">
                                    <img src={email} alt="email" />
                                    <div className="ms-4">
                                        <p className="office-address">email <span>address:</span></p>
                                        <a href="mailto:info@dxtnigeria.io" className="office-address2">info@dxtnigeria.io</a>
                                    </div>
                                </div>
                                <div className="d-flex mb-4">
                                    <img src={call} alt="call" />
                                    <div className="ms-4">
                                        <p className="office-address">phone <span>number:</span></p>
                                        <a href="tel:+2349097429907" className="office-address2">+2349097429907</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* send us a message   */}
            <Container classNameName=" mt-5 mb-5">
                <div className="send-message">
                    <p className="our-products-title">send <span>us a message</span></p>

                    <form action="" method="post" onSubmit={sendEmail}>
                        <Row className="row">
                            <Col md={5} className="mb-3">
                                <div className="contact-form">
                                    <p className="contact-form-text">Fill forms with the right information</p>
                                    <input className="contact-input" type="text" name="name" placeholder="Full Name*" />
                                    <input className="contact-input" type="email" name="email" placeholder="Email Address*" />
                                    <input className="contact-input" type="text" name="subject" placeholder="Subject" />
                                </div>
                            </Col>
                            <Col md={7} className=" mb-3">
                                <div className="contact-form">
                                    <p className="contact-form-text">Tell us about your project*</p>
                                    <textarea name="message" id="" cols="30" rows="10" className="contact-input2" />
                                    <button name="btn_submit" className="contact-btn" type="submit"><span>Send message</span>
                                        <img src={email3} alt="" /></button>
                                </div>
                            </Col>
                        </Row>
                    </form>
                </div>
            </Container>

            {/* Google map */}
            <Container>
                <div className="map">
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.160354548702!2d3.373767814770599!3d6.501374695297139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c60ee681fe3%3A0x2335a9ffee0a1ed8!2s371%20Borno%20Way%2C%20Yaba%20101245%2C%20Lagos!5e0!3m2!1sen!2sng!4v1649951949223!5m2!1sen!2sng" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default Contact
