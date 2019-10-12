import { useState } from 'react'

import { Text, TextInput, Select } from 'grommet'
import StyledFormField from '@c/styled-form-field'

import { random } from '@u/arr'
import sw from '@u/switch'

import { it, _ } from 'param.macro'
import pluralize from 'pluralize'

export default ({ key, copy, items = [], trip, setLocation, setDays }) => {
  const [options, setOptions] = useState(items)
  const placeholder = random(options)

  return (
    <>
      <Text>
        {copy}
      </Text>

      <StyledFormField
        width={`${Math.max(150, trip?.location?.country?.length * 15)}px`}
        margin={{ horizontal: 'small' }}
        htmlFor={`loc-input-${key}`}
      >
        <Select
          align='center'
          id={`loc-input-${key}`}
          size='medium'
          labelKey='country'
          options={options}

          value={trip?.country || ''}
          placeholder={placeholder?.country}

          onChange={setLocation(_.option)}
          onClose={~setOptions(items)}
          onSearch={i => setOptions(
            items.filter(
              it.country.toLowerCase().includes(i.toLowerCase())
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
        })(`${trip?.days}`?.length)}
        htmlFor={`dur-input-${key}`}
      >
        <TextInput
          align='center'
          size='medium'
          id={`dur-input-${key}`}
          placeholder='1'
          value={trip?.days || ''}
          onChange={setDays(+_.target.value || 0)}
        />
      </StyledFormField>
      <Text>{pluralize('days', +trip?.days)}</Text>
    </>
  )
}
