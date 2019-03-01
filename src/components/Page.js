import React from 'react'
// import {Grid, Row, Col} from 'react-flexbox-grid'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Header from './Header'
import Footer from './Footer'
// import '../css/style.styl'

class Page extends React.Component {
  render() {
    const {title, children} = this.props

    return (
      <>
        <Header />
        <Grid container style={{marginTop: '94px'}}>
          <Grid item container direction="row">
            <Grid item container direction="column" xs={12}>
              {title ? (
                <Typography
                  variant="h2"
                  gutterBottom
                  style={{textAlign: 'center'}}
                >
                  {title}
                </Typography>
              ) : null}
              {children}
              <Footer />
            </Grid>
          </Grid>
        </Grid>
      </>
    )
  }
}

export default Page
