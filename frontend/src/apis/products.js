import instance from './../axiosService';

export function getProducts() {
  return instance.get('/products');
}

export function getNewProducts() {
  return instance.get('/new-products');
}

export function getProductById(id) {
  return instance.get(`/products/${id}`);
}
