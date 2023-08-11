import { types } from "./types";


export const AppReducer = (state = {}, action) => {

    switch (action.type) {

        case types.EXAMPLE_TYPE:
            return {
                ...state,
                example: action.payload
            }
        default:
            break;
    }
}
