//import fetch from 'isomorphic-fetch'
import { RSAA } from 'redux-api-middleware'

export const loadallClients = () => ({
  /*type: 'RECEIVE_CLIENTS',
  newclients: [
    {
      "id": 1,
      "name": "Company 1",
      "address": "1234 Bangkok",
      "phone": "081-222-2222"
    }, {
      "id": 2,
      "name": "Company 2",
      "address": "444 Chonburi",
      "phone": "081-444-4444"
    }, {
      "id": 3,
      "name": "Company 3",
      "address": "999 Trad",
      "phone": "081-999-9999"
    }
  ]*/

  [RSAA]: {
  endpoint: 'http://api.ojconsultinggroup.com/api/client',
  method: 'GET',
  types: ['LOAD_CLIENT_REQUEST', 'LOAD_CLIENT_SUCCESS', 'LOAD_CLIENT_FAILURE']
}

})

export const closeClient = () => ({
  type: 'CLOSE_CLIENT',
  newclients:[]
})

export const loadselectClients = (id) => ({

  [RSAA]: {
    endpoint: `http://api.ojconsultinggroup.com/api/client/${id}`,
    method: 'GET',
    types: ['LOAD_Client_SELECT_REQUEST', 'LOAD_Client_SELECT_SUCCESS', 'LOAD_Client_SELECT_FAILURE']
  }
})
