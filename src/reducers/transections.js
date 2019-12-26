const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case 'LOAD_TRANSECTION_SUCCESS':
      return action.payload
    case 'LOAD_FIRSTTRANSECTION_SUCCESS':
      return action.payload
    case 'CLEARTRANSECTION':
      return action.payload
    default:
      return state
  }
}
