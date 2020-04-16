const initialState = {
    button_pressed: "no"
  }


export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "CLICK":
            if (state.button_pressed === "yes") { 
                return {...initialState, button_pressed: "no"}
            } 
            else {
                return {...initialState, button_pressed: "yes"}
            }   
        default:
            return state
    }
}