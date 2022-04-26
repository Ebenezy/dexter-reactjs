import React from 'react'
import './team.css'
import Footer from '../../shared/components/footer/Footer'
import Header from '../../shared/components/Navigation/Header'
import JoinDexter from '../../shared/components/JoinDexter'
import chidiebere from '../../images/chidiebere-dexter.jpg'
import chiamaka from '../../images/chiamaka-dexter.jpg'
import komani from '../../images/komani-dexter.jpg'
import ayodeji from '../../images/ayodeji-dexter.jpg'
import twitter from '../../images/icons/twitter.svg'
import linkedin from '../../images/icons/linkedin.svg'
import instagram from '../../images/icons/instagram.svg'
// import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'

const Team = () => {
    return (
        <div>
            <Header />
            <div className="our-products">
                <Container className="container">
                    <div className="text-center">
                        <h1 className="our-products-title">our <span>dream team</span></h1>
                    </div>
                    <Row>
                        <Col md={3} className="mb-3">
                            <div className="team">
                                <div className="team-image-box">
                                    <img src={chidiebere} alt="chidiebere" className="team-image" />
                                </div>
                                <div className="team-info">
                                    <p className="team-name">Chidebere</p>
                                    <p className="team-surname">Onwuzurike</p>
                                    <p className="team-jd">Founder, CEO</p>
                                    <div className="social d-flex">
                                        <a href="https://twitter.com/ix_ebere" target="_blank" rel="noopener noreferrer">
                                            <div className="twitter2">
                                                <img src={twitter} alt="twitter" />
                                            </div>
                                        </a>
                                        <a href="https://www.linkedin.com/in/chidebere-onwuzurike-26963513/" target="_blank"
                                            rel="noopener noreferrer">
                                            <div className="twitter2">
                                                <img src={linkedin} alt="linkedin" />
                                            </div>
                                        </a>
                                        <a href="#" target="_blank" rel="noopener noreferrer">
                                            <div className="twitter2">
                                                <img src={instagram} alt="instagram" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="mb-3">
                            <div className="team">
                                <div className="team-image-box">
                                    <img src={ayodeji} alt="gladys" className="team-image" />
                                </div>
                                <div className="team-info">
                                    <p className="team-name">Ayodeji</p>
                                    <p className="team-surname">Esan</p>
                                    <p className="team-jd">COO</p>
                                    <div className="social d-flex">
                                        <a href="#" target="_blank" rel="noopener noreferrer">
                                            <div className="twitter2">
                                                <img src={twitter} alt="twitter" />
                                            </div>
                                        </a>
                                        <a href="https://www.linkedin.com/in/deji-esan-6304a1228/" target="_blank"
                                            rel="noopener noreferrer">
                                            <div className="twitter2">
                                                <img src={linkedin} alt="linkedin" />
                                            </div>
                                        </a>
                                        <a href="#" target="_blank" rel="noopener noreferrer">
                                            <div className="twitter2">
                                                <img src={instagram} alt="instagram" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="mb-3">
                            <div className="team">
                                <div className="team-image-box">
                                    <img src={chiamaka} alt="chiamaka" className="team-image" />
                                </div>
                                <div className="team-info">
                                    <p className="team-name">Chiamaka</p>
                                    <p className="team-surname">Onwukwe</p>
                                    <p className="team-jd">Co-Founder, CMO</p>
                                    <div className="social d-flex">
                                        <a href="https://twitter.com/x_amakaa" target="_blank" rel="noopener noreferrer">
                                            <div className="twitter2">
                                                <img src={twitter} alt="twitter" />
                                            </div>
                                        </a>
                                        <a href=" https://www.linkedin.com/in/chiamaka-jennifer-onwukwe-834080145/"
                                            target="_blank" rel="noopener noreferrer">
                                            <div className="twitter2">
                                                <img src={linkedin} alt="linkedin" />
                                            </div>
                                        </a>
                                        <a href="#" target="_blank" rel="noopener noreferrer">
                                            <div className="twitter2">
                                                <img src={instagram} alt="instagram" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="mb-3">
                            <div className="team">
                                <div className="team-image-box">
                                    <img src={komani} alt="komani" className="team-image" />
                                </div>
                                <div className="team-info">
                                    <p className="team-name">Komani</p>
                                    <p className="team-surname">Tamunuokeopreye</p>
                                    <p className="team-jd">CTO</p>
                                    <div className="social d-flex">
                                        <a href="https://twitter.com/preyekomani" target="_blank" rel="noopener noreferrer">
                                            <div className="twitter2">
                                                <img src={twitter} alt="twitter" />
                                            </div>
                                        </a>
                                        <a href="https://www.linkedin.com/in/preye-komani-b9927aab/" target="_blank" rel="noopener noreferrer">
                                            <div className="twitter2">
                                                <img src={linkedin} alt="linkedin" />
                                            </div>
                                        </a>
                                        <a href="#" target="_blank" rel="noopener noreferrer">
                                            <div className="twitter2">
                                                <img src={instagram} alt="instagram" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
            <JoinDexter />
            <Footer />
        </div>
    )
}

export default Team
