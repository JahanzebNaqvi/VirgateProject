import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class MainContent extends React.Component {
    render() {
        return (
            <Container className="MainContent">
                <Row>
                    <Col>
                    <h1 className="DealClosing">Deals Closing</h1>
                    </Col>
                </Row>
                <Row>
                    <Col sm="1" className="NavyLine">
                    
                    </Col>
                    <Col sm="11">
                        
                    </Col>
                </Row>
                <Row>
                    <Col md="2">

                    </Col>
                    <Col md="10">
                    </Col>
                    <Col md="2">

                    </Col>
                </Row>
            </Container>
        )
    }
}

export default MainContent;
