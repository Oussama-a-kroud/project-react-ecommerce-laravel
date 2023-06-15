import React, { useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
import CategoryCard from "./../Category/CategoryCard";

const CategoryContainer = () => {
  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);

const colors=["#F4DBA4","#2bcee9","#772be9","#e92b62","#2be98d"]
  return (
    <Container>
      <div className="admin-content-text mt-2 ">tout les categories </div>
      <Row className="my-2 d-flex justify-content-between">
      
       {
          loading===false?(
            category ? (
          category.map((item,index) => {
            return(<CategoryCard 
              key={index}
                title={item.name}
                img={item.img}
                background={colors[Math.floor(Math.random()*5)+1]}
              />)
           })
           ) :  <h4>pas de category</h4>
          ):  <Spinner animation="border" variant="primary" />
        }
     
       
      </Row>
    </Container>
  );
};

export default CategoryContainer;
