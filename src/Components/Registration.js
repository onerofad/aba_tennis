import { Segment, Grid, Container, Header, Button, Image } from "semantic-ui-react"
import Footer from "./Footer"
import Headers from "./Headers"
const Registration = () => {
    return(
        <Segment vertical style={{backgroundColor: '#F6F6F6'}}>         
        <Grid>
        <Container>
            <Grid.Row>
                <Grid.Column>
                    <Headers />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{paddingTop: '4em', paddingBottom: '2em'}}>
                <Grid.Column>
                    <Header
                        content = "ABA PREMIER LEAGUE - REGISTRATION"
                        style={{
                            fontFamily: 'AGRESSIVE',
                            fontWeight: 'bold',
                            fontSize: '30px',
                        }}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Segment style={{padding: '4em 6em'}}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Header
                                                    style={{
                                                        fontFamily: "dharma-gothic-e",
                                                        color: '#000000',
                                                        fontWeight: 'bold',
                                                        fontSize: '50px',
                                                       
                                                      
                                                    }}
                                                >
                                                    ARE YOU THE<br/>
                                                    ULTIMATE CHAMPION ?
                                                </Header>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <p
                                                       style={{
                                                        fontFamily: "Poppins",
                                                        color: '#000000',
                                                        fontWeight: 'normal',
                                                        fontSize: '20px',
                                                      
                                                    }}
                                                
                                                >
                                                    Register now for the ranking week, compete with other
                                                    skilled table tennis players to become the ultimate 
                                                    abapit champion. Register with just 1000 only to get started.
                                                    Click the button below to proceed with payment.
                                                </p>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Button
                                                        style={{
                                                            fontFamily: "Poppins",
                                                            color: '#FFFFFF',
                                                            fontWeight: 'normal',
                                                            fontSize: '16px',
                                                            backgroundColor: '#193275'
                                                          
                                                        }}
                                                >
                                                    Pay now
                                                </Button>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Image src="/images/patandball.svg" />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Grid.Column>
            </Grid.Row> 
            <Grid.Row style={{padding: '2em 6em'}}>
                <Grid.Column>
                    <Footer />
                </Grid.Column>
            </Grid.Row>
        </Container> 
        </Grid>

    </Segment>
      
    )
}
export default Registration