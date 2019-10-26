import React from 'react'
import Head from 'next/head'
import ky from 'ky-universal'

import styled from 'styled-components'

import { Box } from 'grommet'
import LoginCard from '../components/login-card'

import { auth, authConfig } from '@fire/'
import { StyledFirebaseAuth } from 'react-firebaseui'

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
        onLogin={({ value }) => {
          auth
            .signInWithEmailAndPassword(value.email, value.password)
            .catch((e) => {
              console.log(e)
            })
        }}
      />

      <Box
        round
        background='white'
        pad='large'
        margin='large'
        width='medium'
      >
        <StyledFirebaseAuth
          uiConfig={authConfig}
          firebaseAuth={auth}
        />
      </Box>

    </GradientBox>
  </div>
)

export default Home
