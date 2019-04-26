import React from "react"
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
import withStyles from "@material-ui/styles/withStyles"
import {Card, Link} from "."

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

class Carousel extends React.Component {
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

    const {items} = this.props

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
                        style={{height: "200px"}}
                        image={withPrefix(publicURL)}
                      />
                      <CardContent>
                        <Typography variant="h5" gutterBottom>
                          <Link to={path}>{title}</Link>
                        </Typography>
                        <Typography paragraph>{excerpt}</Typography>
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

export default Carousel
export {Carousel}
