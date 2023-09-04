import { Table, Input, Select, Sidebar, Menu, Container, Button, Segment, Icon, Image , Grid, Header, Divider, Placeholder, List} from "semantic-ui-react"

const MobileAccessRanking = () => {
    return(
        <Segment style={{margin: 0, border: 0, padding: '4em 0em', backgroundColor: '#030303'}}>
            <Container>
                <Grid stackable>
                    <Grid.Row>
                        <Grid.Column>
                        <Header style={{
                              color: '#FFFFFF',
                              fontFamily: 'AGRESSIVE',
                              fontSize: '25px',
                              fontWeight: 'bold',
                          }}
                      >
                          GET FREE ACCESS<br/>
                          FOR THE RANKING WEEK

                      </Header>                                       
                        </Grid.Column>               
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Grid>
                            <Grid.Row>
                                    <Grid.Column verticalAlign="middle">
                                       <Segment>
                                        <Grid>
                                            <Grid.Row>
                                                <Grid.Column textAlign="center">
                                                    <Header
                                                     content="Ranking week 1"
                                                     />
                                                     <Header
                                                     style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: '35px',
                                                        fontWeight: 'bold'
                                                     }}
                                                     content="Free Ticket"
                                                     />
                                                     <Button
                                                        size="huge"
                                                        style={{
                                                            color: '#FFFFFF',
                                                            backgroundColor: '#193275'
                                                        }}
                                                     >
                                                        Buy Now
                                                     </Button>
                                                </Grid.Column>
                                            </Grid.Row>
                                        </Grid>

                                       </Segment>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                        <p style={{
                                            color: '#FFFFFF',
                                            fontWeight: 'Regular',
                                            fontFamily: 'Poppins',
                                            fontSize: '12px'
                                            }}
                                        >
                                              - valid for ranking match only
                                        </p>
                                        <p
                                            style={{
                                                color: '#FFFFFF',
                                                fontWeight: 'Regular',
                                                fontFamily: 'Poppins',
                                                fontSize: '12px'
                                           }}
                                        >
                                                - 50 limited tickets

                                        </p>
                                        <p
                                            style={{
                                                color: '#FFFFFF',
                                                fontWeight: 'Regular',
                                                fontFamily: 'Poppins',
                                                fontSize: '12px'
                                           }}
                                        >
                                            - Expires 2nd october after which<br/>
                                        Game tickets cost 500Naira only</p>
                                    </Grid.Column>
                                </Grid.Row>
                               
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>

    </Segment> 
    )
}
export default MobileAccessRanking