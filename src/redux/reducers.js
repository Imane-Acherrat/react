import { ADD_CANDIDATURE, DELETE_CANDIDATURE, SET_CANDIDATURES, UPDATE_STATUS } from "./actions"

const reducer = (state = [], action) => {
    switch (action.type) {
        case SET_CANDIDATURES:
            return action.payload
        case ADD_CANDIDATURE:
            return [...state, action.payload]
        case DELETE_CANDIDATURE:
            return state.filter(el => el.id !== action.payload)
        case UPDATE_STATUS:
            return state.map(el => el.id === action.payload.id ? {
                ...el, status: action.payload.status
            } : el)
        default:
            return state
    }
}

export default reducer