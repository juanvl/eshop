import { toast } from 'react-toastify';

import { produce } from 'immer';

const INITIAL_STATE = {
  products: [],
};

export default function cart(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@cart/ADD_PRODUCT': {
        const { id } = action.payload.product;
        const productInCart = draft.products.find(p => p.id === id);

        if (productInCart) {
          productInCart.amount += 1;
        } else {
          draft.products.push({ ...action.payload.product, amount: 1 });
        }

        toast.success('Adicionado ao carrinho!', {
          className: 'toastbg',
        });
        break;
      }

      case '@cart/UPDATE_AMOUNT': {
        const { productId, amount } = action.payload;

        if (amount < 1) return;

        const productInCart = draft.products.find(p => p.id === productId);

        productInCart.amount = amount;

        break;
      }

      default:
    }
  });
}
