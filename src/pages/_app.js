/* eslint-disable */
import NextApp from 'next/app'

import withRedux from './_app-with-redux'
import { Provider } from 'react-redux'

class App extends NextApp {
  render () {
    const { Component, store, pageProps } = this.props

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default withRedux(App)
