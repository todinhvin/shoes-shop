import * as ProductTypes from './../constants/Products';

var initialState = {
  productList: [],
  filterWidth: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductTypes.FETCH_PRODUCTS:
      return {
        ...state,
        productList: [],
      };
    case ProductTypes.FETCH_PRODUCTS_SUCCESS:
      state.productList = action.payload.data;
      return {
        ...state,
        productList: action.payload.data,
      };
    case ProductTypes.FETCH_PRODUCTS_FAILED:
      let { error } = action.payload;
      console.log(error);
      return state;
    default:
      return state;
  }
};

export default productsReducer;
