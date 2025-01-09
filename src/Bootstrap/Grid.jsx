import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BootstrapListGroup from "./ListGroup";
import Bootstrapcard from "./Bootstrapcard";

function ResponsiveExample() {
  return (
    <div className='container'>
        
     <h1>Responsive Layout</h1>

     <Container>
      <Row>
     
        <Col xs={12} sm={12} md={6} lg={4} xl={4} style={{margin:'10px 0px'}}>
          <BootstrapListGroup />
        </Col>
        
  
        <Col xs={12} sm={12} md={6} lg={4} xl={4} style={{margin:'10px 0px'}}>
        <BootstrapListGroup />
        </Col>
        
  
        <Col xs={12} sm={12} md={6} lg={4} xl={4} style={{margin:'10px 0px'}}>
        <BootstrapListGroup />
        </Col>
      </Row>
    </Container>

    <Container>
      <Row>
        <Col sm={12} md={6} lg={3}>
        <Bootstrapcard />
        </Col>
        <Col sm={12} md={6} lg={3}>
        <Bootstrapcard />
        </Col>
        <Col sm={12} md={6} lg={3}>
        <Bootstrapcard />
        </Col>
        <Col sm={12} md={6} lg={3}>
        <Bootstrapcard />
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default ResponsiveExample;