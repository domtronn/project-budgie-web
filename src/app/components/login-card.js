import { useState } from 'react'
import * as Icons from 'grommet-icons'
import { Box, Button, Form, Text, TextInput, FormField } from 'grommet'
import { _ } from 'param.macro'

const M = {
  LOGIN: 'aad27a54',
  CREATE: '3c9d8ea0',
}

const E = {
  EMAIL: 'id55b7595f',
  PASSWORD: 'id9299d078'
}

const ModeControl = ({ textLabel, textClick, btnLabel }) => (
  <>
    <Button
      fill='horizontal'
      margin={{ top: 'small' }}
      width='100%'
      type='submit'
      label={btnLabel}
      primary
    />
    <Button
      plain
      fill='horizontal'
      margin={{ top: 'medium' }}
      hoverIndicator='light-1'
      onClick={textClick}
    >
      <Box
        pad='small'
        align='center'
      >
        <Text>{textLabel}</Text>
      </Box>
    </Button>
  </>
)

const PasswordInput = ({ name, value, onChange }) => {
  const [reveal, setReveal] = useState(false)

  return (
    <Box
      direction='row'
    >
      <TextInput
        plain
        id={E.PASSWORD}
        autoComplete='on'
        type={reveal ? 'text' : 'password'}
        name={name}
        value={value}
        onChange={onChange}
      />

      <Button
        icon={reveal
          ? <Icons.FormView size='medium' />
          : <Icons.Hide size='medium' />}
        onClick={~setReveal(!reveal)}
      />
    </Box>

  )
}

const LoginCard = ({ onLogin, onRegister }) => {
  const [mode, setMode] = useState(M.LOGIN)
  const onSubmit = _?.value
        |> mode === M.LOGIN
    ? onLogin
    : onRegister

  return (
    <Box
      round
      background='white'
      pad='large'
      margin='large'
      width='medium'
    >
      <Form
        autoComplete='on'
        onSubmit={onSubmit}
      >
        <FormField
          id={E.EMAIL}
          label='Email'
          autoComplete='on'
          type='email'
          name='email'
          required
        />
        <FormField
          htmlFor={E.PASSWORD}
          name='password'
          label='Password'
          component={PasswordInput}
        />

        <If condition={mode === M.LOGIN}>
          <ModeControl
            btnLabel='Submit'
            textLabel='Or click here to register'
            textClick={~setMode(M.CREATE)}
          />
        </If>

        <If condition={mode === M.CREATE}>
          <ModeControl
            btnLabel='Register'
            textLabel='Or click here to login'
            textClick={~setMode(M.LOGIN)}
          />
        </If>

      </Form>
    </Box>
  )
}

export default LoginCard
