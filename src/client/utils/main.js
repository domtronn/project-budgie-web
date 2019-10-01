/*
  Main algorithm for calculating the budget for a trip
*/
import { it } from 'param.macro'

const days = +it?.days
const coli = +it?.index['cost-of-living-index']

export default (trip = [], budget) => {
  const total = trip.reduce((acc, it) => acc + (days(it) * coli(it)), 0)
  console.log(total)
  const unit = budget / total
  console.log(unit)

  return trip.map(it => ({ ...it, budget: { daily: unit * coli(it), total: unit * coli(it) * days(it) } }))
}
