/* eslint immutable/no-this: 0 */
/* eslint immutable/no-let: 0 */
import React, { Component } from 'react'

import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from '@R/reducer'

const NextStore = '__NEXT_REDUX_STORE__'
const isServer = () => typeof window === 'undefined'

const initialState = process.env.STUB
  ? require('../../../fixtures/initial-state.json')
  : {}

const initStore = (state) => createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(ReduxThunk))
)

const getStore = (state = {}) => {
  if (isServer()) return initStore(state)

  if (!window[NextStore]) window[NextStore] = initStore(state)

  return window[NextStore]
}

export default (App) => {
  return class AppWithRedux extends Component {
    static async getInitialProps (appContext) {
      const store = getStore()

      appContext.ctx.store = store

      let appProps = {}
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext)
      }

      return {
        ...appProps,
        initialState: store.getState(),
      }
    }

    constructor (props) {
      super(props)
      this.store = getStore(props.initialState)
    }

    render () {
      return (
        <App
          {...this.props}
          store={this.store}
        />
      )
    }
  }
}
