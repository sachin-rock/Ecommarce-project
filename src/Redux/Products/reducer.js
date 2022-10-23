import {PRODUCT_LOADING, PRODUCT_SUCCESS, PRODUCT_ERROR, CURRENT_PRODUCT_LOADING, CURRENT_PRODUCT_SUCCESS, CURRENT_PRODUCT_ERROR} from "./actionTypes"


const initState = {
    loading : false,
    error : false,
    products : [],
    currentProduct : {}
}


const productReducer = (state=initState, action) => {
    switch(action.type){
        case PRODUCT_LOADING: 
            return { ...state, loading : true }

        case PRODUCT_ERROR : 
            return {...state, loading : false, error : true}
        
        case PRODUCT_SUCCESS : 
            return {...state, loading : false, error : false, products : action.payload}

        case CURRENT_PRODUCT_LOADING: 
        return { ...state, loading : true }

        case CURRENT_PRODUCT_ERROR : 
            return {...state, loading : false, error : true}
        
        case CURRENT_PRODUCT_SUCCESS : 
            return {...state, loading : false, error : false, currentProduct : action.payload}

        
        default : 
            return state;
    }
}


export {productReducer}