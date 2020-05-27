import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from '../actions/action_const'
const initState = {
    authorized: false,
    profile: null
}


function auth(state = initState, action) {
    const { type, payload } = action
    switch (type) {
        case LOGIN_SUCCESS:
        case 'PROFILE_UPDATED':
            console.log('Reducers!!!!!')
            return {
                ...state,
                authorized: true,
                profile: payload
            }
        case LOGOUT: 
            return {
                ...state,
                profile: null,
                authorized: false
            }
        default:
            return state
    }
}

export default auth