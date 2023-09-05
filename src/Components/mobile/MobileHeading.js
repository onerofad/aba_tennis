import { useNavigate } from "react-router-dom"
import { Segment, Grid, Header, Button } from "semantic-ui-react"

const MobileHeading = () => {
    const navigate = useNavigate()
    const openregister = () => {
        if(sessionStorage.getItem("em") === null ){
            navigate("/signup")
        }else{
            navigate("/register")

        }

    }
    return(
        <Segment vertical style={{backgroundColor: '#F6F6F6', padding: '6em 0em'}}>
        <Grid>
            <Grid.Row>
                <Grid.Column textAlign="center">
                    <Header
                        content="ABA PREMIER LEAGUE
                                 TABLE TENNIS"
                        style={{
                                fontWeight: 'bold', 
                                fontFamily: 'AGRESSIVE',
                                fontSize: '25px',
                                color: '#000000',
                              }}
                    />
                    <Segment id="bgSegment"  
                              style={{
                                maxHeight: 300,
                                padding: '2em 0em',
                                margin: '0em 2em' 
                            }}          
                    >
                        <Grid verticalAlign="middle">
                            <Grid.Row>
                                <Grid.Column>
                                    <Header
                                        content="2nd October to 5th November 2023"
                                        style={{
                                            fontFamily: "dharma-gothic-e",
                                            color: '#ffffff',
                                            fontWeight: 'normal',
                                            fontSize: '30px',
                                          
                                        }}
                                    />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row >
                                <Grid.Column>
                                    <Button 
                                    style={{
                                        color: '#193275', 
                                        fontSize: '16px',
                                        fontWeight: 'normal',
                                        fontFamily: 'Poppins',      
                                    }}
                                    onClick={() => navigate("/register")}
                                    >
                                        Register
                                    </Button>
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
export default MobileHeading