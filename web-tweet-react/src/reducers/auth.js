// import LOGIN from '../actions/actions'

const initState = {
    authorized: false
}


function auth(state = initState, action) {
    const { type, payload } = action
    switch (type) {
        case 'LOGIN':
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