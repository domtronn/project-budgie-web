import styled from 'styled-components'
import { space, border, layout, typography, color } from 'styled-system'

import * as Grommet from 'grommet'

const s = C => styled(C)`
  ${space}
  ${layout}
  ${typography}
  ${color}
  ${border}
`

export const Box = s(Grommet.Box)
export const Div = styled.div`
  ${space}
  ${layout}
  ${typography}
  ${color}
  ${border}
`
