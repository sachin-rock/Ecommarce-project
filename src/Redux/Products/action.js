import {PRODUCT_LOADING, PRODUCT_SUCCESS, PRODUCT_ERROR, CURRENT_PRODUCT_LOADING, CURRENT_PRODUCT_SUCCESS, CURRENT_PRODUCT_ERROR} from "./actionTypes"


const handleLoading = () => ({
    type : PRODUCT_LOADING
})


const handleError = () => ({
    type : PRODUCT_ERROR
})


const handleSuccess = (payload)  => ({
    type : PRODUCT_SUCCESS,
    payload
})

const getData = () => (dispatch) => {
    dispatch(handleLoading())
    fetch("http://localhost:8000/products")
    .then((res) => res.json())
    .then((res) => dispatch(handleSuccess(res)))
    .catch(() => dispatch(handleError()))
}

const handleCurrentProductLoading = () => ({
    type : CURRENT_PRODUCT_LOADING
})


const handleCurrentProductError = () => ({
    type : CURRENT_PRODUCT_ERROR
})


const handleCurrentProductSuccess = (payload)  => ({
    type : CURRENT_PRODUCT_SUCCESS,
    payload
})

const getCurrentProductData = (id) => (dispatch) => {
    dispatch(handleCurrentProductLoading())
    fetch(`http://localhost:8000/products/${id}`)
    .then((res) => res.json())
    .then((res) => dispatch(handleCurrentProductSuccess(res)))
    .catch(() => dispatch(handleCurrentProductError()))
}


export {getData, getCurrentProductData}