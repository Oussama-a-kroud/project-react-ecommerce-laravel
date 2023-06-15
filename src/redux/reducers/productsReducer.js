import { CREATE_PRODUCTS ,DELETE_PRODUCT,GET_ALL_PRODUCTS,GET_ERROR, GET_PRODUCT_DETAILS, UPDATE_PRODUCT} from "../type";

const initial = {
  products: [],
  allProducts:[],
  loading: true,
  oneProduct:[],
  deleteProduct:[],
  updatedata:[]
};

const productsReducer = (state = initial, action) => {
  switch (action.type) {
    case CREATE_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      }
      case GET_PRODUCT_DETAILS:
      return {
        oneProduct: action.payload,
        loading: false,
      }
      case DELETE_PRODUCT:
        return {
        ...state,
          deleteProduct: action.payload,
          loading: false,
        }
      case GET_ALL_PRODUCTS:
        return {
          ...state,
          allProducts: action.payload,
          loading: false,
        }
        case UPDATE_PRODUCT:
        return {
          ...state,
          updatedata: action.payload,
          loading: false,
        }
      
      case GET_ERROR:return{
        loading:true,
        products:action.payload,

      }
    default:
      return state;
  }
};
export default productsReducer;
