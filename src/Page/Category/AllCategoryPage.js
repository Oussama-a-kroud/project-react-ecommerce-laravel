import React, { useEffect } from "react";

import CategoryContainer from "../../Components/Category/CategoryContainer";
import Pagination from "../../Components/Utility/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategory ,getAllCategoryPage} from "../../redux/actions/categoryAction";
const AllCategoryPage = () => {
  const dispatch = useDispatch();
// first load
  useEffect(() => {
    dispatch(getAllCategory(1));
  },[]);

  
  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);
  // to get page count
  let pageCount = 4;

  const getPage=(page)=>{
    dispatch(getAllCategoryPage(page));
  }
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer  />
      
      {category && category.length > pageCount ? (
        <Pagination pageCount={Math.ceil(category.length / pageCount)} onPress={getPage} />
      ) : null}
    </div>
  );
};

export default AllCategoryPage;
