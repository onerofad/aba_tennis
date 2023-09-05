import {Segment, Container, Grid, Form, Header, Button, Image, Icon, Modal, Divider} from 'semantic-ui-react'
import { useEffect, useState, useReducer } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const MobileLogin = () => {

    const options = [
        { key: 1, text: 'Nigerian', value: 'Nigerian' },
    ]

    const navigate = useNavigate()

    return(
    
        <Segment textAlign='center' vertical style={{backgroundColor: '#F6F6F6', paddingTop: '6em'}}>
            <Container>
                <Grid>
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
                    <Divider />
                    <Grid.Row>
                        <Grid.Column>
                        <Header
                            content="LOGIN"
                            style={{
                                fontFamily: 'AGRESSIVE',
                                fontSize: '20px',
                                color: '#000000',
                            }}
                            />                                                   
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column style={{backgroundColor: '#000000', padding: '2em', marginBottom: 0}} textAlign='center'>
                                            <Form style={{minHeight: 300, fontFamily: 'Poppins', fontWeight: 'normal', fontSize: '20px', }}>
                                               
                                                <Form.Field>
                                                    <Form.Input 
                                                        placeholder="Email" 
                                                      
                                                    />
                                                </Form.Field>
                                                <Form.Field>
                                                    <Form.Input 
                                                        placeholder="Password" 
                                                        type='password'
                                                       
                                                    />
                                                </Form.Field>
                                                <Form.Field>
                                                    <Button style={{
                                                            color: '#FFFFFF',
                                                            fontFamily: 'Poppins',
                                                            fontWeight: 'normal',
                                                            backgroundColor: '#193275',
                                                            fontSize: '16px'
                                                        }}
                                                              >
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
                                                        <Link to="/login" style={{color: '#FFFFFF'}}>Don't have an account? register here</Link>
                                                    </span>
                                                </Form.Field>

                                            </Form>

                                        </Grid.Column>                                          
                                      
                    </Grid.Row>
                </Grid>
            </Container>

        </Segment>
        
    )
}
export default MobileLogin