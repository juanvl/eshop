import { produce } from 'immer';

const INITIAL_STATE = {
  products: [],
};

export default function productsList(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case 'ADD_PRODUCT_TO_LIST': {
        draft.products.push({ id: Math.random(), ...action.payload });
        break;
      }

      default:
        return INITIAL_STATE;
    }
  });
}
