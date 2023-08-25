import { Button, Container, Grid, Header, List, Segment } from "semantic-ui-react"

const HeadingPage = () => {
    return(
        <Segment vertical style={{backgroundColor: '#F4F6F6', paddingTop: '8em'}}>
        <Container>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <Segment>
                            <List relaxed divided size="huge">
                                <List.Item>Player Ratings</List.Item>
                                <List.Item>Watch Videos</List.Item>
                                <List.Item>Coming Up</List.Item>
                                <List.Item>Player Profiles</List.Item>
                                <List.Item>Image Gallary</List.Item>
                                <List.Item>Results</List.Item>
                            </List>

                        </Segment>
                       

                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Segment>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column textAlign="center">
                                        <Header
                                            content="ABA PREMIER LEAGUE
                                                     TABLE TENNIS"
                                            as="h1"
                                            style={{fontSize: '3em'}}
                                        />
                                        <Segment vertical style={{minHeight: 200, backgroundColor: 'blue'}}>
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