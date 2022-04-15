import React from 'react'
import './about.css'
import { Col, Container, Row, Carousel } from 'react-bootstrap'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import aboutus from '../../images/aboutus.jpg'
import BuildWithUs from '../../components/BuildWithUs'
import box from '../../images/icons/box.svg'
import dash from '../../images/icons/dash.svg'
import v from '../../images/icons/v.svg'
import x from '../../images/icons/x.svg'

const About = () => {
    return (
        <div>
            <Header />
            <div class="aboutus-section mt-5 pb-5">
                <Container>
                    <Row>
                        <Col md={6} className="me-auto">
                            <Carousel controls='false'>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={aboutus}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <p className="mb-4">Building a great team starts with <br />blah blah blah</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={aboutus}
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <p className="mb-4">Building a great team starts with <br />blah blah blah</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={aboutus}
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <p className="mb-4">Building a great team starts with <br />blah blah blah</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col md={5} >
                            <div>
                                <h1 className="aboutus-title">We <span>Ideate
                                </span><br />
                                    and <span>Innovate</span>
                                </h1>
                                <p className="aboutus-text">We build and develops digital solutions that connect customers to
                                    businesses to reach financial goals efficiently and
                                    faster.</p>
                                <p className="aboutus-text">We’re a digital solutions provider that evaluates customer
                                    experience to identify gaps and build tailored solutions that
                                    not only satisfies inclusion demands but also creates lasting value through
                                    user-friendly solutions that bring customers
                                    and businesses together to connect and transact business successfully.</p>
                                <p className="aboutus-text">Our customers are the core reason dexter is desirous to leverage the
                                    boundless powers of technology, and design thinking
                                    to create meaningful digital solutions that solve everyday problems for you.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* about section ends */}

            <div class="build-process-section mt-5">
                <Container >
                    <Row style={{ flexWrap: 'nowrap !important', overflowX: 'scroll', scrollBehavior: 'smooth' }}>
                        <Col md={4} >
                            <div className="build-process">
                                <div className="d-flex justify-content-between">
                                    <img src={box} alt="box" />
                                    <img src={dash} alt="dash" />
                                    <div></div>
                                </div>
                                <p className="process-title">Think</p>
                                <p className="process-text">For everything we do, we think through the borders of your ideas and
                                    conceptualize the best solution and methods
                                    possible - we think and work along with you</p>
                            </div>
                        </Col>
                        <Col md={4} >
                            <div className="build-process">
                                <div className="d-flex justify-content-between">
                                    <img src={v} alt="v" />
                                    <img src={dash} alt="dash" />
                                    <div></div>
                                </div>
                                <p className="process-title">Iterate</p>
                                <p className="process-text">From conceptualization, we create designs, wireframes, low fidelity
                                    designs and have a walkthrough with you and the team
                                    to ensure progress.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="build-process">
                                <div className="d-flex">
                                    <img src={x} alt="x" />
                                </div>
                                <p className="process-title">Build</p>
                                <p className="process-text">After back and forth with your idea, we can now start building based
                                    on case studies and progressive findings to help us
                                    build a great product and service experience.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <BuildWithUs />
            <Footer />
        </div>
    )
}

export default About