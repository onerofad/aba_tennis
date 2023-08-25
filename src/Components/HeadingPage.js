import { Button, Container, Grid, Header, List, Segment } from "semantic-ui-react"

const HeadingPage = () => {
    return(
        <Segment vertical style={{backgroundColor: '#F4F6F6', padding: '1em', border: 0}}>
        <Container>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <Segment>
                            <List relaxed divided size="big">
                                <List.Item as="a">Player Ratings</List.Item>
                                <List.Item as="a">Watch Videos</List.Item>
                                <List.Item as="a">Coming Up</List.Item>
                                <List.Item as="a">Player Profiles</List.Item>
                                <List.Item as="a">Image Gallary</List.Item>
                                <List.Item as="a">Results</List.Item>
                            </List>

                        </Segment>
                       

                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Segment vertical>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column textAlign="center">
                                        <Header
                                            content="ABA PREMIER LEAGUE
                                                     TABLE TENNIS"
                                            as="h1"
                                            style={{fontSize: '3em'}}
                                        />
                                        <Segment  style={{minHeight: 200, backgroundColor: '#0047AB'}}>
                                            <Grid verticalAlign="middle">
                                                <Grid.Row>
                                                    <Grid.Column>
                                                        <Header
                                                            content="2nd October to 5th November 2023"
                                                            style={{color: '#fff'}}
                                                            as="h1"
                                                        />
                                                    </Grid.Column>
                                                </Grid.Row>
                                                <Grid.Row >
                                                    <Grid.Column>
                                                        <Button 
                                                        size="large"
                                                        style={{color: '#000', backgroundColor: '#FFF'}}
                                                        
                                                        >
                                                            Learn more
                                                        </Button>
                                                    </Grid.Column>
                                                </Grid.Row>
                                            </Grid>
                                        </Segment>
                                    </Grid.Column>

                                </Grid.Row>

                            </Grid>
                        </Segment>
                        
                    </Grid.Column>
                </Grid.Row>

            </Grid>

        </Container>
           
       </Segment>
    )
}
export default HeadingPage