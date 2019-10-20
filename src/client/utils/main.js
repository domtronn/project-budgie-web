/*
  Main algorithm for calculating the budget for a trip
*/
import { it } from 'param.macro'
import { find, last, propEq } from 'ramda'

const days = +it?.days
const coli = +it?.index['cost-of-living-index']

const findRateExchange = (rates) => (trip) => {
  const a = find(propEq('code', trip?.currency?.code))(rates)
  return last(a.rates)?.value
}

export default (trip = [], budget, rates) => {
  const findRate = findRateExchange(rates)
  const total = trip.reduce((acc, it) => acc + (days(it) * coli(it)), 0)
  const unit = budget / total

  return trip.map(it => ({ ...it, budget: {
    daily: unit * coli(it),
    dailyWithExchange: unit * coli(it) * findRate(it),
    total: unit * coli(it) * days(it) } }))
}
