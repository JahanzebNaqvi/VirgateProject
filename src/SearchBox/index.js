import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextFieldSearch from './TextSearchField';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SearchBox extends React.Component {
    render() {
        return (
            <Container className="SearchBox">
                <Row>
                    <Col md="2">

                    </Col>
                    <Col md="10">
                        <Row>
                            <Col md="4" className="padding-x">
                                <TextFieldSearch label="Search and Find" placeholder="Title, keyword, address, zip or property id ..." />
                            </Col>
                            <Col md="4" className="padding-x">
                                <TextFieldSearch label="Location" placeholder="Singapore, Singapore" />
                            </Col>
                            <Col md="3" className="padding-x">
                                <TextFieldSearch label="Type" placeholder="Select" />
                            </Col>
                            <Col md="1" className="padding-x searchButton">
                                <FontAwesomeIcon icon="search" />
                            </Col>
                        </Row>
                    </Col>
                    <Col md="2">

                    </Col>
                </Row>
            </Container>
        )
    }
}

export default SearchBox;
