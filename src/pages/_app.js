/* eslint immutable/no-this: 0 */
import NextApp from 'next/app'
import { Grommet } from 'grommet'
import { grommet } from 'grommet/themes'

import withRedux from './_app-with-redux'
import { Provider } from 'react-redux'

class App extends NextApp {
  render () {
    const { Component, store, pageProps } = this.props

    return (
      <Grommet
        full
        theme={grommet}
      >
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Grommet>
    )
  }
}

export default withRedux(App)
