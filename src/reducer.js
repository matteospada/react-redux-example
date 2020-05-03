import { createSlice } from '@reduxjs/toolkit'


const slice = createSlice({
    name: 'flag',
    initialState: { button_pressed: "no" },
    reducers: {
        click: (state) => {
            if (state.button_pressed === "yes") { state.button_pressed = "no" }
            else { state.button_pressed = "yes" }
            return state
        }
    }
})


export default slice