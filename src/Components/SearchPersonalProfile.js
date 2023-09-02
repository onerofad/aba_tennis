import {Segment, Grid, Container, Header, Divider, Input, Select, Icon} from 'semantic-ui-react'
import Footer from './Footer'
import Headers from './Headers'

const SearchPersonalProfile = () => {

    const options = [
        { key: 1, text: 'Choice 1', value: 1 },
        { key: 2, text: 'Choice 2', value: 2 },
        { key: 3, text: 'Choice 3', value: 3 },
      ]

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
                                content="PLAYER RANKING"
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
                        <Grid.Column width={4}>
                            <Select 
                                    options={options} 
                                    placeholder="Premier League" 
                                    style={{
                                        color: '#000000',
                                        fontFamily: 'Poppins',
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                   
                                    }}
                            />
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Select 
                                    options={options} 
                                    placeholder="Top 5 Players" 
                                    style={{
                                        color: '#000000',
                                        fontFamily: 'Poppins',
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                    
                                    }}
                            />
                       </Grid.Column>
                        <Grid.Column width={8} textAlign="right">
                            <Input placeholder="search"
                                        style={{
                                            color: '#000000',
                                            fontFamily: 'Poppins',
                                            fontSize: '16px',
                                            fontWeight: 'bold',
                                        
                                        }}
                            
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column>
                        <Header
                            content="RESULT FOR CHIMA"
                            style={{
                                fontFamily: "dharma-gothic-e",
                                color: '#000000',
                                fontWeight: 'bold',
                                fontSize: '35px',
                                characterSpacing: 20,
                                lineSpacing: 100
                            }}
                        />
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
                <Grid.Row style={{padding: '6em 6em 2em'}}>
                    <Grid.Column>
                        <Footer />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>

    </Segment>

    )
}
export default SearchPersonalProfile