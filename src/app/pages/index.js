import React from 'react'
import Head from 'next/head'
import ky from 'ky-universal'

import styled from 'styled-components'

import { Box } from 'grommet'
import LoginCard from '../components/login-card'

const GradientBox = styled(Box)`
  background-image: linear-gradient( 135deg, #FAB6b7 10%, #1E2AD2 100%);
`

const Home = () => (
  <div>
    <Head />
    <GradientBox
      height='100%'
      basis='full'
      justify='center'
      align='center'
    >

      <LoginCard
        onLogin={({ email, password }) => {
          firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch((e) => {
              console.log(e)
            })
        }}
      />

    </GradientBox>
  </div>
)

export default Home
