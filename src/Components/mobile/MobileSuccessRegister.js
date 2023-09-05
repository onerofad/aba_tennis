import { useNavigate } from "react-router-dom"
import { Segment, Button, Grid, Menu, Container, Image } from "semantic-ui-react"

const MobileSuccessRegister = () => {

    const navigate = useNavigate()
    return(
        <Segment vertical style={{backgroundColor: '#F6F6F6'}}>
        <Grid>
            <Grid.Row>
                <Grid.Column>
                <Menu
                            size="huge"
                            secondary
                            style={{
                                        fontFamily: 'Poppins', 
                                        fontSize: '20px',
                                        fontWeight: 'medium',
                                        color:'#000000',
                                        
                                    }}
                            
                    >
                        <Container>
                                <Menu.Item position="center" as="a">
                                    <Image onClick={() => navigate("/")} size="mini" src="/images/about/about.png" />
                                </Menu.Item>
                        </Container>
                    </Menu>            
                </Grid.Column>
            </Grid.Row>
        </Grid>
        <Grid style={{paddingTop: '2em', paddingBottom: '8em'}}>
            <Grid.Row>
                <Grid.Column textAlign="center">
                    <p
                        style={{
                            fontFamily: 'euphemia-regular',
                            fontWeight: 'normal',
                            fontSize: '16px',
                            wordSpacing: '0.5em'
                        }}
                    >
                        You have successfully registered for the ABA PREMIER LEAGUE<br/>
                        TABLE TENNIS COMPETITION. Check your profile for more<br/> details.
                    </p>
                    <Image centered size="small" src="/images/tennispat.svg" />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column textAlign="center">
                    <Button
                       style={{
                        fontFamily: "Poppins",
                        color: '#FFFFFF',
                        fontWeight: 'normal',
                        fontSize: '16px',
                        backgroundColor: '#193275'
                      
                    }}
                    >
                        Go to profile
                    </Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>

    </Segment>

    )
}
export default MobileSuccessRegister