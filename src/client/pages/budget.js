import { useState } from 'react'
import { useSelector } from 'react-redux'

import { Image, Table, TableCell, TableRow, TableBody, TableHeader, Grid, Text, Heading, FormField, TextInput } from 'grommet'
import { Box } from '@c/styled-grommet'
import BudgetCard from '@c/budget-card'

import { getRates } from '../store/app-reducer'
import Area from '@c/rate-graph'

import * as Icons from 'grommet-icons'
import Head from 'next/head'

import pluralize from 'pluralize'
import calcBudget from '@u/main'
import { toCurrency, toLocalCurrecy } from '@u/format'

import { it, _ } from 'param.macro'

const BudgetPanel = () => {
  const trip = useSelector(it?.trip || {})
  const rates = useSelector(it?.app?.rates || {})
  const [budget, setBudget] = useState(0)

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
          pad={{ horizontal: 'medium' }}
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
          background='light-1'
          gridArea='main'
        >
          <Text
            alignSelf='center'
          >
            <FormField>
              <TextInput
                label='Budget'
                value={budget}
                onChange={setBudget(_.target.value)}
              />
            </FormField>
          </Text>

          <For
            index='i'
            each='item'
            of={calcBudget(Object.values(trip), budget || 0, rates)}
          >
            <BudgetCard {...item} />
          </For>

        </Box>
      </Grid>
    </>
  )
}

BudgetPanel.getInitialProps = async ({ store }) => {
  await store.dispatch(getRates(store))

  return {}
}

export default BudgetPanel
