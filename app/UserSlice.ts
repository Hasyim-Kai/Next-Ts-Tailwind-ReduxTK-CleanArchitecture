import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "./store"

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoggedIn: false,
        userInfo: false
    },
    reducers: {
        setUser(state, action) {
            state.isLoggedIn = !state.isLoggedIn
            state.userInfo = action.payload
        },
    },
    extraReducers: {

    }
})

export const { setUser } = userSlice.actions
export const selectUserState = ( state: RootState ) => state.user  // SELECTOR
export default userSlice.reducer