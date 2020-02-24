import { produce } from 'immer';

const INITIAL_STATE = {
  products: [],
};

export default function cart(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case 'ADD_PRODUCT_TO_CART': {
        draft.products.push(action.payload.product);
        break;
      }

      default:
    }
  });
}
