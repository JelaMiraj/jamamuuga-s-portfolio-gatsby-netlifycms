import React, {Fragment} from 'react'
import {ThemeProvider} from 'styled-components'
import PropTypes from 'prop-types'
import {ScrollingProvider} from 'react-scroll-section'
import GlobalStyle from '../styles/global-style'
// TODO: Import a proper Styled System theme here instead of a separate pure color object.
import colors from '../styles/themes/colors'
import Helmet from './Helmet'
// TODO: Why is this navigating down & back up to same folder?
import Navbar from './Navbar'

const Layout = ({children}) => (
  <Fragment>
    <GlobalStyle />
    <ThemeProvider theme={{colors}}>
      <ScrollingProvider>
        <div>
          <Helmet />
          <Navbar />
          <div>{children}</div>
        </div>
      </ScrollingProvider>
    </ThemeProvider>
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
