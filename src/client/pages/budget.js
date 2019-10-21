import { useState } from 'react'
import { useSelector } from 'react-redux'

import { Box } from '@c/styled-grommet'
import { getRates } from '../store/app-reducer'
import Area from '@c/rate-graph'

import { Table, TableCell, TableRow, TableBody, TableHeader, Grid, Text, Heading, FormField, TextInput } from 'grommet'
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
          background='accent-1'
          pad={{ horizontal: 'medium' }}
        >
          <Icons.Money
            color='dark-1'
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
          elevation='medium'
          background='dark-1'
          gridArea='main'
          border={{
            color: 'dark-1',
            size: 'small',
            side: 'all',
          }}
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

          <Table>
            <TableHeader>
              <TableRow>
                <TableCell><Text>Location</Text></TableCell>
                <TableCell><Text>Duration</Text></TableCell>
                <TableCell><Text>Daily Budget</Text></TableCell>
                <TableCell><Text>Daily Budget In local currency</Text></TableCell>
                <TableCell><Text>Total Budget</Text></TableCell>
              </TableRow>
            </TableHeader>

            <TableBody>
              <For
                index='i'
                each='item'
                of={calcBudget(Object.values(trip), budget || 0, rates)}
              >
                <TableRow key={item.country}>
                  <TableCell><Text>{item.country}</Text></TableCell>
                  <TableCell><Text>{item.days} {pluralize('day', item.days)}</Text></TableCell>
                  <TableCell><Text>{toCurrency(item.budget.daily)}</Text></TableCell>
                  <TableCell><Text>{toLocalCurrecy(item, item.budget.dailyWithExchange)}</Text></TableCell>
                  <TableCell><Text>{toCurrency(item.budget.total)}</Text></TableCell>
                </TableRow>
              </For>
            </TableBody>

          </Table>

        <Area rates={rates} />

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
