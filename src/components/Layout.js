import React, {Fragment} from 'react'
// FIXME: Switch to MUI Themes.
// import {ThemeProvider} from 'styled-components'
import {MUIThemeProvider, withStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import {ScrollingProvider} from 'react-scroll-section'
// import GlobalStyle from '../styles/global-style'
// TODO: Import a proper Styled System theme here instead of a separate pure color object.
// import colors from '../styles/themes/colors'
import Header from './Header'
import Helmet from './Helmet'
// TODO: Why is this navigating down & back up to same folder?
import Navbar from './Navbar'
import mytheme from '../styles/themes/theme'

// TODO: Find out if we need any <GlobalStyle />
const Layout = ({children}) => (
  <Fragment>
    <MUIThemeProvider theme={mytheme}>
      <ScrollingProvider>
        <div>
          <Helmet />
          <Navbar />
          <div>{children}</div>
        </div>
      </ScrollingProvider>
    </MUIThemeProvider>
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
