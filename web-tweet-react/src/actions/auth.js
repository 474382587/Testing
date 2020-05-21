import {
    LOGIN,
    LOGOUT
} from './action_const'

const url = 'http://localhost:3001/login'
const formData = new FormData();
formData.append('username', '123');
formData.append('password', '123');
export const login = (params) => {
    // fetch(url, {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         username: '123',
    //         password: '123'
    //     })
    // }).then(res => {
    //     console.log(res)
    // }).catch(err => {
    //     console.log(err)
    // })
    return {
        type: LOGIN,
        payload: 'this is a test'
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
        payload: ''
    }
}