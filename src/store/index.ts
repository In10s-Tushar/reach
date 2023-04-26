import { Action, ThunkAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import mainSlice from "./slices/mainSlice";

const persistConfig = {
  key: 'root',
  storage,
  transforms: [
    encryptTransform({
      secretKey: 'kucgjekwckcugecuweceftce',
      onError: function (error: Error) { }
    })
  ]
}

const rootReducer = combineReducers({
  main: mainSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;