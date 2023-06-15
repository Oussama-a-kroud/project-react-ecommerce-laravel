import { GET_ALL_CATEGORY ,GET_ERROR,CREATE_CATEGORY,GET_ONE_CATEGORY} from "../type";
import useGetData from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";
// get all category
export const getAllCategory =(limit)=> async (dispatch) => {
  try {
    const response=await useGetData(`/api/allCategory?limit=${limit}`)

    // console.log(response)
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: response,
    })
  } catch (e) {
    dispatch({
        type: GET_ERROR,
        payload: 'error'+e,
      })
  }
};
// get one category
export const getOneCategory =(id)=> async (dispatch) => {
  try {
    const response=await useGetData("api/category/"+id)

    // console.log(response)
    dispatch({
      type: GET_ONE_CATEGORY,
      payload: response,
    })
  } catch (e) {
    dispatch({
        type: GET_ERROR,
        payload: 'error'+e,
      })
  }
};

export const getAllCategoryPage =(page)=> async (dispatch) => {
  try {
    const response=await useGetData(`/api/allCategory?limit=4&page=${page}`)
    // console.log(response)
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: response,
    })
  } catch (e) {
    dispatch({
        type: GET_ERROR,
        payload: 'error'+e,
      })
  }
};


export const createCategory =(FormData)=> async (dispatch) => {
  try {
    const response=await useInsertDataWithImage(`/api/addCategory`,FormData)
    dispatch({
      type: CREATE_CATEGORY,
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
