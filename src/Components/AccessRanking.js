import { Popup, Container, Grid, Header, Segment, Image, List, Button } from "semantic-ui-react"

const AccessRanking = () => {
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
                          GET FREE ACCESS<br/>
                          For THE RANKING WEEK

                      </Header>                                       
                        </Grid.Column>               
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column verticalAlign="middle" width={8}>
                                       <Segment style={{padding: '2em 0em'}}>
                                        <Grid>
                                            <Grid.Row>
                                                <Grid.Column textAlign="center">
                                                    <Header
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
                                             - valid for ranking match only
                                    </p>
                                    <p
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
                                            - Expires 2nd october after which Game tickets cost 500 Naira only.</p>
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