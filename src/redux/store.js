import { configureStore } from '@reduxjs/toolkit'
import categoriSlice from './categoriSlice'
import productSlice from './productSlice'
import cartSlice from './cartSlice'

export const store = configureStore({
  reducer: {
    categories : categoriSlice,
    products: productSlice,
    carts: cartSlice,
  },
})