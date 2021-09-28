import React from 'react';
import './About.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import AboutImg from '../../Images/about.png';

const About = () => {
    return (
        <>
        <div className="about-area pt-5 pb-5">
            <Container>
                <Row>
                    <Col lg={6} className="align-self-center">
                        <div className="about-img">
                            <Image src={AboutImg} width="100%"/>
                        </div>
                        
                    </Col>
                    <Col lg={6} className="align-self-center">
                        <div className="about-text">
                            <div className="section-title pb-4">
                                <div className="h2 fw-bold">About Us</div>
                                <h6 className="fw-bold pt-2">Unde, adipisci hic? Iure officia assumenda, excepturi nostrum fugiat magni tenetur itaque?
                                 Reiciendis quod tempora sequi placeat suscipit .</h6>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro similique, sed facere ipsum eligendi quae. Unde, adipisci hic? Iure officia assumenda, excepturi nostrum fugiat magni tenetur itaque? Reiciendis quod tempora sequi placeat suscipit alias deserunt magni veritatis nobis officia velit consectetur, minima ex vitae. Praesentium eaque, sint repellendus eum, voluptates sit doloribus accusantium ipsam quas neque voluptas dicta nesciunt id repellat. Eaque beatae atque consequuntur ullam numquam iusto tempora laborum quae odio ratione, magni eius perferendis soluta rerum odit officia?</p>
                            <p>Animi consequatur neque perferendis necessitatibus adipisci veritatis commodi dicta, esse molestias reiciendis. Iure officia assumenda, excepturi nostrum fugiat magni tenetur itaque?</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default About;
