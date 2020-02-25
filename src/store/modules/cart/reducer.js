import { produce } from 'immer';

const INITIAL_STATE = {
  products: [],
};

export default function cart(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case 'ADD_PRODUCT_TO_CART': {
        const { id } = action.payload.product;
        const productInCart = draft.products.find(p => p.id === id);

        if (productInCart) {
          productInCart.amount += 1;
        } else {
          draft.products.push({ ...action.payload.product, amount: 1 });
        }
        break;
      }

      default:
    }
  });
}
