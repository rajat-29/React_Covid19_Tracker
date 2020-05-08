import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';

function Title(props) {
    console.log(props)
    return (
        <Container style={{fontSize: "180%",fontStyle: "bold",margin: "10px 0px 10px 0px"}}>
            <Row>
                <Col>Total : {props.summary.total}</Col>
                <Col>Confirmed : {props.summary.confirmedCasesIndian}</Col>
                <Col>Recovered : {props.summary.discharged}</Col>
                <Col>Deaths : {props.summary.deaths}</Col>
            </Row>
        </Container>   
    );
}

export default Title;