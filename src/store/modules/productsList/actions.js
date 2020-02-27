export function addProduct(name, price) {
  return {
    type: '@productsList/ADD_PRODUCT',
    payload: { name, price },
  };
}
