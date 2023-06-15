import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminAllProducts from '../../Components/Admin/AdminAllProducts'
import Pagination from '../../Components/Utility/Pagination'
import ViewProductAdminHook from '../../hooks/admin/view-product-admin-hook'
const AdminAllProductsPage = () => {

    const [items]=ViewProductAdminHook()
    if (items)
    console.log(items)
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <AdminAllProducts products={items} />
                    {/* <Pagination /> */}
                </Col>
            </Row>
        </Container>
    )
}

export default AdminAllProductsPage
