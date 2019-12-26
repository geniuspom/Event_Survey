import { RSAA } from 'redux-api-middleware'

export const loadeventselect = (event_id) => ({

  [RSAA]: {
    endpoint: `http://api.ojconsultinggroup.com/api/geteventselect/${event_id}`,
    method: 'GET',
    types: ['LOAD_EVENTSELECT_REQUEST', 'LOAD_EVENTSELECT_SUCCESS', 'LOAD_EVENTSELECT_FAILURE']
  }

})

export const newevent = (formdata) => ({

  [RSAA]: {
    endpoint: `http://api.ojconsultinggroup.com/api/newbookingevent`,
    method: 'POST',
    types: ['LOAD_ADDNEWEVENT_REQUEST', 'LOAD_ADDNEWEVENT_SUCCESS', 'LOAD_ADDNEWEVENT_FAILURE'],
    body: formdata,
  }

})
