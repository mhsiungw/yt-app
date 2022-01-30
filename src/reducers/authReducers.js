import { SIGN_IN, SIGN_OUT } from '../actions/types'

const INITIAL_VALUE = {
    isSignedIn: null,
    userId: null,
    userName: null,
}

export const authReducer = (state = INITIAL_VALUE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, isSignedIn: true, userId: action.payload.userId, userName: action.payload.userName }
        case SIGN_OUT:
            return { ...state, isSignedIn: false, userId: null, userName: null }
        default:
            return state
    }
}
