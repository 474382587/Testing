import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from '../actions/action_const'
const initState = {
    authorized: false
}


function auth(state = initState, action) {
    const { type, payload } = action
    switch (type) {
        case LOGIN_SUCCESS:
            console.log('Reducers!!!!!')
            return {
                ...state,
                authorized: true
            }
        default:
            return state
    }
}

export default auth