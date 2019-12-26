const initialState = {
  issue_topic: {
      filetype : [],
      url : [],
      id : [],
      subject : [],
      email : [],
      category : [],
      severity_levels : [],
      message : [],
      ticket : [],
      status : [],
      created_at : [],
      updated_at : [],
  },
  issue_response: [],
  issue_status: ['Intitial'],
}

export default (state = initialState,action) => {
    switch (action.type) {
      case "LOAD_GetIssue_SUCCESS":
        return action.payload
      default:
      return state;
    }

}
