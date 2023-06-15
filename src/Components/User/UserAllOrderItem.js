import React from 'react'
import { Row, Col } from 'react-bootstrap'
import UserAllOrderCard from './UserAllOrderCard'
const UserAllOrderItem = () => {
    return (
        <div className="user-order mt-2">
            <Row>
                <div className="py-2 order-title">command N 234556</div>
            </Row>
            <UserAllOrderCard />
            <Row className="d-flex justify-content-between">
                <Col xs="6" className="">
                    <div>
                        <div className="d-inline">etat</div>
                        <div className="d-inline mx-2 stat">en cours </div>
                    </div>
                </Col>
                <Col xs="6" className="d-flex justify-content-end">
                    <div>
                        <div className="barnd-text">4000 Mad</div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserAllOrderItem
