import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../styles/index.css'

const BuildWithUs = () => {
    return (
        <div>
            <Container >
                <div className="build-with-us-section wave_effect">
                    <div className="build-with-us">
                        <h2 className="build-with-us-text">Got an idea? <span>Come build with us</span></h2>
                        <Link to="/contact"><Button className="build-with-us-btn hvr-wobble-vertical">Build with
                            us</Button></Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default BuildWithUs
