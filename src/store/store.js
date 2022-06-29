import { configureStore } from '@reduxjs/toolkit'
import { patenteSlice } from './slices/patentes/patenteSlice'

export const store = configureStore({
  reducer: {
      patentes: patenteSlice.reducer,
  },
})