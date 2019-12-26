import { RSAA } from 'redux-api-middleware'

export const loadevent = (startDate, endDate, thismonth) => ({

  [RSAA]: {
    endpoint: `http://api.ojconsultinggroup.com/api/geteventcalendar/${startDate}/${endDate}/${thismonth}`,
    method: 'GET',
    types: ['LOAD_CALENDER_REQUEST', 'LOAD_CALENDER_SUCCESS', 'LOAD_CALENDER_FAILURE'],
  }

})

export const clearmonth = () => ({
  type: 'CLEARMONTH',
  calendar:{month: "", event: []}
})
