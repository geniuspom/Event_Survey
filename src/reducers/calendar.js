const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case 'LOAD_CALENDER_SUCCESS':
      //return action.newclients
      return action.payload
    case 'CLEARMONTH':
      return action.newclients
    default:
      return state
  }
}
