import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ViewProductsDetailsHook from '../../hooks/products/view-products-details-hook'
import { useSelector } from 'react-redux'

const ProductText = () => {
  const{id}=useParams()

    const [item]=ViewProductsDetailsHook(id)
    const oneCategory = useSelector((state) => state.allCategory.oneCategory);
  //to show category
  let cat = [];

  if (oneCategory) {
    cat = oneCategory;
  } else {
    cat = [];
  }
  


    return (
        <div>
      <Row className="mt-2">
        <div className="cat-text">nom de produit :</div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline">
           {item.name}<div className="cat-rate d-inline mx-3">4.5</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline">category :</div>
          <div className="barnd-text d-inline mx-1"> {cat.name} </div>
        </Col>
      </Row>
  

      <Row className="mt-4">
        <div className="cat-text">Caractéristiques :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">
         {item.desc}
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className="product-price d-inline px-3 py-3 border">{item.price} dh</div>
          <div className="product-cart-add px-3 py-3 d-inline mx-3">ajouter aux panier </div>
        </Col>
      </Row>
    </div>
    )
}

export default ProductText
