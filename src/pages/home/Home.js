import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../styles/index.css'
import Header from '../../components/header/Header';
import dexterApp from '../../images/dexter-app.png'
// import dexterApp3 from '../../images/dexter-app3.png'
import appIcon from '../../images/app-icon.svg'
import next from '../../images/icons/next.svg'
import x from '../../images/x.svg'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='hero-section'>
            <Header />
            <div className='hero-inner'>
                <Container>
                    <Row>
                        <Col md={6} id='first'>
                            <div className="">
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
                                <div className="dexter-ngn">
                                    <div className="dexter-ngn2">
                                        <p className="dexter-ngn-title">Dexter Nigeria</p>
                                        <p className="dexter-ngn-text">We’re a multifaceted digital solutions developer and
                                            provider, we analyze customer
                                            experience and identify gaps that can
                                            be solved using user-friendly solutions.</p>
                                        <div className="text-end">
                                            <img src={x} alt="x" className="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} id='second'><img src={dexterApp} className='w-100 floating' alt='dexter app' /></Col>
                    </Row>
                </Container>
            </div>
            <p className="hero-cc">© 2022 Dexter Nigeria. All rights reserved</p>
        </div>
    )
}

export default Home
