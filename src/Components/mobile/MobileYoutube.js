import { Container, Grid, Segment, Image, Header } from "semantic-ui-react"

const MobileYoutube = () => {
    return(
        <Segment vertical style={{backgroundColor: '#F6F6F6', padding: '2em 0em'}}>
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Header
                                content="Get involved with the game....."
                                style={{
                                    fontFamily: "dharma-gothic-e",
                                    color: '#000000',
                                    fontWeight: 'bold',
                                    fontSize: '35px'
                                }}
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Segment style={{padding: '10em 1em'}}>
                                <Image centered src="/images/youtube.svg" />
                            </Segment>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    )
}
export default MobileYoutube