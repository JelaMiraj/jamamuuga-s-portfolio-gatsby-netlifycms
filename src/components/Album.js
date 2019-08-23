import React from "react"
import {PhotoCamera as CameraIcon} from "@material-ui/icons"
import {
  AppBar,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core"
import styled from "styled-components"
import {Card, Link, LinkExternal} from "."
// Use as example to improve portfolio page. Original demo here: https://material-ui.com/getting-started/templates/album/

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Built with love by the "}
      <LinkExternal color="inherit" href="https://material-ui.com/">
        Material-UI
      </LinkExternal>
      {" team."}
    </Typography>
  )
}

const StyledCameraIcon = styled(CameraIcon)`
  margin-right: ${props => props.theme.spacing(2)};
`

const StyledHeroContent = styled.div`
  background-color: ${props => props.theme.palette.background.paper};
  padding: ${props => props.theme.spacing(8, 0, 6)};
`

const StyledHeroButtons = styled.div`
  margin-top: ${props => props.theme.spacing(4)};
`

const StyledCardGridContainer = styled(Container)`
  padding-top: ${props => props.theme.spacing(8)};
  padding-bottom: ${props => props.theme.spacing(8)};
`

const StyledCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const StyledCardMedia = styled(CardMedia)`
  padding-top: 56.25%; /* 16:9 */
`

const StyledCardContent = styled(CardContent)`
    flex-grow: 1;
`

const StyledFooter = styled.footer`
    background-color: ${props => props.theme.palette.background.paper};
    padding: ${props => props.theme.spacing(6)};
`

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function Album() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <StyledCameraIcon/>
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <StyledHeroContent>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Album layout
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <StyledHeroButtons>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </StyledHeroButtons>
          </Container>
        </StyledHeroContent>
        <StyledCardGridContainer maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <StyledCard>
                  <StyledCardMedia
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <StyledCardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </StyledCardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </StyledCardGridContainer>
      </main>
      {/* Footer */}
      <StyledFooter>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <MadeWithLove />
      </StyledFooter>
      {/* End footer */}
    </>
  )
}
