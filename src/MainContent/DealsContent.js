import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DealsContent extends React.Component {
    render() {
        const {image, title, address,YearOfCompletion,LandTenure,SiteArea,NLA9,Carparklots,Components,MajorTenants } = this.props;
        return (
            <Container className="card DarkNavy poppins-bold">
                <Row>
                    <img src={image} className="DealsImage" />
                </Row>
                <Row className="DealContentCard">
                    <Col md="12">
                    <Row className="DealTitle">
                        <h4>{title}</h4>
                    </Row>
                    <Row className="DealAddress">
                        <p>{address}</p>
                    </Row>
                    <Row className="DealNavyLine">
                    </Row>
                    <Row className="Attribute">
                        <Col md="6" className="AttributeName">
                       <label>Year Of Completion</label>
                       </Col>
                       <Col md="6" className="AttributeValue">
                       <label>{YearOfCompletion}</label>
                       </Col>
                    </Row>
                    <Row className="Attribute">
                        <Col md="6" className="AttributeName">
                       <label>Land Tenure</label>
                       </Col>
                       <Col md="6" className="AttributeValue">
                       <label>{LandTenure}</label>
                       </Col>
                    </Row>
                    <Row className="Attribute">
                        <Col md="6" className="AttributeName">
                       <label>Site Area (sqft)</label>
                       </Col>
                       <Col md="6" className="AttributeValue">
                       <label>{SiteArea}</label>
                       </Col>
                    </Row>
                    <Row className="Attribute">
                        <Col md="6" className="AttributeName">
                       <label>NLA 9 (sqft)</label>
                       </Col>
                       <Col md="6" className="AttributeValue">
                       <label>{NLA9}</label>
                       </Col>
                    </Row>
                    <Row className="DealNavyLine">
                    </Row>
                    <Row className="Attribute">
                        <Col md="6" className="AttributeName">
                       <label>Carpark lots </label>
                       </Col>
                       <Col md="6" className="AttributeValue">
                       <label>{Carparklots}</label>
                       </Col>
                    </Row>
                    <Row className="Attribute">
                        <Col md="6" className="AttributeName">
                       <label>Components </label>
                       </Col>
                       <Col md="6" className="AttributeValue">
                       <label>{Components}</label>
                       </Col>
                    </Row>
                    <Row className="Attribute">
                        <Col md="6" className="AttributeName">
                       <label>Major Tenants</label>
                       </Col>
                       <Col md="6" className="AttributeValue">
                       <label>{MajorTenants}</label>
                       </Col>
                    </Row>
              
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default DealsContent;
