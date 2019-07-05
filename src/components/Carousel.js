import React, {Component} from "react"
import {withPrefix} from "gatsby"
import {
  CardContent,
  CardMedia,
  Button,
  MobileStepper,
  Paper,
  Typography,
} from "@material-ui/core"
import SwipeableViews from "react-swipeable-views"
import {autoPlay} from "react-swipeable-views-utils"
import {withStyles} from "@material-ui/core/styles"
import {Card, Link} from "."
// TODO: Convert from class & withStyle to function constant & makeStyles hooks api. Also this means styles should be changed to a function constant names useStyles.

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const styles = {
  cardMedia: {
    height: "200px",
  },
}

class Carousel extends Component {
  state = {
    activeStep: 0,
  }

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }))
  }

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }))
  }

  handleStepChange = activeStep => {
    this.setState({activeStep})
  }

  render() {
    const {activeStep} = this.state

    const {classes, items} = this.props

    const maxSteps = items.length

    return (
      <Paper elevation={0}>
        <div>
          <Typography>{items[activeStep].title}</Typography>
          <AutoPlaySwipeableViews
            axis="x"
            index={activeStep}
            onChangeIndex={this.handleStepChange}
            enableMouseEvents
          >
            {items.map((item, index) => {
              const {
                node: {
                  excerpt,
                  frontmatter: {
                    path,
                    title,
                    image: {publicURL},
                  },
                },
              } = item

              return (
                <div key={index}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Card>
                      <CardMedia
                        className={classes.cardMedia}
                        image={withPrefix(publicURL)}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          <Link to={path}>{title}</Link>
                        </Typography>
                        <Typography component="p">{excerpt}</Typography>
                      </CardContent>
                    </Card>
                  ) : null}
                </div>
              )
            })}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={this.handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={this.handleBack}
                disabled={activeStep === 0}
              >
                Back
              </Button>
            }
          />
        </div>
      </Paper>
    )
  }
}

// export default Carousel
export default withStyles(styles)(Carousel)
// export {Carousel}
