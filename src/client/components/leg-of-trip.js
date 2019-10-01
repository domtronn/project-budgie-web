import { useState } from 'react'

import { Text, TextInput, Select } from 'grommet'
import StyledFormField from '@c/styled-form-field'

import { random } from '@u/arr'
import sw from '@u/switch'

import { it, _ } from 'param.macro'
import pluralize from 'pluralize'

export default ({ key, copy, items = [], location, setLocation, days, setDays }) => {
  const [placeholder] = useState(random(items))
  const [options, setOptions] = useState(items)

  return (
    <>
      <Text>
        {copy}
      </Text>

      <StyledFormField
        width={`${Math.max(150, location?.name?.length * 15)}px`}
        margin={{ horizontal: 'small' }}
        htmlFor={`loc-input-${key}`}
      >
        <Select
          align='center'
          id={`loc-input-${key}`}
          size='medium'
          labelKey='name'
          options={options}

          value={location?.name}
          placeholder={placeholder?.country}

          onChange={setLocation(_.option)}
          onClose={~setOptions(items)}
          onSearch={i => setOptions(
            items.filter(
              it.name.toLowerCase().includes(i.toLowerCase())
            )
          )}
        />
      </StyledFormField>

      <Text>for</Text>
      <StyledFormField
        width={sw({
          1: '40px;',
          2: '60px;',
          default: '120px;'
        })(`${days}`?.length)}
        htmlFor={`dur-input-${key}`}
      >
        <TextInput
          align='center'
          size='medium'
          id={`dur-input-${key}`}
          placeholder='1'
          value={days}
          onChange={setDays(+_.target.value || 0)}
        />
      </StyledFormField>
      <Text>{pluralize('days', +days)}</Text>
    </>
  )
}
