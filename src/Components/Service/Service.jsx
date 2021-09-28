import React, { useState } from "react";
import { Container, Row, Image, Col, Button } from 'react-bootstrap';
import './Service.css';
import ServiceList from './ServiceList';
import { FaArrowCircleRight } from "react-icons/fa";

const Service = () => {


    const [items, setItem] = useState(ServiceList);

    return (
        <>
            <section className="service-sertion py-5">

                <div className="text-center">
                    <div class="header-section">
                        <h2 class="title">Exclusive <span>Services</span></h2>
                        <p class="description">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some injected humour</p>
                    </div>
                </div>

                <Container>
                    <Row>
                        {items.map((element) => {
                            const { id, image, title, description, url } = element;

                            return (
                                <Col lg={4}>
                                    <div class="single-service">
                                        <div className="part-1">
                                            <img src={image} alt="" />
                                            <h3 className="title">{title}</h3>
                                        </div>
                                        <div className="part-2">
                                            <p className="description">{description}</p>
                                            <a href={url}> <FaArrowCircleRight className="se-icon" /> Read More</a>
                                        </div>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </section>
        </>
    )
};

export default Service;


