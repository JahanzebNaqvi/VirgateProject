import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navigation extends React.Component {
    render() {
        return (
            <Row className="navigaton">
                <Col md="8">
                </Col>
                <Col md="4">
                    <Nav
                        // activeKey="/home"
                        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                    >
                        <Nav.Item>
                            <Nav.Link className="DarkNavy" href="AddProperty">Add a Property</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="DarkNavy" eventKey="Client Login">Client Login</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="DarkNavy" eventKey="Search"><FontAwesomeIcon icon="search" /></Nav.Link>
                            
                        </Nav.Item>
                        {/* <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item> */}
                    </Nav>
                </Col>
            </Row>

        )
    }
}

export default Navigation;
