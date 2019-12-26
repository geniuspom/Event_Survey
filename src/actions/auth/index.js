//import fetch from 'isomorphic-fetch'
//import axios from 'axios';
import { RSAA } from 'redux-api-middleware'

/*export const authcheck = (user_token) => ({
    type: 'LOAD_AUTH_SUCCESS',
    payload: {
        status: 'auth error',
        message: 'can\'t autehnticated'
      }
})*/


export const authcheck = (user_token) => ({

  [RSAA]: {
    endpoint: `http://api.ojconsultinggroup.com/api/checkauth`,
    method: 'GET',
    types: ['LOAD_AUTH_REQUEST', 'LOAD_AUTH_SUCCESS', 'LOAD_AUTH_FAILURE'],
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + user_token ,
    },
  }

})

/*export function authcheck(user_token) {
  let url = `http://api.ojconsultinggroup.com/api/checkauth`
  return function (dispatch) {

    const options = {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + user_token },
      url,
    }

    axios(options)
    .then((response) => dispatch({
      type: 'LOAD_AUTH_SUCCESS',
      payload: response.data
    })).catch((response) => dispatch({
      type: 'LOAD_AUTH_FAILURE',
      error: response.error
    }))


  }
}*/
