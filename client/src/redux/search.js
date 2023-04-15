import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    destination: '',
    date:{},
    options: {
        adult: 0,
        children: 0,
        room: 0
    }
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchAction: (state, action) => {
            // console.log(action.payload);
            state.destination = action.payload.destination
            state.date = action.payload.date
            state.options = action.payload.options
        },
    },
})

// Action creators are generated for each case reducer function
export const { searchAction } = searchSlice.actions

export default searchSlice.reducer