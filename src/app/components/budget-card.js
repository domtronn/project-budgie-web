import { useSelector } from 'react-redux'

import { Box } from '@c/styled-grommet'
import Area from '@c/rate-graph'
import { Image, Heading, Text } from 'grommet'
import { toCurrency, toLocalCurrency } from '@u/format'

import { it } from 'param.macro'
import pluralize from 'pluralize'

const CardHeader = ({ name, country, code, days, flag }) => (
  <Box
    display='flex'
    flexDirection='row'
    alignItems='center'
    background='brand'
    pad='small'
  >
    <Box
      width='40px'
      height='40px'
      overflow='hidden'
      align='center'
      borderRadius='50%'
      margin={{ left: 'small', right: 'small' }}
    >
      <Image
        width='64px'
        height='64px'
        fit='cover'
        src={flag}
        alt={`${country} flag`}
      />
    </Box>
    <Heading level={3}>{name} for {days} {pluralize('day', days)}</Heading>
  </Box>
)

const CardBody = ({ daily, dailyWithExchange, total, symbol, name, country }) => (
  <Box
    pad='medium'
    align='center'
    textAlign='center'
    background='light-1'
  >
    <Text size='small'>Your total budget is</Text>
    <Text size='xxlarge'>{toCurrency(total, 0)}</Text>
    <Text
      size='small'
      margin={{ top: 'medium' }}
    >
      They use the <b>{name}</b> in {country}
      <br />
      Today, we think you should withdraw
    </Text>
    <Box display='inline'>
      <Text size='large'>{symbol || '?'}</Text>
      <Text size='xxlarge'>{Math.floor(dailyWithExchange || daily || 0)}</Text>
    </Box>
    <Text size='small'><i>({toCurrency(daily)})</i></Text>
  </Box>
)

export default ({ budget, currency, ...props }) => {
  const curRates = useSelector(
    it?.app?.rates || []
      |> it.find(it.code === currency?.code)
      |> it?.rates || []
  )

  return (
    <Box
      elevation='medium'
      round='large'
      overflow='hidden'
      margin={{ horizontal: 'auto', vertical: 'large' }}
      width='medium'
    >
      <CardHeader {...props} />
      <CardBody
        {...budget}
        {...props}
        {...currency}
      />

      <Area rates={curRates} />
    </Box>
  )
}
