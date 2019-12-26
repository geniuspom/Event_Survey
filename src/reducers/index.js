import { combineReducers } from 'redux'
import loginstatus from './loginstatus'
import client from './client'
import clientselect from './clientselect'
import calendar from './calendar'
import eventselect from './event'
import booking from './booking'
import transections from './transections'
import transectionsupdatestatus from './transectionsupdatestatus'
import apphistory from './apphistory'
import issue from './issue'
import issuedata from './issuedata'
import appversions from './appversions'
import register from './register'


export default combineReducers({
  loginstatus,client,clientselect,calendar,eventselect,booking, transections,
  transectionsupdatestatus, apphistory, issue, issuedata, appversions, register,
})
