export function addProductToList(name, price) {
  return {
    type: 'ADD_PRODUCT_TO_LIST',
    payload: { name, price },
  };
}
