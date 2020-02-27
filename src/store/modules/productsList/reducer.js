import { toast } from 'react-toastify';

import { produce } from 'immer';

const INITIAL_STATE = {
  products: [],
};

export default function productsList(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@productsList/ADD_PRODUCT': {
        draft.products.push({ id: Math.random(), ...action.payload });

        toast.success('Adicionado com sucesso!', {
          className: 'toastbg',
        });
        break;
      }

      default:
    }
  });
}
