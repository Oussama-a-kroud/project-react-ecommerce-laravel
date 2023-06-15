import React from 'react'
import { Row, Col } from 'react-bootstrap'
import dwa from '../../images/dwa3.png'
const UserAllOrderCard = () => {
    return (
        <div>
            <Row className="d-flex mb-2">
                <Col xs="3" md="2" className="d-flex justify-content-start">
                    <img width="93px" height="120px" src={dwa} alt="" />
                </Col>
                <Col xs="8" md="6">
                    <div className="d-inline pt-2 cat-title">
                    Razormin est un produit biostimulant et enracineur. Sa formule équilibrée incite d’abord l’enracinement, et ensuite le développement radiculaire et de la masse foliaire
                    </div>
                    <div className="d-inline pt-2 cat-rate me-2">4.5</div>
                    <div className="rate-count d-inline p-1 pt-2">(160 )</div>
                    <div className="mt-3">
                        <div className="cat-text  d-inline">quantite</div>
                        <input
                            className="mx-2 "
                            type="number"
                            style={{ width: "40px", height: "25px" }}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserAllOrderCard
