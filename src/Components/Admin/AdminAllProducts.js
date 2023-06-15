import React from "react";
import { Row } from "react-bootstrap";
import AdminAllProductsCard from "./AdminAllProductsCard";

const AdminAllProducts = ({ products }) => {
  return (
    <div>
      <div className="admin-content-text">Gérer tous les produits</div>
      <Row className="justify-content-start">
        {products ? (
          products.map((item, index) => (
            <AdminAllProductsCard item={item} key={index} />
          ))
        ) : (
          <h4>no data</h4>
        )}
      </Row>
    </div>
  );
};

export default AdminAllProducts;
