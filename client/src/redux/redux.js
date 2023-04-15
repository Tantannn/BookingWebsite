import { configureStore } from '@reduxjs/toolkit'
import auth from './login'
import searchSlice from './search'

export const store = configureStore({
  reducer: {
    auth: auth, searchSlice
  },
})