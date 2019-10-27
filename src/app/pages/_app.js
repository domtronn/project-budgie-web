/* eslint immutable/no-this: 0 */
import NextApp from 'next/app'
import { Grommet } from 'grommet'
import { theme } from '@c/_theme'

import withRedux from './_app-with-redux'
import { Provider } from 'react-redux'

class App extends NextApp {
  render () {
    const { Component, store, pageProps } = this.props

    return (
      <Grommet
        theme={theme}
      >
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
        <style
          jsx
          global
        > {`
            body{ margin: 0; }
          `}
        </style>
      </Grommet>
    )
  }
}

export default withRedux(App)
