import { configureStore } from '@reduxjs/toolkit'
import checkIsLoginSlice from './features/checkIsLoginSlice'
import cartReducer from "./reducers/cartReducer";
export const store = configureStore({
  reducer: {
     isLogin:checkIsLoginSlice,
     cart:cartReducer
     // Add the generated reducer as a specific top-level slice
     // [pokemonApi.reducerPath]: pokemonApi.reducer,
     // [productApi.reducerPath]: productApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(pokemonApi.middleware,productApi.middleware),
    
 })