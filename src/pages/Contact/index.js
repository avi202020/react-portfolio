import React from "react";



// function Contact() {
//   return (
//     <div style={styles.contactContainer} className="contactContainer row">
//       <div className="leftContainer col-5">
//         <h3 className="text-center">Contact Me</h3>
//         <p className="text-left">If you need any additional information, please click <a href="https://forms.gle/hD9e8SQE7guTvM5cA">
//         here
//       </a>.</p>
//       </div>
//       <div className="rightContainer col-5">
//         <h3 className="text-center">Github</h3>
//         <p className="text-left">To view other applications I have created, or to see the journey of my application creations, feel free to visit my <a href="https://github.com/avi202020">
//         GitHub
//       </a>.</p>
//       <h3 className="text-center">LinkedIn</h3>
//       <p className="text-left">Additionally, feel free to connect with me via <a href="https://www.linkedin.com/in/mishraavadhesh">
//         LinkedIn
//       </a>.</p>
//       </div>
//     </div>
//   );
// }

// export default Contact;

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
// import selfie from "../assets/me.png"
// import farmbus from "../assets/farmbus.jpg"

const styles = {
    contactContainer: {
        color: '#724060',
      },
  };

function Contact() {
  return (
    <div>
      <Container style={{ marginTop: 30 , marginBottom: 400}}>
        <Row>
          <Col size="md-12">
          </Col>
        </Row>          
        <Row>
        <Col size="sm-12 md-6 lg-4 xl-3" align-items="center">
        {/* <img src={selfie} width="300" height="300" alt=" selfie of me" className="selfie" /> */}
        </Col>
          <Col size="sm-12 md-6 lg-7 xl-8">
               <div className="col-5">
      <h3 className="text-center">Contact Me</h3>
        <p className="text-center mx-10">If you need any additional information, please fill below contact form
     </p>
     <div className="d-flex justify-content-center" >   
     <p className="text-center mx-10">
       <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScpIWcijsZy-gAsygvmw0jhgD3XaDdya40HQyjsQ8DwGsCP5Q/viewform?embedded=true" width="600" height="812" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
       </p>
       </div> 
      </div>
        </Col>
       </Row>
 
      </Container>
    </div>
  );
}

export default Contact;


// <Row>
// <Col size="sm-12 md-6 lg-4 xl-3" align-items="center">
// {/* <img src={selfie} width="300" height="300" alt=" selfie of me" className="selfie" /> */}
// </Col>
//   <Col size="sm-12 md-6 lg-7 xl-8">
//        <div className="leftContainer col-5">
// <h3 className="text-center">Github</h3>
// <p className="text-left">To view other applications I have created, or to see the journey of my application creations, feel free to visit my <a href="https://github.com/avi202020">
// GitHub
// </a>.</p>
// </div>
//   </Col>
// </Row>
// <Row>
// <Col size="sm-12 md-6 lg-4 xl-3" align-items="center">
// {/* <img src={selfie} width="300" height="300" alt=" selfie of me" className="selfie" /> */}
// </Col>
//   <Col size="sm-12 md-6 lg-7 xl-8">
//        <div className="leftContainer col-5">
//      <h3 className="text-center">LinkedIn</h3>
// <p className="text-left">Additionally, feel free to connect with me via <a href="https://www.linkedin.com/in/mishraavadhesh">
// LinkedIn
// </a>.</p>
// </div>
//   </Col>
// </Row>    