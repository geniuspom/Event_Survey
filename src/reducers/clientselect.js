const initialState = {
  contact_data :[],
  client_data : [],
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'LOAD_Client_SELECT_SUCCESS':
      return action.payload
    default:
      return state
  }
}
