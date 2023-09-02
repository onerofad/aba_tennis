import {Segment, Grid, Container, Header, Divider, Input, Icon} from 'semantic-ui-react'
import Footer from './Footer'
import Headers from './Headers'

const SearchProfileResult = () => {

    return(
        <Segment vertical style={{backgroundColor: '#F6F6F6'}}>
        <Container>
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Headers />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                    <Header 
                        content = "PLAYER PROFILES"
                        style={{
                            fontFamily: 'AGRESSIVE',
                            fontWeight: 'bold',
                            fontSize: '25px',
                        }}
                    
                    />
                    <Divider />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Input placeholder="Search for player" />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{paddingBottom: '1em'}}>
                    <Grid.Column textAlign="center">                     
                    <Segment textAlign='left' vertical style={{padding: '1em', fontFamily: 'Poppins', fontSize: '18px', backgroundColor: '#000000', color: '#FAFAFA'}}>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                Chimo Okereke
                                            </Grid.Column>
                                            <Grid.Column textAlign='right' width={8}>
                                                View full profile <Icon name="right angle" />
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Segment>
                                                    
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{paddingBottom: '1em'}}>
                    <Grid.Column textAlign="center"> 
                    <Segment textAlign='left' vertical style={{padding: '1em', fontFamily: 'Poppins', fontSize: '18px', backgroundColor: '#000000', color: '#FAFAFA'}}>
                                <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                Chimoabi Ekueme
                                            </Grid.Column>
                                            <Grid.Column textAlign='right' width={8}>
                                                View full profile <Icon name="right angle" />
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Segment>                           
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{paddingBottom: '1em'}}>
                    <Grid.Column textAlign="center"> 
                    <Segment textAlign='left' vertical style={{padding: '1em', fontFamily: 'Poppins', fontSize: '18px', backgroundColor: '#000000', color: '#FAFAFA'}}>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                Chima Onkeme
                                            </Grid.Column>
                                            <Grid.Column textAlign='right' width={8}>
                                                View full profile <Icon name="right angle" />
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                    
                                </Segment>                             
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{paddingTop: '6em'}}>
                    <Grid.Column>
                        <Footer />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>

    </Segment>

    )
}
export default SearchProfileResult