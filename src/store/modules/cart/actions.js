export function addProduct(product) {
  return {
    type: '@cart/ADD_PRODUCT',
    payload: { product },
  };
}

export function updateAmount(productId, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    payload: { productId, amount },
  };
}
