import { GET_ERROR,CREATE_PRODUCTS,GET_ALL_PRODUCTS,GET_PRODUCT_DETAILS,DELETE_PRODUCT,UPDATE_PRODUCT} from "../type";
import {  useInsertDataWithImage } from "../../hooks/useInsertData";
import useGetData from "../../hooks/useGetData";
import axios from "axios";
// create product 
export const createProduct =(formData)=> async (dispatch) => {
  try {
    const response=await useInsertDataWithImage(`/api/addProduct`,formData)

    // console.log(response)
    dispatch({
      type: CREATE_PRODUCTS,
      payload: response,
    })
  } catch (e) {
    dispatch({
        type: GET_ERROR,
        payload: 'error'+e,
      })
  }
};
export const updateProduct =(id,formData)=> async (dispatch) => {
  try {
    const response=await axios.post("http://127.0.0.1:8000/api/updateProduct/" + id,formData)

    // console.log(response)
    dispatch({
      type: UPDATE_PRODUCT,
      payload: response,
    })
  } catch (e) {
    dispatch({
        type: GET_ERROR,
        payload: 'error'+e,
      })
  }
};
// get all product
export const getAllProducts =()=> async (dispatch) => {
  try {
    const response=await useGetData('/api/allProduct')

    // console.log(response)
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: response,
      loading:true
    })
  } catch (e) {
    dispatch({
        type: GET_ERROR,
        payload: 'error'+e,
      })
  }
};


// get one product with id
export const getOneProduct =(id)=> async (dispatch) => {
  try {
    const response=await axios.post("http://127.0.0.1:8000/api/products/" + id)


    dispatch({
      type: GET_PRODUCT_DETAILS,
      payload: response,
      loading:true
    })
  } catch (e) {
    dispatch({
        type: GET_ERROR,
        payload: 'error'+e,
      })
  }
};
// delete one product with id
export const deleteOneProduct =(id)=> async (dispatch) => {
  try {
    const response=await axios.delete("http://127.0.0.1:8000/api/deleteProduct/" + id)


    dispatch({
      type: DELETE_PRODUCT,
      payload: response,
      loading:true
    })
  } catch (e) {
    dispatch({
        type: GET_ERROR,
        payload: 'error'+e,
      })
  }
};