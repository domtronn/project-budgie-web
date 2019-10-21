import styled from 'styled-components'
import { Div } from '@c/styled-grommet'
import { AreaClosed, Bar } from '@vx/shape'
import { curveMonotoneX } from '@vx/curve'
import { GridRows, GridColumns } from '@vx/grid'
import { scaleTime, scaleLinear } from '@vx/scale'
import { withTooltip } from '@vx/tooltip'

// util
const min = (arr = [], fn = i => i) => Math.min(...arr.map(fn))
const max = (arr = [], fn = i => i) => Math.max(...arr.map(fn))
const extent = (arr = [], fn = i => i) => [min(arr, fn), max(arr, fn)]

const Rect = styled.rect`
  fill: ${({ theme }) => theme?.global?.colors?.brand || 'black'}
`

// accessors
const xStock = d => new Date(d.timestamp * 1000)
const yStock = d => d.value

const Area = ({ theme, rates = [] }) => {
  if (!rates.length) return null

  const width = 500
  const height = 200
  const margin = { top: 20, bottom: 20, left: 0, right: 0 }

  const stock = rates
  // bounds
  const xMax = width - margin.left - margin.right
  const yMax = height

  // scales
  const xScale = scaleTime({
    range: [0, xMax],
    domain: extent(stock, xStock)
  })

  const yScale = scaleLinear({
    range: [yMax, 0],
    domain: [min(stock, yStock), max(stock, yStock)],
    nice: true
  })

  return (
    <Div
      height={height + 'px'}
    >
      <svg
        width={width}
        height={height}
      >
        <Rect
          x={0}
          y={0}
          width={width}
          height={height}
        />
        <defs>
          <linearGradient
            id='gradient'
            x1='0%'
            y1='0%'
            x2='0%'
            y2='100%'
          >
            <stop
              offset='0%'
              stopColor='#FFFFFF'
              stopOpacity={1}
            />
            <stop
              offset='100%'
              stopColor='#FFFFFF'
              stopOpacity={0.2}
            />
          </linearGradient>
        </defs>
        <GridRows
          lineStyle={{ pointerEvents: 'none' }}
          scale={yScale}
          width={xMax}
          strokeDasharray='4,4'
          stroke='rgba(255,255,255,0.5)'
        />
        <AreaClosed
          data={stock}
          x={d => xScale(xStock(d))}
          y={d => yScale(yStock(d))}
          yScale={yScale}
          strokeWidth={2}
          stroke='white'
          fill='none'
          curve={curveMonotoneX}
        />
        <Bar
          x={0}
          y={0}
          width={width}
          height={height}
          fill='transparent'
          rx={14}
          data={stock}
        />
      </svg>
    </Div>
  )
}

export default withTooltip(Area)
