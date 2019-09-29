import { useState } from 'react'

import { Text, TextInput, Select, FormField } from 'grommet'

import { random } from '@u/arr'
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

      <FormField
        margin={{ horizontal: 'small' }}
        htmlFor={`loc-input-${key}`}
      >
        <Select
          size='medium'
          placeholder={placeholder}
          value={location}
          options={options}
          onChange={setLocation(_.option)}
          onClose={~setOptions(items)}
          onSearch={i => setOptions(items.filter(it.startsWith(i)))}
        />
      </FormField>

      <Text>for</Text>
      <FormField
        htmlFor={`dur-input-${key}`}
      >
        <TextInput
          id={`dur-input-${key}`}
          placeholder={0}
          value={days}
          onChange={setDays(_.target.value)}
        />
      </FormField>
      <Text>{pluralize('days', +days)}</Text>
    </>
  )
}
