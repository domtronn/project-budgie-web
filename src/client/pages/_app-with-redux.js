/* eslint immutable/no-this: 0 */
/* eslint immutable/no-let: 0 */
import React, { Component } from 'react'

import { createStore, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from '../store/reducer'

import { reduxFirestore } from 'redux-firestore'

import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDNyck6jDf4UmScagxFSE-4QjBHIXEScR0",
  authDomain: "project-budgie.firebaseapp.com",
  databaseURL: "https://project-budgie.firebaseio.com",
  projectId: "project-budgie",
  storageBucket: "project-budgie.appspot.com",
  messagingSenderId: "785786802795",
  appId: "1:785786802795:web:11f195a6e8549fbd46172e"
}

const rfConfig = {}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
  firebase.firestore().settings({
    cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
  })

  firebase.firestore().enablePersistence()
}

const NextStore = '__NEXT_REDUX_STORE__'
const isServer = () => typeof window === 'undefined'

const createStoreWithFirebase = compose(
  reduxFirestore(firebase, rfConfig)
)(createStore)

const initialState = {}

const initStore = (state) => createStoreWithFirebase(
  reducer, initialState, composeWithDevTools(applyMiddleware(ReduxThunk))
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
