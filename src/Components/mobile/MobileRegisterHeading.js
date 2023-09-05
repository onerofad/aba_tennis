import { useNavigate } from "react-router-dom"
import { Segment, Grid, Header, Button, Image } from "semantic-ui-react"
import './style.css'

const MobileRegisterHeading = () => {
    const navigate = useNavigate()

    return(
        <Segment vertical style={{border: 0, margin: 0, backgroundColor: '#F6F6F6', padding: '6em 0em'}}>
        <Grid>
            <Grid.Row>
                <Grid.Column textAlign="center">
                    <Header
                        content="ABA PREMIER LEAGUE
                                 REGISTRATION"
                        style={{
                                fontWeight: 'bold', 
                                fontFamily: 'AGRESSIVE',
                                fontSize: '25px',
                                color: '#000000',
                              }}
                    />
                   
                </Grid.Column>

            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Segment  style={{border: 0, margin: 0, padding: '2em 2em'}}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Header
                                                 style={{
                                                        fontFamily: "dharma-gothic-e",
                                                        color: '#000000',
                                                        fontWeight: 'bold',
                                                        fontSize: '45px',
                                                       
                                                      
                                                    }}
                                                >
                                                    ARE YOU THE<br/>
                                                    ULTIMATE CHAMPION ?
                                                </Header>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={12}>
                                                <p
                                                       style={{
                                                        fontFamily: "Poppins",
                                                        color: '#000000',
                                                        fontWeight: 'normal',
                                                        fontSize: '14px',
                                                        lineHeight: '2em',
                                                      
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
                                            <Grid.Column width={8}>
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
                                            <Grid.Column width={8}>
                                                <Image  verticalAlign="top" size="large" src="/images/patandball.svg" />
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Grid.Column>
                              
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Grid.Column>
            </Grid.Row> 

        </Grid>
    </Segment>

    )
}
export default MobileRegisterHeading