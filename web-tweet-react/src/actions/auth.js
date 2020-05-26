import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from './action_const'

import axios from 'axios'

const url = 'https://tweet-api.webdxd.com'



export const login = (params) => async dispatch => {
    try {
        const res = await axios.post(`${url}/auth/login`, params)
        window.sessionStorage.setItem('web-tweet', res.data.token)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: 'this is a test'
        })
    } catch (error) {
        return {
            type: LOGIN_FAIL,
            payload: 'this is a test'
        }
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
        payload: ''
    }
}