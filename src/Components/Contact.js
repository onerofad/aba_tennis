import { Grid, Header, Segment, Form, Button, Input } from "semantic-ui-react"

const Contact = () => {
    return(
    
        <Segment  style={{backgroundColor: '#c3c0c0', padding: '2em 0em'}}>
            <Grid textAlign="center">
                <Grid.Row>
                    <Grid.Column>
                        <Header style={{
                                fontFamily: "dharma-gothic-c",
                                fontWeight: 'bold',
                                fontSize: '120px',
                                marginBottom: 0
                            }}
                        >
                            STAY <span style={{color: '#D70826'}}>INFORMED</span>
                        </Header>
                        <span 
                            style={{
                                fontSize: '18px',
                                fontFamily: 'Poppins',
                                fontWeight: 'normal'

                            }}
                            >
                                Up to date with today's top stories
                        </span>

                    </Grid.Column>
                </Grid.Row>
                <Grid.Row >
                    <Grid.Column >
                        <Input placeholder="Email"  
                            style={{
                                fontFamily: 'Poppins',
                                fontSize: '18px',
                                fontWeight: 'normal',
                                width: '500px',
                                marginRight: '1em'
                            }}
                        />
                            <Button
                              style={{
                                backgroundColor: '#405092',
                                fontFamily: 'Poppins',
                                fontSize: '18px',
                                fontWeight: 'normal',
                                color: '#ffffff'
                              }}
                            >
                                Sign Up
                            </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </Segment>
    )
}
export default Contact