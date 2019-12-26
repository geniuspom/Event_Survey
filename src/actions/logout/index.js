//import fetch from 'isomorphic-fetch'
import { RSAA } from 'redux-api-middleware'

/*export const logoutSite = () => ({
    type: 'LOAD_LOGOUT_SUCCESS',
    payload: false
})*/

/*export const logoutSite = (user_token) => ({
    type: 'LOAD_LOGOUT_SUCCESS',
    payload: {
        status: 'unautorized',
        message: 'logout success',
        data: [],
        accessToken: '',
      }
})*/

export const logoutSite = (user_token) => ({

  [RSAA]: {
    endpoint: `http://api.ojconsultinggroup.com/api/logout`,
    method: 'GET',
    types: ['LOAD_LOGOUT_REQUEST', 'LOAD_LOGOUT_SUCCESS', 'LOAD_LOGOUT_FAILURE'],
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + user_token ,
    },
  }

})
