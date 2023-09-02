import { Container, Grid, Segment } from "semantic-ui-react"
import Headers from "./Headers"
import AccessRanking from "./AccessRanking"
import PlayerTable from "./PlayerTable"
import Footer from "./Footer"

const PlayerRankingTable = () => {
    return(
        <Segment vertical style={{backgroundColor: '#F6F6F6'}}>
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Headers />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <PlayerTable />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{padding: '2em 6em'}}>
                        <Grid.Column >
                            <Footer />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>

        </Segment>
    )
}
export default PlayerRankingTable