import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from './Navigation';

class header extends React.Component {
  render() {
    return (
      <Container fluid className="header">
        <Row>
        <Navigation/>
        </Row>
        <Row className="slider">
          <Col md="6" className="sliderText">
            <h1>Looking... </h1>
            <h1> for a right house for you ! </h1>
          </Col>
          <Col md="6">
          </Col>
        </Row>
        <Row>
          <Col sm="1" className="WhiteLine">
          </Col>
          <Col md="11">
          </Col>
        </Row>
      </Container>
    )
  }
}

export default header;
