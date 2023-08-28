import { Container, Grid, Header, Segment } from "semantic-ui-react"

const AccessRanking = () => {
    return(
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Header
                                as="h1"
                                content="GET FREE ACCESS"
                                style={{marginBottom: '0em', fontFamily: 'verdana', fontSize: '2.5em'}}

                            />
                            <Header
                                as="h1"
                                content="FOR THE RANKING WEEK"
                                style={{marginTop: '0em', fontFamily: 'verdana', fontSize: '2.5em'}}

                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
    )
}
export default AccessRanking