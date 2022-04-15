import React from 'react'
import { Container, Button } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

const JoinDexter = () => {
    return (
        <div>
            <Container >
                <div className="build-with-us-section wave_effect">
                    <div className="build-with-us">
                        <h2 className="build-with-us-text">Be a part of <span>something special</span></h2>
                        {/* <Link to={{ pathname: `${link}` }}> */}
                        <a href="mailto:hr@dxtnigeria.io"><Button className="build-with-us-btn hvr-wobble-vertical">Join Dexter
                        </Button>
                        </a>
                        {/* </Link> */}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default JoinDexter
