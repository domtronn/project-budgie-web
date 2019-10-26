import { WorldMap } from 'grommet'
import { ThemeContext } from 'grommet/contexts'

export default ({ theme, ...props }) => (
  <ThemeContext.Extend value={theme}>
    <WorldMap {...props} />
  </ThemeContext.Extend>
)
