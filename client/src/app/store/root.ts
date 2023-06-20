import { configureStore } from '@reduxjs/toolkit'
import { commercialReducer } from 'app/store/slices/commercial/commercialReducer'

export const store = configureStore({
	devTools: true,
	reducer: {
		commercial: commercialReducer,
	},
})
