import {Segment, Container, Grid, Form, Header, Button, Image, Icon} from 'semantic-ui-react'
const Login = () => {
    return(
    
        <Segment vertical style={{backgroundColor: '#F6F6F6'}}>
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                                <Grid>
                                    <Grid.Row style={{padding: '4em 0em'}}>
                                        <Grid.Column id="bgColumn" style={{padding: '4em 4em'}} width={8}>
                                            <Grid>
                                                <Grid.Row>
                                                    <Grid.Column>
                                                        <Image size='tiny' src="/images/about/about.png" />
                                                    </Grid.Column>
                                                </Grid.Row>
                                                <Grid.Row>
                                                    <Grid.Column>
                                                        <Header
                                                            content="UNLEASH YOUR PING PONG PASSION"
                                                            style={{
                                                                fontFamily: 'AGRESSIVE',
                                                                fontSize: '25px',
                                                                color: '#000000'
                                                            }}

                                                        />
                                                    </Grid.Column>
                                                </Grid.Row>
                                                <Grid.Row>
                                                    <Grid.Column>
                                                        <Image size='medium' src="/images/patandball.svg" />
                                                    </Grid.Column>
                                                </Grid.Row>
                                            </Grid>
                                           
                                        </Grid.Column>
                                        <Grid.Column style={{backgroundColor: '#000000', padding: '4em 4em'}} textAlign='center' width={8}>
                                        <Form style={{fontFamily: 'Poppins', fontWeight: 'normal', fontSize: '20px', }}>
                                                <Header
                                                    content="Login"
                                                    style={{
                                                        fontFamily: 'AGRESSIVE',
                                                        fontSize: '25px',
                                                        color: '#FFFFFF',
                                                        paddingBottom: '2em'
                                                    }}
                                                />
                                                <Form.Field>
                                                    <Form.Input placeholder="Email" />
                                                </Form.Field>
                                                <Form.Field>
                                                    <Form.Input type='password' placeholder="Password" />
                                                </Form.Field>
                                                <Form.Field>
                                                    <Button style={{
                                                        color: '#FFFFFF',
                                                        fontFamily: 'Poppins',
                                                        fontWeight: 'normal',
                                                        backgroundColor: '#193275',
                                                        fontSize: '16px'
                                                    }}>
                                                        Login
                                                    </Button>
                                                </Form.Field>
                                                <Form.Field>
                                                    <span style={{
                                                        color: '#FFFFFF',
                                                        fontSize: '14px',
                                                        fontWeight:'normal',
                                                        fontFamily: 'Poppins'
                                                        }}
                                                    >
                                                        Have an account? Login
                                                    </span>
                                                </Form.Field>
                                                <Form.Field 
                                                style={{
                                                    color: '#FFFFFF',
                                                    fontSize: '10px',
                                                    fontWeight:'normal',
                                                    fontFamily: 'Poppins',
                                                    textAlign: 'right',
                                                    paddingTop: '4em'
                                                    }}
                                                
                                                >
                                                    <span>
                                                        Continue to website <Icon name="right angle" />
                                                    </span>
                                                </Form.Field>


                                            </Form>

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
export default Login