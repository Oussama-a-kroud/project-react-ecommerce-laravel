import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import dwa4 from '../../images/sale.png'
const DiscountSection = () => {
    return (
        <Container>
            <Row className="discount-backcolor my-3  mx-2 d-flex text-center align-items-center">
                <Col sm="6">
                    <div className="discount-title">
                    Jusqu'à 30% de promotion</div>
                </Col>
                <Col sm="6">
                    <img className="dicount-img" src={dwa4} alt="" />
                </Col>
            </Row>
        </Container>
    )
}

export default DiscountSection
