import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
// import selfie from "../assets/me.png"
// import farmbus from "../assets/farmbus.jpg"

function About() {
  return (
    <div>
      <Container style={{ marginTop: 30, marginBottom: 600 }}>
        <Row>
          <Col size="md-12">
          </Col>
        </Row>
        <Row>
        <Col size="sm-12 md-6 lg-4 xl-3" align-items="center">
        {/* <img src={selfie} width="300" height="300" alt=" selfie of me" className="selfie" /> */}
        </Col>
          <Col size="sm-12 md-6 lg-7 xl-8">
            <h3>About Me</h3>
               <p>
               My technical skills are full stack development and application automation</p>
            <h3>Interests and Hobbies</h3> 
            <p>
              In free watch movies and comedy shows
            </p>
            {/* <img src={farmbus} height="45%" alt="my VW Bus" /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
