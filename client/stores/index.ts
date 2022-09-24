import  loaderSlice  from '../slice/loaderSlice'
import { configureStore } from '@reduxjs/toolkit'
import  errorSlice  from '../slice/errorSlice'

export const store = configureStore({
  reducer: {
    loader: loaderSlice,
    error: errorSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch