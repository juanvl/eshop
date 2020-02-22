import { createStore } from 'redux';
import { persistStore } from 'redux-persist';

import rootReducer from './modules/rootReducer';
import persistReducers from './persistReducers';

const store = createStore(persistReducers(rootReducer));
const persistor = persistStore(store);

export { store, persistor };
