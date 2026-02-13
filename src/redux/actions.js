export const DELETE_CANDIDATURE = "DELETE_CANDIDATURE"
export const ADD_CANDIDATURE = "ADD_CANDIDATURE"
export const UPDATE_STATUS = "UPDATE_STATUS"
export const SET_CANDIDATURES = "SET_CANDIDATURES"


export const deleteCandidature = (id) => {
    return {
        type: DELETE_CANDIDATURE,
        payload: id
    }
}

export const addCandidature = (payload) => {
    return {
        type: ADD_CANDIDATURE,
        payload: payload
    }
}

export const updateCandidature = (payload) => {
    return {
        type: UPDATE_STATUS,
        payload: payload
    }
}
export const setCandidatures = (payload) => {
    return {
        type: SET_CANDIDATURES,
        payload: payload
    }
}