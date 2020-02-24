export function addProduct(name, price) {
  return {
    type: 'ADD_PRODUCT',
    payload: { name, price },
  };
}
