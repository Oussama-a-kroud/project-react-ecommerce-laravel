import {combineReducers}from 'redux'
import categoryReducer from './categoryReducer'
import productsReducer from './productsReducer'

export default combineReducers({
    allCategory:categoryReducer,
    allproducts:productsReducer
})