import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: [],
    log: false,
    userId: '',
}

export const auth = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        login: (state,action) => {
            state.user = action.payload.user
            state.userId = action.payload.userId
            state.log = true
        },
        logout: (state) => {
            state.user = {}
            state.log = false
        },
    },
})

// Action creators are generated for each case reducer function
export const { login, logout } = auth.actions

export default auth.reducer