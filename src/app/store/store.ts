import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { predictionReducer } from 'pages';
import { tarotApi } from 'shared/api';

export const reducers = combineReducers({
  [tarotApi.reducerPath]: tarotApi.reducer,
  prediction: predictionReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [tarotApi.reducerPath],
};

const persistReducers = persistReducer(persistConfig, reducers);
export const store = configureStore({
  reducer: persistReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(tarotApi.middleware),
});

export const persistor = persistStore(store);
