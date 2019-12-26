const initialState = {
  data: [],
  error: [],
  message: [],
  status: [],
}

export default (state = initialState,action) => {
    switch (action.type) {
      case "New_Register_SUCCESS":
        return action.payload
      case "New_Register_FAILURE":
        return {
        ...state,
          data: [],
          error: [],
          message: 'Error, Please Contact admin.',
          status: 'error',
        }
      default:
      return state;
    }

}
