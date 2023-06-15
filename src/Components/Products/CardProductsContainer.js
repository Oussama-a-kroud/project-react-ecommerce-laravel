import React from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import SubTiltle from "../Utility/SubTitle";

const CardProductsContainer = ({ title, btntitle, pathText ,products}) => {
  return (
    <Container>
      {products ? (
          <SubTiltle title={title} btntitle={btntitle} pathText={pathText} />
        ) : null}
   
      <Row className="my-2 d-flex justify-content-between">
      {products ? (
        products.map((item,index)=>< ProductCard items={item} key={index}/>)
        ) : null}
   
  


      </Row>
    </Container>
  );
};

export default CardProductsContainer;
