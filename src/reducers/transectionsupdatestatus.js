const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case 'LOAD_EDITTRANSECTION_SUCCESS':
      return action.payload
    default:
      return state
  }
}
