import React, { useEffect } from 'react'
import { Container,Row ,Col, Spinner} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../redux/actions/categoryAction';
import { useState } from 'react';

const CategoryHeader = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);

console.log(category)
    return (
        <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">
          <div className="cat-text-header ">tout les categories</div>
          {
          loading===false?(
            category?(
              category.map((item) => {
            return(<div className="cat-text-header"  >{item.name}</div>);
           })
           ):<h4 className="cat-text-header" >pas de category</h4>
          ):<Spinner animation="border" variant="primary" />
        }
     
        
              
          </Col>
        </Row>
      </Container>
    </div>
    )
}

export default CategoryHeader
