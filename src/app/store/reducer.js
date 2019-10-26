import { combineReducers } from 'redux'

import app from './app-reducer'
import trip from './trip-reducer'
import budget from './budget-reducer'

export default (extraReducers) => combineReducers({
  app, trip, budget, ...extraReducers
})
