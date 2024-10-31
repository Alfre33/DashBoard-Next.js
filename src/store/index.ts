import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './counter/counterSlice'
import FavoritesReducer from './favorites/favoritesSlice'
import { useDispatch, useSelector } from 'react-redux'


export const store = configureStore({
  reducer: {
    counter:CounterReducer,
    favorites:FavoritesReducer
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()