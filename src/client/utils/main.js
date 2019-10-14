/*
  Main algorithm for calculating the budget for a trip
*/
import { it } from 'param.macro'

const days = +it?.days
const coli = +it?.index['cost-of-living-index']

const findRateExchange = (rates) => (trip) => rates[trip?.currency?.code]

export default (trip = [], budget, rates) => {
  const findRate = findRateExchange(rates)
  const total = trip.reduce((acc, it) => acc + (days(it) * coli(it)), 0)
  const unit = budget / total

  return trip.map(it => ({ ...it, budget: {
    daily: unit * coli(it),
    dailyWithExchange: unit * coli(it) * findRate(it),
    total: unit * coli(it) * days(it) } }))
}
