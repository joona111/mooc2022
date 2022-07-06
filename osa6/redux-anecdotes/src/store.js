import reducer from './reducers/anecdoteReducer'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({reducer,})
