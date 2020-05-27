import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from './action_const'

import axios from 'axios'

const url = 'https://tweet-api.webdxd.com'


export const updateProfile = (params) => dispatch => {
    console.log(1231312312312321312312)
    axios.put(`${url}/profile`, params, {
        headers: {
            Authorization: `Bearer ${window.sessionStorage.getItem('web-tweet')}`
        },
    }).then(response => {
        console.log(response.data)
        dispatch({
            type: 'PROFILE_UPDATED',
            payload: response.data.profile
        })
    }).catch(err => {
        dispatch({
            type: 'PROFILE_UPDATE_FAIL'
        })
    })
}

export const login = (params) => async dispatch => {
    try {
        console.log(123123123)
        const res = await axios.post(`${url}/auth/login`, params)
        window.sessionStorage.setItem('web-tweet', res.data.token)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data.profile
        })
    } catch (error) {
        return {
            type: LOGIN_FAIL,
            payload: 'this is a test'
        }
    }
}

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT,
        payload: ''
    })
}

