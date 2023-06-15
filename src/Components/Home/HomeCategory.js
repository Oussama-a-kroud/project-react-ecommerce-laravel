import React, { useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import SubTiltle from "../Utility/SubTitle";
import CategoryCard from "./../Category/CategoryCard";

import clothe from "../../images/clothe.png";
import dwa2 from "../../images/dwa2.png";
import dwa3 from "../../images/dwa3.png";
import dwa4 from "../../images/dwa4.png";
import dwa5 from "../../images/dwa5.png";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
const HomeCategory = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);

const colors=["#F4DBA4","#2bcee9","#772be9","#e92b62","#2be98d"]
  return (
    <Container>
      <SubTiltle title="category" btntitle="plus..." pathText="/allcategory" />
      <Row className="my-2 d-flex justify-content-between">
        {
          loading===false?(
        category ? (
          category.slice(0,5).map((item,index) => {
            return( <CategoryCard
              key={index}
              title={item.name}
              img={item.img}
              background={colors[index]}
            />)
           })
           ) :  <h4>pas de category</h4>
          ):  <Spinner animation="border" variant="primary" />
        }

        {/* <CategoryCard title="category2 " img={dwa2} background="#F4DBA4" />
                <CategoryCard title=" category3 " img={dwa3} background="#0034FF" />
                <CategoryCard title=" category4 " img={dwa4} background="#F4DBA4" />
                <CategoryCard title=" category5 " img={dwa5} background="#F4DBA4" /> */}
      </Row>
    </Container>
  );
};

export default HomeCategory;
