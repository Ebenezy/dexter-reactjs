import React from 'react'
import './footer.css'
import twitter from '../../../images/icons/twitter.svg'
import facebook from '../../../images/icons/facebook.svg'
import linkedin from '../../../images/icons/linkedin.svg'
import instagram from '../../../images/icons/instagram.svg'
import logoBlack from '../../../images/dexter-logo-black.svg'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div>
            <div className="footer">
                <Container>
                    <div className="footer2">
                        <div className="social d-flex">
                            <Link to="https://twitter.com/dxtnigeria" target="_blank" >
                                <div className="twitter">
                                    <img src={twitter} alt="twitter" />
                                </div>
                            </Link>
                            <Link to="https://web.facebook.com/dxtnigeria" target="_blank" >
                                <div className="twitter">
                                    <img src={facebook} alt="facebook" />
                                </div>
                            </Link>
                            <Link to="https://linkedIn.com/company/dxtnigeria" target="_blank" >
                                <div className="twitter">
                                    <img src={linkedin} alt="linkedin" />
                                </div>
                            </Link>
                            <Link to="https://instagram.com/dxtnigeria" target="_blank" >
                                <div className="twitter">
                                    <img src={instagram} alt="instagram" />
                                </div>
                            </Link>
                        </div>
                        <p className="hero-cc">© 2022 Dexter Nigeria. All rights reserved</p>
                        <Link to="/"><img src={logoBlack} alt="dexter" className="dexter-logo2" /></Link>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Footer
