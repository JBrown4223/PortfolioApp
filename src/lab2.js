import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logoImage from './images/logo.png';
import Bye_Nye_FireGuy from './images/Bye_Nye_FireGuy.jpg';
import Bill_Nye_Fire from './images/Bill_Nye_Fire.jpg';

export default function Lab2() {
   
       
        return(
        <div>
          <Container>
                <Row>
                    <Col>
                        <h3>Created Image</h3>
                          <img src={logoImage} alt=''width="300" height="200"/>
                    </Col>
                    <Col>
                        <h3>Sample Image</h3>
                          <img src={Bill_Nye_Fire} alt='' width="300" height="200"/>
                    </Col>
                    <Col>
                        <h3>Edited Sample Image</h3>
                        <img src={Bye_Nye_FireGuy} alt='' width="300" height="200"/>
                    </Col>
                </Row>
           </Container>
        </div>
        );
    
}



        