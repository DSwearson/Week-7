import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import bookReducer from   '../features/book/bookSlice';
import cartReducer  from   '../features/cart/cartSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    books: bookReducer, //this value has to match
    cart: cartReducer,
    user: userReducer
  },
});
