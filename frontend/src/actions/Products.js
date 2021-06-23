import * as ProductTypes from './../constants/Products';

export const FetchProducts = () => {
  return {
    type: ProductTypes.FETCH_PRODUCTS,
  };
};

export const FetchProductsSuccess = (data) => {
  return {
    type: ProductTypes.FETCH_PRODUCTS_SUCCESS,
    payload: {
      data,
    },
  };
};

export const FetchProductsFailed = (error) => {
  return {
    type: ProductTypes.FETCH_PRODUCTS_FAILED,
    payload: {
      error,
    },
  };
};

export const FetchBestProducts = (data) => {
  return {
    type: ProductTypes.FETCH_BEST_PRODUCTS,
    payload: {
      data,
    },
  };
};
