import styled, {createGlobalStyle} from 'styled-components'
import reboot from 'styled-reboot'
// TODO: Import a proper Styled System theme here instead of a separate pure color object.
import colors from './themes/colors'

const options = {}

const rebootCss = reboot(/* options */)

const GlobalStyle = createGlobalStyle`
  ${rebootCss}
`

export default GlobalStyle
