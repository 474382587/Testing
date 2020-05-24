export const user = {
  state: {
    token: '',
    profile: {}
  },
  reducers: {
    updateToken(state, payload) { // payload should be a string of token
      return {
        ...state,
        token: payload
      }
    },
    updateProfile(state, payload) { // payload should be a profile object
      return {
        ...state,
        profile: payload
      }
    }
  },
  effects: (dispatch) => ({
    async login(state, payload) {
      try {
          const {
              token,
          } = await axios.post(`${baseUrl}/auth/login`, payload)
          dispatch.user.updateToken(state, token)
      } catch (error) {
        dispatch(() => {
            return {
                ...state,
                error: true
            }
        })
      }
        
      dispatch.count.increment(payload)
    }
  }),
}