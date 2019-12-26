import { RSAA } from 'redux-api-middleware'

export const loadtranssections = (query) => ({

  [RSAA]: {
    endpoint: `http://api.ojconsultinggroup.com/api/gettranssections/${query}`,
    method: 'GET',
    types: ['LOAD_TRANSECTION_REQUEST', 'LOAD_TRANSECTION_SUCCESS', 'LOAD_TRANSECTION_FAILURE']
  }

})

export const edittranssection = (formdata) => ({

  [RSAA]: {
    endpoint: `http://api.ojconsultinggroup.com/api/edittranssections`,
    method: 'POST',
    types: ['LOAD_EDITTRANSECTION_REQUEST', 'LOAD_EDITTRANSECTION_SUCCESS', 'LOAD_EDITTRANSECTION_FAILURE'],
    body: formdata,
  }

})

export const cleartranssection = () => ({
  type: 'CLEARTRANSECTION',
  payload:{
    data_transections: [],
    query: [],
    status: "",
  }

})
