const initialState = {
  data: {
    accessToken: [],
    role: [],
  },
  error: [],
  message: [],
  status: "Unauthenticated",
}

export default (state = initialState,action) => {
    switch (action.type) {
      case "LOAD_LOGIN_SUCCESS":
        return action.payload
      case "LOAD_LOGOUT_SUCCESS":
        return action.payload
      case "LOAD_AUTH_SUCCESS":
        return {
        ...state,
          status: action.payload.status,
          message: action.payload.message
        }
      default:
      return state;
    }

}
