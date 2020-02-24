import { combineReducers } from 'redux';

import cart from './cart/reducer';
import productsList from './productsList/reducer';

export default combineReducers({ cart, productsList });
