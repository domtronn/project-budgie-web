import { AreaClosed, Line, Bar } from '@vx/shape'
import { appleStock } from '@vx/mock-data'
import { curveMonotoneX } from '@vx/curve'
import { GridRows, GridColumns } from '@vx/grid'
import { scaleTime, scaleLinear, scaleLog } from '@vx/scale'
import { withTooltip, Tooltip } from '@vx/tooltip'
import { localPoint } from '@vx/event'
import { bisector } from 'd3-array'
import { timeFormat } from 'd3-time-format'


// util
const formatDate = timeFormat("%b %d, '%y")
const min = (arr, fn) => Math.min(...arr.map(fn))
const max = (arr, fn) => Math.max(...arr.map(fn))
const extent = (arr, fn) => [min(arr, fn), max(arr, fn)]

// accessors
const xStock = d => new Date(d.timestamp * 1000)
const yStock = d => d.value * 500
const bisectDate = bisector(d => new Date(d.timestamp * 1000)).left


const Area = ({rates}) => {
  const width = 500
  const height = 200
  const margin = { top: 20, bottom: 20, left: 0, right: 0 }
  if (width < 10) return null

  const stock = rates[1].rates
  console.log(rates)
  console.log(stock)
  // bounds
  const xMax = width - margin.left - margin.right
  const yMax = height - margin.top - margin.bottom

  // scales
  const xScale = scaleTime({
    range: [0, xMax],
    domain: extent(stock, xStock)
  })
  const yScale = scaleLinear({
    range: [max(stock, yStock), 0],
    domain: [0, max(stock, yStock) + yMax / 50],
    nice: true
  })


    return (
      <div>
        <svg width={width} height={height}>
          <rect x={0} y={0} width={width} height={height} fill="#32deaa" rx={14} />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity={1} />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <GridRows
            lineStyle={{ pointerEvents: 'none' }}
            scale={yScale}
            width={xMax}
            strokeDasharray="2,2"
            stroke="rgba(255,255,255,0.3)"
          />
          <GridColumns
            lineStyle={{ pointerEvents: 'none' }}
            scale={xScale}
            height={yMax}
            strokeDasharray="2,2"
            stroke="rgba(255,255,255,0.3)"
          />
          <AreaClosed
            data={stock}
            x={d => xScale(xStock(d))}
            y={d => yScale(yStock(d))}
            yScale={yScale}
            strokeWidth={1}
            stroke={'url(#gradient)'}
            fill={'url(#gradient)'}
            curve={curveMonotoneX}
          />
          <Bar
            x={0}
            y={0}
            width={width}
            height={height}
            fill="transparent"
            rx={14}
            data={stock}
          />
        </svg>
      </div>
    )
  }

export default withTooltip(Area)
