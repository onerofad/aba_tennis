import { Select, Popup, Table, Input, Sidebar, Menu, Container, Button, Segment, Icon, Image , Grid, Header, Divider, Placeholder, List, Message} from "semantic-ui-react"

const MobileAccessRanking = () => {
    const options = [
        { key: 1, text: 'Ranking week 1', value: 1 },
        { key: 2, text: 'League week 2', value: 2 },
        { key: 3, text: 'League week 3', value: 3 },
        { key: 4, text: 'League week 4', value: 4 },
        { key: 5, text: 'Super 4', value: 5 },

      ]
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
                            BUY TICKET HERE

                      </Header>                                       
                        </Grid.Column>               
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Grid>
                            <Grid.Row>
                                    <Grid.Column verticalAlign="middle">
                                       <Segment style={{padding: '2em 0em'}}>
                                        <Grid>
                                            <Grid.Row>
                                                <Grid.Column textAlign="center">
                                                <Select 
                                                        options={options} 
                                                        placeholder="Select Week"
                                                        style={{
                                                            color: '#000000',
                                                            fontFamily: 'Poppins',
                                                            fontSize: '16px',
                                                            fontWeight: 'normal',
                                                        }}
                                                />
                                                   { /*<Header
                                                     content="Ranking week 1"
                                                     style={{fontFamily: 'Poppins', fontWeight: 'normal', fontStretch: 'expanded'}}
                                                     />
                                                    
                                                     <Header
                                                     style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: '35px',
                                                        fontWeight: 'bold'
                                                     }}
                                                     content="Free Ticket"
                                                     />
                                                    */}
                                                      <Popup
                                                            content={
                                                            <>
                                                               Coming Soon!
                                                            </>
                                                            }
                                                            on='click'
                                                            positionFixed
                                                            trigger={
                                                            <Button
                                                                style={{
                                                                    color: '#FFFFFF',
                                                                    backgroundColor: '#193275'
                                                                    
                                                                }}
                                                                disabled
                                                            >
                                                                Buy Now
                                                            
                                                            </Button>}
                                                        />

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
                                              - Buy your match tickets here
                                        </p>
                                        {/*<p
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
                                            - Expires 2nd october after which
                                        Game tickets cost 500Naira only
                                        </p>
                                        */}
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