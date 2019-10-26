import { useSelector, useDispatch } from 'react-redux'

import LegOfTrip from '@c/leg-of-trip.connected'
import WorldMap from '@c/styled-world-map'

import * as Icons from 'grommet-icons'
import { Grid, Button, Heading, Box } from 'grommet'
import Link from 'next/link'
import Head from 'next/head'

import { _, it } from 'param.macro'
import { map, all, last } from 'ramda'

const CountrySelector = ({ countries = [] }) => {
  const dispatch = useDispatch()
  const legs = useSelector(
    it?.trip
      |> Object.values
      |> _.length
  )

  const lastLeg = useSelector(
    it?.trip
      |> Object.values
      |> last
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
        color: 'brand',
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
          justify='between'
          background='brand'
          pad={{ horizontal: 'medium' }}
        >
          <Box
            direction='row'
            align='baseline'
          >
            <Icons.Globe
              color='light-1'
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
            direction='row'
          >
            <If condition={legs > 1}>
              <Button
                primary
                pad='medium'
                color='accent-1'
                label={`Remove ${lastLeg.country || ''}`}
                margin={{ vertical: 'medium' }}
                icon={<Icons.SubtractCircle />}
                onClick={~dispatch({ type: 'remove-leg', payload: legs })}
              />
            </If>
            <Button
              primary
              pad='medium'
              label='Add'
              color='accent-1'
              margin={{ vertical: 'medium', left: 'medium' }}
              icon={<Icons.AddCircle />}
              onClick={~dispatch({ type: 'add-leg', payload: legs })}
            />
          </Box>
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

const query = { collection: 'locations' }
CountrySelector.getInitialProps = async ({ store }) =>
  await store.firestore.get(query)
  |> it.docs
  |> map(it.data())
  |> { countries: it }

export default CountrySelector
