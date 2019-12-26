const initialState = {
  versions: 'V.1.1 Ref. 01',
}

export default (state = initialState,action) => {
    switch (action.type) {
      case "APP_VERSIONS":
        return action.payload
      default:
      return state;
    }

}
