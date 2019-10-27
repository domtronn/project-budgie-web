import { useSelector, useDispatch } from 'react-redux'

import { Grid, Text, Heading, FormField, Button, TextInput } from 'grommet'
import { Box } from '@c/styled-grommet'
import BudgetCard from '@c/budget-card'
import DatePicker from '@e/date-picker'

import { store } from '@fire/'

import * as Icons from 'grommet-icons'
import Head from 'next/head'

import calcBudget from '@u/main'
import { it, _ } from 'param.macro'
import { map, pluck, sum } from 'ramda'

const BudgetPanel = () => {
  const trip = useSelector(it?.trip || {})
  const tripDuration = useSelector(
    it?.trip
      |> Object.values(_)
      |> pluck('days')
      |> sum(_)
  )
  const rates = useSelector(it?.app?.rates || {})
  const budget = useSelector(it?.budget || 0)
  const dispatch = useDispatch()

  return (
    <>
      <Head>
        <title>Your budget</title>
      </Head>
      <Grid
        fill
        rows={['auto', 'flex']}
        columns={['flex']}
        areas={[
          { name: 'header', start: [0, 0], end: [1, 0] },
          { name: 'main', start: [0, 1], end: [1, 1] },
        ]}
      >
        <Box
          direction='row'
          align='baseline'
          gridArea='header'
          background='brand'
          justify='between'
          pad={{ horizontal: 'medium' }}
        >
          <Box
            direction='row'
            align='baseline'
          >
            <Icons.Money
              color='light-1'
              size='medium'
            />
            <Heading
              level={2}
              margin={{ left: 'small' }}
            >
              Your budget
            </Heading>
          </Box>

          <Box
            direction='row'
          >
            <Button
              primary
              color='accent-1'
              icon={<Icons.Money />}
              onClick={~dispatch({ type: 'add-funds', payload: 50 })}
            />
            <Button
              margin={{ left: 'small' }}
              primary
              color='accent-1'
              icon={<Icons.Bundle />}
              onClick={~dispatch({ type: 'add-funds', payload: 1000 })}
            />
          </Box>
        </Box>

        <Box
          background='light-1'
          gridArea='main'
        >
          <Text>
            When does your trip start?
            <DatePicker />
          </Text>
          <Text>
            You're going for <b>{tripDuration}</b> days.
          </Text>
          <Text
            alignSelf='center'
          >
            <FormField>
              <TextInput
                label='Budget'
                value={budget}
                onChange={dispatch({ type: 'set-funds', payload: _.target.value })}
              />
            </FormField>
          </Text>

          <For
            index='i'
            each='item'
            of={calcBudget(Object.values(trip), budget || 0, rates)}
          >
            <BudgetCard
              key={i}
              {...item}
            />
          </For>

        </Box>
      </Grid>
    </>
  )
}

BudgetPanel.getInitialProps = async ({ store: s }) => {
  return await store.collection('rates').get()
    |> it.docs
    |> map(it.data())
    |> { type: 'set-rates', payload: it }
    |> s.dispatch(_)
}
export default BudgetPanel
