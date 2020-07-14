import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DealContent from './DealsContent';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image1 from '../Images/bunglow1.jpg'
import image3 from '../Images/bunglow2.jpg'
import image2 from '../Images/bunglow3.jpg'

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
                        <DealContent
                            image={image1}
                            title="Robinson77"
                            address="77 Robinon Road, Shenton Way-Robinson Rd-Cecil St, Singapore"
                            YearOfCompletion="2019"
                            LandTenure="99 Years"
                            SiteArea="27,281"
                            NLA9="3,700,000"
                            Carparklots="900"
                            Components="Office, Retail, Hotel"
                            MajorTenants="CITI Bank, Allianz Mitsui"
                        />
                    </Col>
                    <Col md="4">
                        <DealContent
                            image={image2}
                            title="Marina One East Tower"
                            address="7 Straits View, Singapore 018936 Singapore"
                            YearOfCompletion="2019"
                            LandTenure="99 Years"
                            SiteArea="27,281"
                            NLA9="3,700,000"
                            Carparklots="900"
                            Components="Office, Retail, Hotel"
                            MajorTenants="CITI Bank, Allianz Mitsui"
                        />
                    </Col>
                    <Col md="4">
                        <DealContent
                            image={image3}
                            title="Mapletree Business City"
                            address="10 Pasir Panjang Rd, 117438 Singapore"
                            YearOfCompletion="2019"
                            LandTenure="99 Years"
                            SiteArea="27,281"
                            NLA9="3,700,000"
                            Carparklots="900"
                            Components="Office, Retail, Hotel"
                            MajorTenants="CITI Bank, Allianz Mitsui"
                        />

                    </Col>
                </Row>
            </Container>
        )
    }
}

export default MainContent;
