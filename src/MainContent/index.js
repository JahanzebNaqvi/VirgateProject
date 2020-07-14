import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DealContent from './DealsContent';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class MainContent extends React.Component {
    render() {
        return (
            <Container className="MainContent">
                <Row>
                    <Col>
                        <h2 className="DealClosing">Deals Closing</h2>
                    </Col>
                </Row>
                <Row>
                    <Col sm="1" className="NavyLine">
                    </Col>
                    <Col sm="11">
                    </Col>
                </Row>
                <Row className="DealContent">
                    <Col md="4">
                        <DealContent />
                    </Col>
                    <Col md="4">
                    </Col>
                    <Col md="4">

                    </Col>
                </Row>
            </Container>
        )
    }
}

export default MainContent;
