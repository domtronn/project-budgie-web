import { combineReducers } from 'redux'
import app from './app-reducer'
import trip from './trip-reducer'
import { firestoreReducer } from 'redux-firestore'

export default combineReducers({
  firestore: firestoreReducer, app, trip
})
