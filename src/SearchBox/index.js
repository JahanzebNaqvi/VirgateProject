import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextFieldSearch from './TextSearchField';


class SearchBox extends React.Component {
    render() {
        return (
            <Container fluid="md">
                <Row>
                    <Col md="2">

                    </Col>
                    <Col md="8">
                        <Row>
                            <Col md="4">
                            <TextFieldSearch label="Search and Find" placeholder="Title, keyword, address, zip or property id ..."/>  
          </Col>
                            <Col md="4">
                            <TextFieldSearch label="Location" placeholder="Singapore, Singapore"/>  
          </Col>
                            <Col md="4">
                            <TextFieldSearch label="Type" placeholder="Select"/>  
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
