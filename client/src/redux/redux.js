import { configureStore } from '@reduxjs/toolkit'
import auth from './login'

export const store = configureStore({
  reducer: {
    auth: auth,
  },
})