import { produce } from 'immer';

const INITIAL_STATE = {
  products: [],
};

export default function products(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case 'ADD_PRODUCT': {
        draft.products.push(action.payload);
        break;
      }

      default:
        return INITIAL_STATE;
    }
  });
}
