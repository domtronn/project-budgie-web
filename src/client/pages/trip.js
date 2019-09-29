import { useState } from 'react'
import { useSelector } from 'react-redux'

import LegOfTrip from '@c/leg-of-trip.connected'
import * as Icons from 'grommet-icons'
import { Grid, Button, WorldMap, Heading, Box } from 'grommet'

import ky from 'ky-universal'
import { _, it } from 'param.macro'

const CountrySelector = ({ countries = [] }) => {
  const [legs, setLegs] = useState(1)
  const places = useSelector(
    Object.values(_?.trip)
      .map(({ location }) => {
        const c = countries.find(i => i.country === location)
        if (!c) return
        return {
          name: c.country,
          color: 'accent-1',
          location: Object.values(c.location),
        }
      })
      .filter(!!it)
  )

  return (
    <Grid
      rows={['auto', 'flex']}
      columns={['auto', 'flex']}
      areas={[
        { name: 'header', start: [0, 0], end: [1, 0] },
        { name: 'main', start: [1, 1], end: [1, 1] },
      ]}
    >
      <Box
        gridArea='header'
        background='brand'
        pad={{ horizontal: 'medium' }}
      >
        <Heading leg={2}>Hello, world</Heading>
      </Box>
      <Box
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
              items={countries.map(it.country)}
            />
          </For>
        </Box>

        <Button
          margin={{ vertical: 'medium' }}
          pad='small'
          icon={<Icons.AddCircle />}
          label='Add'
          onClick={~setLegs(legs + 1)}
        />

        <WorldMap
          margin='medium'
          places={places}
        />
        <Button
          type='submit'
          label='Submit'
          primary
        />
      </Box>
    </Grid>
  )
}

CountrySelector.getInitialProps = async () =>
  (await ky('http://localhost:3001/countries').json()) |> { countries: _ }

export default CountrySelector
