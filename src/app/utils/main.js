/*
  Main algorithm for calculating the budget for a trip
*/
import { it } from 'param.macro'
import { find, last } from 'ramda'

const days = +it?.days
const coli = +it?.index?.costOfLivingIndex

const findRateExchange = (rates) => (trip) =>
  rates
      |> find(it => it?.code === trip?.currency?.code)
      |> it?.rates || []
      |> last
      |> it?.value

export default (trip = [], budget, currency, rates) => {
  const findRate = findRateExchange(rates)
  const baseRate = findRate({ currency: { code: currency } })

  const total = trip.reduce((acc, it) => acc + (days(it) * coli(it)), 0)
  const unit = budget / total

  return trip.map(it => ({
    ...it,
    budget: {
      daily: unit * coli(it),
      dailyWithExchange: unit * coli(it) * (findRate(it) / baseRate),
      total: unit * coli(it) * days(it)
    }
  }))
}
