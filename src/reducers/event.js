const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case 'LOAD_EVENTSELECT_SUCCESS':
      return action.payload
    case 'LOAD_ADDNEWEVENT_SUCCESS':
      return action.payload
    default:
      return state
  }
}
