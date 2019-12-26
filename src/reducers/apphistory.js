const initialState = {
  url_path: []
}

export default (state = initialState,action) => {
    switch (action.type) {
      case "UPDATE_HISTORY":
        return action.payload
      default:
      return state;
    }

}
