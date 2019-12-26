import { RSAA } from 'redux-api-middleware'

export const SubmitIssue = (formdata) => ({

  [RSAA]: {
    endpoint: `http://api.yournextu.com/api/addissue`,
    method: 'POST',
    types: ['LOAD_NewIssue_REQUEST', 'LOAD_NewIssue_SUCCESS', 'LOAD_NewIssue_FAILURE'],
    body: formdata,
  }

})

export const GetIssue = (issue_id) => ({

  [RSAA]: {
    endpoint: `http://api.yournextu.com/api/viewissue/${issue_id}`,
    method: 'GET',
    types: ['LOAD_GetIssue_REQUEST', 'LOAD_GetIssue_SUCCESS', 'LOAD_GetIssue_FAILURE'],
  }

})

export const SubmitReply = (formdata) => ({

  [RSAA]: {
    endpoint: `http://api.yournextu.com/api/replyissue`,
    method: 'POST',
    types: ['LOAD_ReplyIssue_REQUEST', 'LOAD_ReplyIssue_SUCCESS', 'LOAD_ReplyIssue_FAILURE'],
    body: formdata,
  }

})

export const TestUpload = (formdata) => ({

  [RSAA]: {
    endpoint: `http://api.yournextu.com/api/testmultiupload`,
    method: 'POST',
    types: ['LOAD_TestMulti_REQUEST', 'LOAD_TestMulti_SUCCESS', 'LOAD_TestMulti_FAILURE'],
    body: formdata,
  }

})
