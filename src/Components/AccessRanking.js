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
                        <Grid.Column width={4}>
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
                                            - Expires 2nd october after which<br/><br/>
                                        Game tickets cost 500Naira only</p>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column verticalAlign="middle">
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
                                                                color: '#193275',
                                                                fontWeight: 'Regular',
                                                                fontFamily: 'Poppins',
                                                                fontSize: '15px',
                                                                backgroundColor: '#FFFFFF'
                                                            }}
                                                            >
                                                                Get free pass
                                                            
                                                            </Button>}
                                                        />
                                        
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <Image src="/images/banner.png" />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>

    </Segment>        
                           
    )
}
export default AccessRanking