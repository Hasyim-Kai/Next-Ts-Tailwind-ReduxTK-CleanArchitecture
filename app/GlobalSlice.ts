import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "./store"

const globalSlice = createSlice({
    name: 'global',
    initialState: {
        isModalOpen: false,
        isAlertOpen: false,
        isLoading: false,
        isError: false,
        errorMessage: ''
    },
    reducers: {
        toggleModal(state) {
            state.isModalOpen = !state.isModalOpen
        },
        toggleAlert(state) {
            state.isAlertOpen = !state.isAlertOpen
        },
        toggleLoading(state) {
            state.isLoading = !state.isLoading
        },
        toggleError(state, action) {
            state.isError = !state.isError
            state.errorMessage = action.payload
        },
    },
})

export const { toggleModal, toggleAlert, toggleLoading, toggleError } = globalSlice.actions
export const selectGlobalState = (state: RootState) => state.globalState  // SELECTOR
export default globalSlice.reducer