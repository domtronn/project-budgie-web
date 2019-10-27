import { useState } from 'react'

import { Select, FormField } from 'grommet'
import { it, _ } from 'param.macro'

export default ({ key, items = [], cur, setCurrency }) => {
  const [options, setOptions] = useState(items)

  return (
    <>
      <FormField
        margin={{ horizontal: 'small' }}
        htmlFor={`cur-input-${key}`}
      >
        <Select
          align='center'
          id={`cur-input-${key}`}
          size='medium'
          labelKey='code'
          options={options}

          value={cur?.code || ''}

          onChange={setCurrency(_.option)}
          onClose={~setOptions(items)}
          onSearch={i => setOptions(
            items.filter(
              it.code.toLowerCase().includes(i.toLowerCase())
            )
          )}
        />
      </FormField>
    </>
  )
}
