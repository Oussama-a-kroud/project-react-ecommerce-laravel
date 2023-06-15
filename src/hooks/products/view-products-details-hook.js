import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "../../redux/actions/productsAction";
import mobile from "../../images/dwa5.png";

import { useEffect } from "react";
import { getOneCategory } from "../../redux/actions/categoryAction";

const ViewProductsDetailsHook = (prodID) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneProduct(prodID));
  }, []);

  const oneProducts = useSelector((state) => state.allproducts.oneProduct);
 
//   if (cat.name)
// console.log(cat.name)
  //to show product item
  let item = [];
try{
  if (oneProducts.data) {
    item = oneProducts.data.data;
  } else {
    item = [];
  }
}catch(e){}

  useEffect(() => {
    if(item.category)
       dispatch(getOneCategory(item.category));
  }, [item]);
// to view image galery
  let images = [];
  if (item.img) {
    images = [
      { original: `${`http://127.0.0.1:8000/products/${item.img}`}` },
      { original: `${`http://127.0.0.1:8000/products/${item.img}`}` },
      { original: `${`http://127.0.0.1:8000/products/${item.img}`}` },
    ];
  } else {
    images = [{ original: `${mobile}` }];
  }

  return [item, images];
};

export default ViewProductsDetailsHook;
