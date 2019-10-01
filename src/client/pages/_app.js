/* eslint immutable/no-this: 0 */
import NextApp from 'next/app'
import { Grommet } from 'grommet'
import { theme } from './_theme'

import withRedux from './_app-with-redux'
import { Provider } from 'react-redux'

class App extends NextApp {
  render () {
    const { Component, store, pageProps } = this.props

    return (
      <Grommet
        full
        theme={theme}
      >
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Grommet>
    )
  }
}

export default withRedux(App)
