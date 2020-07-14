import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image1 from '../Images/bunglow1.jpg'
class DealsContent extends React.Component {
    render() {
        return (
            <Container className="">
                <Row>
                    <img src={image1} className="DealsImage"/>
                </Row>
                <Row>
                </Row>
            </Container>
        )
    }
}

export default DealsContent;
