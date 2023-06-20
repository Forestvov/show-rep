import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ICommercialItem, IState } from './commercialReducer.interface'

const initialState: IState = {
	openPopup: false,
	commercial: [],
	commercialTotal: 0,
}

export const slice = createSlice({
	name: 'commercial',
	initialState,
	reducers: {
		togglePopup(state) {
			state.openPopup = !state.openPopup
		},
		addToCommercial(state, action: PayloadAction<{ commercial: ICommercialItem }>) {
			state.commercial.push(action.payload.commercial)
			state.commercialTotal += action.payload.commercial.weight
		},
	},
})

export const { reducer: commercialReducer, actions: commercialActions } = slice
