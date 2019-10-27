import { useState } from 'react'

import * as Icons from 'grommet-icons'
import { DropButton, Calendar, Box, Text } from 'grommet'

const DropContent = ({ date: initialDate, onClose }) => (
  <Box align='center'>
    <Calendar
      animate={false}
      date={initialDate}
      onSelect={onClose}
      showAdjacentDays={false}
    />
  </Box>
)

export default ({ onSelect }) => {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState()

  const onClose = (nextDate) => {
    onSelect(nextDate)
    setDate(nextDate)
    setOpen(false)
    setTimeout(~setOpen(undefined), 1)
  }

  return (
    <DropButton
      open={open}
      onClose={~setOpen(false)}
      onOpen={~setOpen(true)}
      dropContent={
        <DropContent
          date={date}
          onClose={onClose}
        />
      }
    >
      <Box
        direction='row'
        gap='medium'
        align='center'
        pad='small'
      >
        <Text color={date ? undefined : 'dark-5'}>
          {date
            ? `${new Date(date).toLocaleDateString()}`
            : 'Select date & time'}
        </Text>
        <Icons.Schedule />
      </Box>
    </DropButton>
  )
}
