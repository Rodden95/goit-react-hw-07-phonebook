import { configureStore } from '@reduxjs/toolkit'
import phonebookReducer from './phonebookSlice';
// import { setupListeners } from '@reduxjs/toolkit/query'
import { phonebookApi } from '../services/phonebookApi'
// export const store = configureStore({
//   // reducer: {
//   //   todos: todosReducer,
//   // },
//   reducer: {
//     contacts: phonebookReducer
//   }
// })



export const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
    [phonebookApi.reducerPath]: phonebookApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    [...getDefaultMiddleware(), phonebookApi.middleware],
})