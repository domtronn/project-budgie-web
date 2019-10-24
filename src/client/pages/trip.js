import { useSelector, useDispatch } from 'react-redux'

import LegOfTrip from '@c/leg-of-trip.connected'
import WorldMap from '@c/styled-world-map'

import * as Icons from 'grommet-icons'
import { Grid, Button, Heading, Box } from 'grommet'
import Link from 'next/link'
import Head from 'next/head'

import { _, it } from 'param.macro'
import { map, all } from 'ramda'

const CountrySelector = ({ countries = [] }) => {
  const dispatch = useDispatch()
  const legs = useSelector(
    it?.trip
      |> Object.values
      |> _.length
  )
  const places = useSelector(
    it?.trip
      |> Object.values
      |> map({
        country: it?.country,
        location: [
          it?.location?.latitude,
          it?.location?.longitude,
        ],
        color: 'accent-1',
      })
  )
  const submitDisabled = useSelector(
    it?.trip
      |> Object.values
      |> all(!!it?.days && !!it?.country)
      |> !it
  )

  return (
    <>
      <Head>
        <title>Your trip</title>
      </Head>

      <Grid
        fill
        rows={['auto', 'flex']}
        columns={['auto', 'flex']}
        areas={[
          { name: 'header', start: [0, 0], end: [1, 0] },
          { name: 'main', start: [1, 1], end: [1, 1] },
        ]}
      >
        <Box
          direction='row'
          align='baseline'
          gridArea='header'
          background='accent-1'
          pad={{ horizontal: 'medium' }}
        >
          <Icons.Globe
            color='dark-1'
            size='medium'
          />
          <Heading
            level={2}
            margin={{ left: 'small' }}
          >
            Trip builder
          </Heading>
        </Box>
        <Box
          background='light-1'
          gridArea='main'
          pad='medium'
        >
          <Box
            direction='row'
            align='baseline'
            wrap
          >
            <For
              index='i'
              each='item'
              of={Array(legs).fill()}
            >
              <LegOfTrip
                key={i}
                id={i}
                items={countries}
              />
            </For>
          </Box>

          <Button
            pad='small'
            label='Add'
            margin={{ vertical: 'medium' }}
            icon={<Icons.AddCircle />}
            onClick={~dispatch({ type: 'add-leg', payload: legs })}
          />

          <WorldMap
            theme={{ worldMap: { place: { base: '12px' } } }}
            align='end'
            places={places}
          />

          <Link href='/budget'>
            <Button
              disabled={submitDisabled}
              type='submit'
              label='Submit'
              primary
            />
          </Link>
        </Box>
      </Grid>
    </>
  )
}

const query = { collection: 'locations', where: ['type', '==', 'country'] }
CountrySelector.getInitialProps = async ({ store }) =>
  await store.firestore.get(query)
  |> it.docs
  |> map(it.data())
  |> { countries: it }

export default CountrySelector
