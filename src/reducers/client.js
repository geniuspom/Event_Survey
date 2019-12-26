const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case 'LOAD_CLIENT_SUCCESS':
      //return action.newclients
      return action.payload
    case 'CLOSE_CLIENT':
      return action.newclients
    default:
      return state
  }
}
