import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProducts, getAllProductsSearch } from "../../redux/actions/productsAction";
import { useParams } from "react-router-dom";

const ViewSearchProductsHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const allProducts = useSelector((state) => state.allproducts.allProducts);

  let items = [];
  try{
  if (allProducts.data) items = allProducts.data;
  
  else items = [];
  }catch(e){}
  return [items];
};

export default ViewSearchProductsHook;
