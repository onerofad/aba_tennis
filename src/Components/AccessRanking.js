import { Select, Popup, Container, Grid, Header, Segment, Image, List, Button } from "semantic-ui-react"

const AccessRanking = () => {
    const options = [
        { key: 1, text: 'Ranking week 1', value: 1 },
        { key: 2, text: 'League week 2', value: 2 },
        { key: 3, text: 'League week 3', value: 3 },
        { key: 4, text: 'League week 4', value: 4 },
        { key: 5, text: 'Super 4', value: 5 },

      ]
    return(
        <Segment style={{padding: '4em 0em', backgroundColor: '#030303'}}>
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                        <Header style={{
                              color: '#FFFFFF',
                              fontFamily: 'AGRESSIVE',
                              fontSize: '50px',
                              fontWeight: 'bold',
                          }}
                      >
                          BUY TICKET HERE

                      </Header>                                       
                        </Grid.Column>               
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column verticalAlign="middle" width={8}>
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
                                                    {/*<Header
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
                                                    />*/}
                                                      <Popup
                                                            content={
                                                            <>
                                                               Coming Soon!
                                                            </>
                                                            }
                                                            on='click'
                                                            positionFixed
                                                            size="big"
                                                            trigger={
                
                                                            <Button
                                                                style={{
                                                                    color: '#FFFFFF',
                                                                    backgroundColor: '#193275',
                                                                    marginLeft: '1em'
                                                                    
                                                                }}
                                                                disabled
                                                                size="large"
                                                            >
                                                                Buy Now
                                                            
                                                            </Button>}
                                                        />

                                                </Grid.Column>
                                            </Grid.Row>
                                        </Grid>

                                       </Segment>
                            
                    </Grid.Column>
                    <Grid.Column width={8} verticalAlign="middle" >
                        <Grid>
                            <Grid.Row>
                                <Grid.Column>
                                    <p style={{
                                            color: '#FFFFFF',
                                            fontWeight: 'Regular',
                                            fontFamily: 'Poppins',
                                            fontSize: '15px'
                                            }}
                                    >
                                             - Buy your match tickets here
                                    </p>
                                    {/*<p
                                        style={{
                                                color: '#FFFFFF',
                                                fontWeight: 'Regular',
                                                fontFamily: 'Poppins',
                                                fontSize: '15px'
                                        }}
                                    >
                                                - 50 limited tickets

                                    </p>
                                    <p
                                        style={{
                                                color: '#FFFFFF',
                                                fontWeight: 'Regular',
                                                fontFamily: 'Poppins',
                                                fontSize: '15px'
                                    }}
                                    >
                                            - Expires 2nd october after which Game tickets cost 500 Naira only.
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
export default AccessRanking