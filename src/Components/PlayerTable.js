import { Container, Divider, Grid, Header, Segment } from "semantic-ui-react"

const PlayerTable = () => {
    return(
        <Segment vertical style={{backgroundColor: '#F4F6F6'}}>
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Header
                                content="PLAYER RANKING"
                            />
                            <Divider />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    )
}
export default PlayerTable