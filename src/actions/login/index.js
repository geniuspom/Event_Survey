//import fetch from 'isomorphic-fetch'
import { RSAA } from 'redux-api-middleware'

/*export const loginpage = (formdata) => ({
    type: 'LOAD_LOGIN_SUCCESS',
    payload: true
})*/


export const loginpage = (formdata) => ({

  [RSAA]: {
    endpoint: `http://api.ojconsultinggroup.com/api/login`,
    method: 'POST',
    types: ['LOAD_LOGIN_REQUEST', 'LOAD_LOGIN_SUCCESS', 'LOAD_LOGIN_FAILURE'],
    body: formdata,
  }

})
