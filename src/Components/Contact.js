import { Grid, Header, Segment, Form, Button, Input } from "semantic-ui-react"

const Contact = () => {
    return(
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <Segment  style={{backgroundColor: '#c3c0c0'}}>
                        <Grid textAlign="center">
                            <Grid.Row>
                                <Grid.Column>
                                    <p
                                         style={{
                                            fontFamily: "dharma-gothic-e",
                                            fontWeight: 'bold',
                                            fontSize: '60px',
                                            characterSpacing: 20,
                                            lineSpacing: 100,
                                            marginBottom: '0em',
                                        }}
                                    >
                                        STAY <span style={{color: '#D70826'}}>INFORMED</span><br/>

                                    </p>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row >
                                <Grid.Column >
                                  
                                    <Input size="huge" placeholder="Email"  />
                                    <Button
                                                size="huge"
                                                style={{
                                                    backgroundColor: '#405092',
                                                    color: '#ffffff'
                                                }}
                                                >
                                                    Sign Up
                                                </Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>

                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
export default Contact