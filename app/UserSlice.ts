import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "./store"

// export const checkUserExistance = createAsyncThunk('user/checkUserExistance', async (email: string) => {
//     return await getSingleUserFirebase(email)
// })

const initState: UserSliceType = {
    isLoggedIn: false,
    isExist: false,
    userInfo: { token: '', email: '', name: '', photoUrl: '', },
    isLoading: false,
    errorMessage: '',
    patientEmail: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState: initState,
    reducers: {
        getUserFromLS(state) {
            state.isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn') || `false`);
            state.isExist = JSON.parse(localStorage.getItem('isExist') || `false`);
            state.userInfo = JSON.parse(localStorage.getItem('user') || '{}');
        },
        setUser(state, action) {
            state.isLoggedIn = true
            state.userInfo = {
                token: action.payload.accessToken,
                email: action.payload.email,
                name: action.payload.displayName,
                photoUrl: action.payload.photoURL,
            }
        },
        logUserOut(state) {
            state.isExist = false
            state.isLoggedIn = false
            state.userInfo = { token: '', email: '', name: '', photoUrl: '', }
        },
    },
    extraReducers: builder => {
        // CHECK USER EXISTANCE
        // builder.addCase(checkUserExistance.pending, state => {
        //     state.isLoading = true
        //     state.errorMessage = ''
        // })
        // builder.addCase(checkUserExistance.fulfilled, (state, action) => {
        //     state.isLoading = false
        //     state.isLoggedIn = true
        //     state.isExist = !action.payload
        //     localStorage.setItem('isExist', JSON.stringify(!action.payload));
        // })
        // builder.addCase(checkUserExistance.rejected, (state, action) => {
        //     state.isLoading = false
        //     state.errorMessage = action.error.message || 'Something went wrong'
        // })
    }
})

export const { getUserFromLS, setUser, logUserOut } = userSlice.actions
export const selectUserState = (state: RootState) => state.user  // SELECTOR
export default userSlice.reducer