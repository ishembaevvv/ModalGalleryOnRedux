import { CLOSE_MODAL, OPEN_MODAL } from "../actions";

const initState = {
    modal: true,
    colors: [],
}

export const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case OPEN_MODAL:
            return {...state, modal: true, colors: action.payload};
        case CLOSE_MODAL:
            return {...state, modal: false};
        default:
            return state;
    }
}