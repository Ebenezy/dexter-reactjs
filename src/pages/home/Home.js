import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../styles/index.css'
import Header from '../../shared/components/Navigation/Header';
import next2 from '../../images/icons/next2.svg'
import google from '../../images/brands/google.svg'
import hubspot from '../../images/brands/hubspot.svg'
import microsoft from '../../images/brands/microsoft.svg'
import facebookBusiness from '../../images/brands/facebook-business.svg'
import salesForce from '../../images/brands/salesforce.svg'
import shopify from '../../images/brands/shopify.svg'
import twilio from '../../images/brands/twilio.svg'
import salesManago from '../../images/brands/sales-manago.svg'
import smilingLady from '../../images/happy-black-girl.png'
// import dexterApp from '../../images/dexter-app.png'
// import dexterApp3 from '../../images/dexter-app3.png'
// import appIcon from '../../images/app-icon.svg'
// import next from '../../images/icons/next.svg'
// import x from '../../images/x.svg'
// import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='hero-section'>
            <Header />
            <div className='hero-inner'>
                <Container>
                    <Row>
                        <Col md={7} id='first'>
                            <div className="hero-left">
                                <div className="">
                                    <div className="mb-3">
                                        <h1 className="hero-title">Together, let’s create an innovative future</h1>
                                    </div>
                                    <Row>
                                        <Col md={8}>
                                            <p className="hero-subtitle2">Ideate. Create. Develop</p>
                                            <p className="hero-text">We build and develop digital solutions that connect
                                                customers to businesses to reach financial goals efficiently and
                                                faster.<span id="dots">..</span></p>
                                            <div id="more">
                                                <p className="hero-text mb-0">Dexter is a digital solutions provider that
                                                    evaluates
                                                    customer experience to identify gaps and build tailored solutions
                                                    that not only satisfies inclusion demands but also creates lasting
                                                    value
                                                    through user-friendly solutions that bring
                                                    people and businesses together to communicate and transact business
                                                    successfully.</p>
                                            </div>
                                            <buttton onclick="myFunction()" id="myBtn"
                                                className="more_btn hvr-icon-wobble-horizontal">
                                                Read more
                                                <img src={next2} alt="next" className="hvr-icon" />
                                            </buttton>
                                            <div className="brands">
                                                <img src={google} alt="Google" />
                                                <img src={hubspot} alt="hubspot" />
                                                <img src={microsoft} alt="microsoft" />
                                                <img src={facebookBusiness} alt="facebook-Business" />
                                                <img src={salesForce} alt="sales-Force" />
                                                <img src={shopify} alt="shopify" />
                                                <img src={twilio} alt="twilio" />
                                                <img src={salesManago} alt="sales-Manago" />
                                            </div>
                                        </Col>
                                    </Row>

                                </div>
                            </div>
                            {/* <div className="">
                                <div className="dexter-ngn">
                                    <div className="dexter-ngn2">
                                        <p className="dexter-ngn-title">Dexter Nigeria</p>
                                        <p className="dexter-ngn-text">Dexter is a digital solutions provider that evaluates
                                            customer experience to identify gaps and build tailored solutions
                                            that not only satisfies inclusion demands but also creates lasting value
                                            through user-friendly solutions that bring
                                            people and businesses together to communicate and transact business
                                            successfully.</p>
                                        <div className="text-end">
                                            <img src={x} alt="x" className="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <img className="app-icon me-3" src={appIcon} alt="app-icon" />
                                    <h1 className="hero-title">Crowdbux</h1>
                                </div>
                                <Row >
                                    <Col className="col-md-8">
                                        <p className="hero-subtitle">Fintech, Loans, Crowdfunding</p>
                                        <p className="hero-text">We ideate, create and develop online platforms that connect
                                            people to
                                            people, and people to business, to accomplish a
                                            vast range of personal, social and financial goals.</p>
                                        <Link to="/products" className="d-flex hvr-icon-wobble-horizontal">
                                            <div className="read-more">Read more</div>
                                            <i className="hvr-icon"><img src={next} alt="next" /></i>
                                        </Link>
                                    </Col>
                                </Row>

                            </div> */}
                        </Col>
                        <Col md={5} id='second'>
                            <div class="landing-hero-img">
                                <img src={smilingLady} className='floating' alt='dexter app' /></div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <p className="hero-cc">© 2022 Dexter Nigeria. All rights reserved</p>
        </div>
    )
}

export default Home
