import { configureStore } from '@reduxjs/toolkit'
import { moviesApi } from '../api/moviesApi'
import couterSlice from '../redux/Counter/reducer'

export default configureStore({
  reducer: {
    counter: couterSlice,
    [moviesApi.reducerPath]: moviesApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware),
})