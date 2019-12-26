import { RSAA } from 'redux-api-middleware'

export const newbooking = (formdata) => ({

  [RSAA]: {
    endpoint: `http://api.ojconsultinggroup.com/api/addbooking`,
    method: 'POST',
    types: ['LOAD_ADDBOOKING_REQUEST', 'LOAD_ADDBOOKING_SUCCESS', 'LOAD_ADDBOOKING_FAILURE'],
    body: formdata,
  }

})
