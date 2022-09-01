import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import globalStateReducer from './GlobalSlice'
import userStateReducer from './UserSlice'

const store = configureStore({
  reducer: {
    globalState: globalStateReducer,
    user: userStateReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;

export default store