import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './products.css'
import BuildWithUs from '../../shared/components/BuildWithUs'
import Footer from '../../shared/components/footer/Footer'
import Header from '../../shared/components/Navigation/Header'
import crowdbox from '../../images/crowdbox.svg'
import dexterApp2 from '../../images/dexter-app2.png'
import next from '../../images/icons/next.svg'

const Products = () => {
    return (
        <div>
            <Header />
            <div className="our-products">
                <Container>
                    <div className="text-center">
                        <h1 className="our-products-title">our <span>Products</span></h1>
                    </div>
                    <Row style={{ flexWrap: 'nowrap !important', overflowX: 'scroll', scrollBehavior: 'smooth' }}>
                        <Col md={4}>
                            <div className="products">
                                <div className="product1">
                                    <div className="text-center mb-5">
                                        <img src={crowdbox} alt="" />
                                    </div>
                                    <img src={dexterApp2} alt="" width="190px" className="product1_img" />
                                </div>
                                <div className="products-content">
                                    <p className="product-title">Crowdbux</p>
                                    <p className="hero-subtitle">Fintech, Loans, Crowdfunding</p>
                                    <p className="hero-text">Crowdbux is a credit finance marketplace that matches you to find
                                        the eligible loan offerings from multiple lenders at
                                        the best rates under 5 minutes.</p>
                                    <Link to="#" className="d-flex hvr-icon-wobble-horizontal">
                                        <div className="read-more">Read more</div>
                                        <i className="hvr-icon"><img src={next} alt="next" /></i>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="products">
                                <div className="product2">
                                    <p className="arriving-soon">Arriving Soon</p>
                                </div>
                                <div className="products-content">
                                    <p className="arriving-soon2">Arriving Soon…</p>
                                    <div className="opacity-0 hide-mobile">
                                        <p className="hero-subtitle">Fintech, Loans, Crowdfunding</p>
                                        <p className="hero-text ">Crowdbux is a credit finance marketplace that matches you to
                                            find the eligible loan offerings from multiple lenders at
                                            the best rates under 5 minutes.</p>
                                        <div className="d-flex ">
                                            <div className="read-more">Read more</div>
                                            <img src={next} alt="next" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="products">
                                <div className="product2">
                                    <p className="arriving-soon">Arriving Soon</p>
                                </div>
                                <div className="products-content">
                                    <p className="arriving-soon2">Arriving Soon…</p>
                                    <div className="opacity-0 hide-mobile">
                                        <p className="hero-subtitle ">Fintech, Loans, Crowdfunding</p>
                                        <p className="hero-text ">Crowdbux is a credit finance marketplace that matches you to
                                            find the eligible loan offerings from multiple lenders at
                                            the best rates under 5 minutes.</p>
                                        <div className="d-flex ">
                                            <div className="read-more">Read more</div>
                                            <img src={next} alt="next" />
                                        </div>
                                    </div>
                                </div>
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

export default Products
