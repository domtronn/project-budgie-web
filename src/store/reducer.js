import { combineReducers } from 'redux'
import app from './app-reducer'
import trip from './trip-reducer'

export default combineReducers({
  app, trip
})
