import { useState } from 'react'

import { Text, TextInput, FormField } from 'grommet'

import { random } from '+/arr'
import { it, _ } from 'param.macro'
import pluralize from 'pluralize'

export default ({ key, copy, items = [], location, setLocation, days, setDays }) => {
  const [placeholder] = useState(random(items))
  const [suggestions, setSuggestions] = useState(items)

  return (
    <>
      <Text>
        {copy}
      </Text>

      <FormField htmlFor={`loc-input-${key}`}>
        <TextInput
          id={`loc-input-${key}`}
          placeholder={placeholder}
          suggestions={suggestions}
          value={location}

          onSelect={setLocation(_.suggestion)}
          onChange={({ target }) => {
            setLocation(target.value)
            setSuggestions(items.filter(it.startsWith(target.value)))
          }}
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
