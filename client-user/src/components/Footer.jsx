import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        {/* <hr className="bg-light" /> */}
        <Row>
          <Col md={12} className="text-center">
            <p>
              &copy; {new Date().getFullYear()} CFK. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
