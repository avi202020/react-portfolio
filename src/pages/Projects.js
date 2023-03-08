
import Card from "../components/Card";
import Col from "../components/Col";
import Row from "../components/Row";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import projecter from "./projects.json";
import React, { Component } from "react";


class Projects extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    projecter
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Container style={{ marginTop: 30, marginBottom: 600 }}>
          <Row>
            <Col size="md-12">
            <h3 className="text-center">My Projects</h3>
                 <p>
</p>
            </Col>
          </Row>
          <Row>
                <Wrapper>
              {  console.log(projecter)}
            {
            
            this.state.projecter.map(projectera => (
          <Card
            id={projectera.id}
            key={projectera.id}
            name={projectera.name}
            image={projectera.image}
            github={projectera.github}
            url={projectera.url}
            />
        ))};
           </Wrapper>
            </Row>
        </Container>
      </div>
    );
  }
}

export default Projects;